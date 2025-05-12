import styles from './styles.module.scss';
import React, { useState, useRef } from 'react';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import UploadIcon from '@components/svg/upload-icon';
import HintIcon from '@components/svg/hint-icon';
import clsx from 'clsx';

type ImageInputProps = {
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export default function ImageInput({ register, error }: ImageInputProps) {
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  // const fileInputRef = useRef<HTMLInputElement | null>(null);

  // const { ref, ...rest } = register;

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setPreviewImg(null);
  }

  // function handleChange() {
  //   fileInputRef.current?.click();
  // }

  function handleFileLoad(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = '';

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
        {/* onClick={handleChange} */}
        <button className={styles['image-controls']}>Change image</button>
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
          accept=".jpg, .jpeg, .png, image/jpeg, image/png"
          id="image"
          // ref={fileInputRef}
          {...register}
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
