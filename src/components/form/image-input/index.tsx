import styles from './styles.module.scss';
import { useState, useRef } from 'react';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { UploadIcon, HintIcon } from '@components/svg';
import ImageControls from './image-controls';
import useDragAndDrop from '@hooks/use-drag-and-drop';
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
  const { isDragging, handleDragOver, handleDragLeave, handleDrop } =
    useDragAndDrop(handleFile);

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

  function handleFile(file: File) {
    if (file && file.size <= 500 * 1024) {
      setPreviewImg(URL.createObjectURL(file));
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      if (inputRef.current) {
        inputRef.current.files = dataTransfer.files;
      }
    }
  }

  function handleFileLoad(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file && file.size <= 500 * 1024) {
      setPreviewImg(URL.createObjectURL(file));
    }
  }

  return (
    <label htmlFor="image" className={styles.label}>
      Upload Avatar
      <div
        className={clsx(styles.field, isDragging && styles.dragging)}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className={styles['upload-icon-container']}>
          {previewImg ? <img src={previewImg} alt="" /> : <UploadIcon />}
        </div>
        <div className={styles['instruction-text']}>
          {previewImg ? (
            <ImageControls onDelete={handleDelete} onChange={handleChange} />
          ) : (
            'Drag and drop or click to upload'
          )}
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
