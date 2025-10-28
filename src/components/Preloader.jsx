'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
  const preloaderRef = useRef(null);
  const nameRef = useRef(null);

  useGSAP(() => {
    const name = 'SAKET MISHRA';
    const tl = gsap.timeline({ defaults: { ease: 'power1.inOut' } });

    // clear any existing text (safety)
    if (nameRef.current) nameRef.current.textContent = '';

    // Build typing: for each character, call a function that appends it,
    // then add a small pause (duration controls typing speed).
    for (let i = 0; i < name.length; i++) {
      tl.call(() => {
        if (nameRef.current) nameRef.current.textContent += name[i];
      });
      tl.to({}, { duration: 0.12 }); // pause between keystrokes (adjust)
    }

    // small pause after complete text
    tl.to({}, { duration: 0.6 });

    // After typing finishes → slide bars down + fade everything
    tl.to(
      '.preloader-item',
      {
        y: '100%',
        duration: 0.5,
        stagger: 0.1,
      },
      '+=0.1'
    )
      .to('.name-text', { autoAlpha: 0 }, '<0.3')
      .to(preloaderRef.current, { autoAlpha: 0 }, '<0.8');
  }, { scope: preloaderRef });

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
      ref={preloaderRef}
    >
      {/* sliding strips (keeps your original visual) */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="preloader-item h-full w-[10%] bg-black"></div>
        ))}
      </div>

      {/* Single element used for typing; cursor is ::after so it follows */}
      <p
        ref={nameRef}
        className="name-text typewriter text-[12vw] lg:text-[150px] font-anton text-center leading-none tracking-tight z-10"
        aria-hidden="true"
      />
      
      {/* Cursor + small styling inside JSX (works in React) */}
      <style jsx>{`
        .typewriter {
          display: inline-block;
          white-space: pre; /* preserve spaces */
          position: relative;
        }
        .typewriter::after {
          content: '|';
          display: inline-block;
          margin-left: 4px;
          animation: blink 0.6s steps(1) infinite;
          color: #fff; /* cursor color */
          font-weight: 400;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* make sure preloader strips are on top while animating, but text above them visually */
        .preloader-item { transform: translateY(0%); }
      `}</style>
    </div>
  );
};

export default Preloader;
