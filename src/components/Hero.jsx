
// Hero.jsx — Futuristic, high-energy opening for OFFSET Studio.

import { ArrowDownRight, ArrowUpRight, Crosshair, MoveUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

// Main hero section.
export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Reusable entrance animation that respects reduced-motion settings.
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.7, delay },
  });

  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-77px)] overflow-hidden bg-[#111111] text-[#F4F0E8]"
    >
      {/* Background grid gives the hero a technical, futuristic texture. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(#00D9FF 1px, transparent 1px), linear-gradient(90deg, #00D9FF 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
        }}
      />

      {/* Large ambient color fields add energy without overpowering the text. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-[#FF4D00]/20 blur-[130px] md:h-[650px] md:w-[650px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/4 h-[400px] w-[400px] rounded-full bg-[#00D9FF]/10 blur-[120px]"
      />

      {/* Small technical labels establish the studio's visual identity. */}
      <div className="absolute left-5 top-7 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-white/45 md:left-10 md:top-9">
        <Crosshair size={14} className="text-[#00D9FF]" />
        <span>Independent by design</span>
      </div>

      <div className="absolute right-5 top-7 hidden text-right font-mono text-[9px] uppercase tracking-[0.22em] text-white/40 sm:block md:right-10 md:top-9">
        <p>Digital experiences</p>
        <p className="mt-1 text-[#FF4D00]">No ordinary ideas.</p>
      </div>

      {/* Main layout places the headline beside a custom orbital graphic. */}
      <div className="relative mx-auto grid min-h-[calc(100svh-77px)] max-w-[1600px] grid-cols-1 content-center gap-12 px-5 pb-8 pt-24 md:grid-cols-12 md:gap-6 md:px-10 md:pb-10 md:pt-28">

        {/* Left column: studio introduction and oversized headline. */}
        <div className="relative z-10 md:col-span-8">
          <motion.div {...reveal(0)} className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#FF4D00]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D9FF]">
              Design outside the expected
            </span>
          </motion.div>

          {/* Bold type becomes the main visual statement. */}
          <motion.h1
            {...reveal(0.1)}
            className="font-display text-[clamp(4rem,11.5vw,10.5rem)] font-bold uppercase leading-[0.77] tracking-[-0.09em]"
          >
            Make
            <br />
            some
            <br />
            <span className="relative inline-block text-[#FF4D00]">
              noise
              {/* Small cyan block creates an editorial glitch accent. */}
              
            </span>
            <span className="text-[#00D9FF]">.</span>
          </motion.h1>

          {/* Supporting copy and primary call to action. */}
          <motion.div
            {...reveal(0.25)}
            className="mt-9 flex flex-col gap-7 sm:mt-12 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-md text-sm leading-7 text-white/65 sm:text-base">
              Thoughtful design. Unusual ideas. Websites built to make your
              business impossible to overlook.
            </p>

            <a
              href="#work"
              className="group inline-flex w-fit shrink-0 items-center gap-5 border border-[#FF4D00] bg-[#FF4D00] px-5 py-4 font-display text-xs font-bold uppercase tracking-wider text-[#111111] transition-colors duration-300 hover:border-[#00D9FF] hover:bg-[#00D9FF]"
            >
              Explore the work
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Right column: custom orbital artwork built with SVG, not an image. */}
        <motion.div
          {...reveal(0.2)}
          aria-hidden="true"
          className="relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center md:col-span-4 md:my-auto md:max-w-none"
        >
          {/* Slow rotation adds motion to the orbital rings. */}
          <motion.div
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 35, repeat: Infinity, ease: 'linear' }
            }
            className="absolute inset-[8%] rounded-full border border-[#00D9FF]/35"
          >
            <span className="absolute -left-1 top-1/2 h-2 w-2 bg-[#00D9FF]" />
            <span className="absolute right-[14%] top-[8%] h-2 w-2 bg-[#FF4D00]" />
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 24, repeat: Infinity, ease: 'linear' }
            }
            className="absolute inset-[20%] rounded-full border border-dashed border-[#FF4D00]/55"
          >
            <span className="absolute bottom-[8%] left-[12%] h-3 w-3 rounded-full bg-[#FF4D00] shadow-[0_0_20px_#FF4D00]" />
          </motion.div>

          {/* The central symbol combines a target and a four-point star. */}
          <svg
            viewBox="0 0 300 300"
            className="relative z-10 w-[72%] overflow-visible"
            fill="none"
          >
            <circle cx="150" cy="150" r="90" stroke="#00D9FF" strokeOpacity=".35" />
            <circle cx="150" cy="150" r="65" stroke="#F4F0E8" strokeOpacity=".2" />
            <circle cx="150" cy="150" r="39" stroke="#FF4D00" strokeWidth="1.5" />

            <path
              d="M150 35V95 M150 205V265 M35 150H95 M205 150H265"
              stroke="#00D9FF"
              strokeWidth="1.5"
            />

            <path
              d="M150 105L165 135L195 150L165 165L150 195L135 165L105 150L135 135Z"
              fill="#FF4D00"
            />

            <circle cx="150" cy="150" r="7" fill="#00D9FF" />

            <path
              d="M150 0V20 M280 150H300 M150 280V300 M0 150H20"
              stroke="#F4F0E8"
              strokeOpacity=".6"
            />
          </svg>

          {/* Floating data-style labels make the artwork feel like a system. */}
          <span className="absolute left-0 top-[22%] font-mono text-[9px] uppercase tracking-widest text-[#00D9FF]">
            Fig. 001
          </span>

          <span className="absolute bottom-[17%] right-0 font-mono text-[9px] uppercase tracking-widest text-[#FF4D00]">
            Signal / Noise
          </span>

          <span className="absolute bottom-[5%] left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
            Ideas in motion
          </span>
        </motion.div>

        {/* Bottom navigation strip anchors the hero to the rest of the site. */}
        <div className="flex items-center justify-between gap-4 border-t border-white/20 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45 md:col-span-12 md:mt-2">
          <span>Strategy / Design / Development</span>

          <a
            href="#work"
            className="group flex shrink-0 items-center gap-2 transition-colors hover:text-[#00D9FF]"
          >
            Scroll to explore
            <ArrowDownRight
              size={15}
              className="transition-transform group-hover:translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      {/* A thin orange edge gives the section a sharper finish. */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#FF4D00] via-[#00D9FF] to-transparent"
      />
    </section>
  );
}
