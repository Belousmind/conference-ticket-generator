import { useRef } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(MorphSVGPlugin);

export default function ConfLogo() {
  const circlesRef = useRef<(SVGPathElement | null)[]>([]);
  const pathsRef = useRef<(SVGPathElement | null)[]>([]);

  const setCircleRef = (index: number) => (el: SVGPathElement | null) => {
    circlesRef.current[index] = el;
  };

  useGSAP(() => {
    if (circlesRef.current.length === 0 || pathsRef.current.length === 0)
      return;

    // Анимация появления
    gsap.from(circlesRef.current, {
      scale: 0,
      opacity: 0,
      transformOrigin: 'center',
      stagger: 0.1,
      duration: 0.3,
    });

    // Анимация морфинга
    circlesRef.current.forEach((circle, i) => {
      gsap.to(circle, {
        morphSVG: {
          shape: pathsRef.current[i],
        },
        ease: 'power4.out',
        duration: 1.5,
      });
    });
  });

  return (
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
      {/* Круги */}
      <path
        ref={setCircleRef(0)}
        d="M7,7 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0"
        fill="#F57463"
      />
      <path
        ref={setCircleRef(1)}
        d="M14,14 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0"
        fill="#F57463"
      />
      <path
        ref={setCircleRef(2)}
        d="M21,7 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0"
        fill="#F57463"
      />

      {/* Целевые формы */}
      <path
        ref={(el) => el && (pathsRef.current[0] = el)}
        d="M0 26.1C4.80493 26.1 8.70006 22.2048 8.70006 17.4C8.70006 12.5951 4.80493 8.7 0 8.7V14.79C1.44147 14.79 2.61001 15.9585 2.61001 17.4C2.61001 18.8415 1.44147 20.01 0 20.01V26.1Z"
        fill="#F57463"
        style={{ opacity: 0 }}
      />
      <path
        ref={(el) => el && (pathsRef.current[1] = el)}
        d="M29.0001 11.6001C27.5134 11.1291 25.9302 10.875 24.2875 10.875C15.6787 10.875 8.69995 17.8538 8.69995 26.4625C8.69995 27.3266 8.77027 28.1742 8.90545 29H18.5905C18.2448 28.2249 18.0526 27.3662 18.0526 26.4625C18.0526 23.019 20.844 20.2275 24.2875 20.2275C26.1696 20.2275 27.8569 21.0614 29.0001 22.3798V11.6001Z"
        fill="#F57463"
        style={{ opacity: 0 }}
      />
      <path
        ref={(el) => el && (pathsRef.current[2] = el)}
        d="M1.5293 0C2.25059 6.52492 7.78252 11.6 14.4998 11.6C21.2169 11.6 26.7489 6.52492 27.4702 0H18.1374C17.5613 1.44436 16.1497 2.46499 14.4998 2.46499C12.8498 2.46499 11.4383 1.44436 10.862 0H1.5293Z"
        fill="#F57463"
        style={{ opacity: 0 }}
      />
    </svg>
  );
}
