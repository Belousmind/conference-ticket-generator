import { useRef } from 'react';
import styles from './styles.module.scss';
import { ConfLogo } from '@components/svg';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText);

export default function Header() {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    const spitText = new SplitText(textRef.current, { type: 'chars' });
    const chars = spitText.chars;
    gsap.fromTo(
      chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: {
          each: 0.05,
          from: 'random',
        },
        duration: 0.75,
        ease: 'back.out(1.7)',
      }
    );
  });

  return (
    <header className={styles.header}>
      <ConfLogo />
      <span className={styles.text} ref={textRef}>
        Сoding Сonf
      </span>
    </header>
  );
}
