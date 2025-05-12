import TextInput from './text-input';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import Button from './button';
import schema from './form.schema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ImageInput from './image-input';

type FormProps = z.infer<typeof schema>;

export default function TicketForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormProps) => {
    console.log('Valid data:', data);
  };

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <ImageInput register={register('image')} error={errors.image} />
      <TextInput
        label="Full Name"
        placeholder=""
        id="name"
        type="text"
        register={register('name')}
        error={errors.name}
      />
      <TextInput
        label="Email Address"
        placeholder="example@email.com"
        id="email"
        type="text"
        register={register('email')}
        error={errors.email}
      />
      <TextInput
        label="GitHub Username"
        placeholder="@yourusername"
        id="github"
        type="text"
        register={register('github')}
        error={errors.github}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        text={isSubmitting ? 'Loading...' : 'Generate My Ticket'}
      />
    </form>
  );
}
