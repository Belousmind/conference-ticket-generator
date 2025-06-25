import { useRef } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(MorphSVGPlugin);

export default function ConfLogo() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useGSAP(() => {
    if (!svgRef.current) return;

    const circles = svgRef.current.querySelectorAll<SVGPathElement>('.circle');
    const targets = svgRef.current.querySelectorAll<SVGPathElement>('.target');

    if (circles.length === 0 || targets.length === 0) return;

    gsap.from(circles, {
      scale: 0,
      opacity: 0,
      transformOrigin: 'center',
      stagger: 0.1,
      duration: 0.3,
    });

    circles.forEach((circle, i) => {
      gsap.to(circle, {
        morphSVG: {
          shape: targets[i],
        },
        ease: 'power4.out',
        duration: 1.5,
      });
    });
  });

  return (
    <svg
      ref={svgRef}
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <path className="circle" d="M7,7 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0" fill="#F57463" />
      <path className="circle" d="M14,14 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0" fill="#F57463" />
      <path className="circle" d="M21,7 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0" fill="#F57463" />

      <path className="target" d="M0 26.1C4.8 26.1 8.7 22.2 8.7 17.4C8.7 12.6 4.8 8.7 0 8.7V14.79C1.44 14.79 2.61 15.96 2.61 17.4C2.61 18.84 1.44 20.01 0 20.01V26.1Z" fill="#F57463" style={{ opacity: 0 }} />
      <path className="target" d="M29 11.6C27.5 11.13 25.93 10.88 24.29 10.88C15.68 10.88 8.7 17.85 8.7 26.46C8.7 27.33 8.77 28.17 8.91 29H18.59C18.24 28.22 18.05 27.37 18.05 26.46C18.05 23.02 20.84 20.23 24.29 20.23C26.17 20.23 27.86 21.06 29 22.38V11.6Z" fill="#F57463" style={{ opacity: 0 }} />
      <path className="target" d="M1.53 0C2.25 6.52 7.78 11.6 14.5 11.6C21.22 11.6 26.75 6.52 27.47 0H18.14C17.56 1.44 16.15 2.46 14.5 2.46C12.85 2.46 11.44 1.44 10.86 0H1.53Z" fill="#F57463" style={{ opacity: 0 }} />
    </svg>
  );
}
