
// Animated studio identity strip for OFFSET Studio.
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Marquee() {
  const reduceMotion = useReducedMotion();

  // Keep the moving words easy to edit later.
  const items = [
    'Digital experiences',
    'Web design',
    'Creative development',
    'Distinctive by design',
  ];

  return (
    <section className="relative overflow-hidden bg-[#00D9FF] text-[#111111]">
      {/* Decorative grid gives the strip a technical, editorial feel. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Oversized outline ring adds movement and depth behind the text. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full border border-[#111111]/35 md:-right-8"
        animate={
          reduceMotion
            ? undefined
            : { rotate: 360, scale: [1, 1.08, 1] }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                rotate: { duration: 35, repeat: Infinity, ease: 'linear' },
                scale: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
              }
        }
      >
        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4D00]" />
      </motion.div>

      {/* Small studio label at the top edge. */}
      <div className="relative flex items-center justify-between border-b border-[#111111]/25 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] md:px-10">
        <span>OFFSET® / Independent digital studio</span>
        <span className="hidden sm:inline">Design outside the default</span>
        <span className="sm:hidden">OD / 001</span>
      </div>

      {/* Main animated typography track. */}
      <div className="relative flex min-h-40 items-center overflow-hidden py-8 md:min-h-52 md:py-12">
        <motion.div
          className="flex w-max items-center"
          animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 28, repeat: Infinity, ease: 'linear' }
          }
        >
          {/* Two matching tracks keep the animation visually continuous. */}
          {[...items, ...items].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-7 px-5 md:gap-10 md:px-8"
            >
              <span className="font-display text-5xl font-bold uppercase leading-none tracking-[-0.075em] md:text-8xl lg:text-9xl">
                {item}
              </span>

              {/* Custom geometric mark instead of a generic bullet. */}
              <motion.span
                aria-hidden="true"
                className="relative flex h-9 w-9 shrink-0 items-center justify-center border-2 border-[#111111] md:h-12 md:w-12"
                animate={reduceMotion ? undefined : { rotate: [0, 90, 180, 270, 360] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 8, repeat: Infinity, ease: 'linear' }
                }
              >
                <span className="h-3 w-3 bg-[#FF4D00] md:h-4 md:w-4" />
              </motion.span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar balances the oversized moving headline. */}
      <div className="relative flex items-center justify-between border-t border-[#111111]/25 px-5 py-4 md:px-10">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF4D00]" />
          Independent thinking. Intentional design.
        </div>

        <a
          href="#work"
          className="group flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wide transition-transform hover:translate-x-1"
        >
          Discover our work
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </section>
  );
}
