import styles from './styles.module.scss';

export default function ImageControls({
  onDelete,
  onChange,
}: {
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <>
      <button onClick={onDelete} className={styles['image-controls']}>
        Remove image
      </button>
      <button onClick={onChange} className={styles['image-controls']}>
        Change image
      </button>
    </>
  );
}
