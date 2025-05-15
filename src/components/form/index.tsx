import TextInput from './text-input';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import Button from './button';
import schema from './form.schema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ImageInput from './image-input';
import { useState } from 'react';
import { useTicketStore } from '../../store/ticket-store';

type FormProps = z.infer<typeof schema>;

export default function TicketForm() {
  const [inputKey, setInputKey] = useState(0);
  const setTicket = useTicketStore((state) => state.setTicket);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormProps) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const file = data.image[0];
    const imageUrl = URL.createObjectURL(file);

    setTicket({
      name: data.name,
      email: data.email,
      github: data.github,
      imageUrl,
    });
  };

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <ImageInput
        register={register('image')}
        error={errors.image}
        inputKey={inputKey}
        onReset={() => setInputKey((k) => k + 1)}
      />
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
