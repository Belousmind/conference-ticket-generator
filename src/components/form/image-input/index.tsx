import styles from './styles.module.scss';
import { useState, useRef } from 'react';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import {UploadIcon, HintIcon} from '@components/svg'
import clsx from 'clsx';

type ImageInputProps = {
  register: UseFormRegisterReturn;
  error?: FieldError;
  inputKey: number;
  onReset: () => void;
};

export default function ImageInput({
  register,
  error,
  inputKey,
  onReset,
}: ImageInputProps) {
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { ref: rhfRef, ...rest } = register;

  const setRefs = (el: HTMLInputElement | null) => {
    rhfRef(el);
    inputRef.current = el;
  };

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setPreviewImg(null);
    onReset();
  }

  function handleChange(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    inputRef.current?.click();
  }

  function handleFileLoad(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    console.log(e.target.files);
    if (file && file.size <= 500 * 1024) {
      setPreviewImg(URL.createObjectURL(file));
    }
  }

  const Buttons = () => {
    return (
      <>
        <button onClick={handleDelete} className={styles['image-controls']}>
          Remove image
        </button>
        <button onClick={handleChange} className={styles['image-controls']}>
          Change image
        </button>
      </>
    );
  };

  return (
    <label htmlFor="image" className={styles.label}>
      Upload Avatar
      <div className={styles.field}>
        <div className={styles['upload-icon-container']}>
          {previewImg ? <img src={previewImg} alt="" /> : <UploadIcon />}
        </div>
        <div className={styles['instruction-text']}>
          {previewImg ? <Buttons /> : 'Drag and drop or click to upload'}
        </div>

        <input
          type="file"
          key={inputKey}
          accept=".jpg, .jpeg, .png, image/jpeg, image/png"
          id="image"
          {...rest}
          ref={setRefs}
          className={styles['file-input']}
          onChange={handleFileLoad}
        />
      </div>
      <span className={clsx(styles.hint, error && styles.invalid)}>
        <HintIcon />
        {error
          ? error.message
          : 'Upload your photo (JPG or PNG, max size: 500KB).'}
      </span>
    </label>
  );
}
