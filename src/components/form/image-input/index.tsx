import styles from './styles.module.scss';

import UploadIcon from '@components/svg/upload-icon';
// type ImageInputProps = {

// }

export default function ImageInput() {
  return (
    <label htmlFor="file-load" className={styles.label}>
      Upload Avatar
      <div className={styles.field}>
        <div className={styles['upload-icon-container']}>
          <UploadIcon />
        </div>
        <span className={styles['instruction-text']}>
          Drag and drop or click to upload
        </span>

        <input
          type="file"
          name="file"
          accept=".png, .jpg, .jpeg"
          id="file-load"
          className={styles['file-input']}
        />
      </div>
    </label>
  );
}
