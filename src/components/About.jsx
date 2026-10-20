
// About.jsx — introduce the thinking behind OFFSET Studio.
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden bg-[#FF4D00] px-5 py-24 text-[#111111] md:px-10 md:py-32">
      {/* Oversized background type reinforces the studio's graphic identity. */}
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-4 select-none font-display text-[16rem] font-bold leading-none tracking-[-0.1em] text-black/[0.06] md:text-[28rem]">
        O
      </div>

      <div className="relative mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel number="04" light>About OFFSET</SectionLabel>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, rotate: -8, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex h-28 w-28 items-center justify-center border-2 border-[#111111] font-display text-4xl font-bold tracking-[-0.1em] md:h-36 md:w-36 md:text-5xl"
          >
            O<span className="text-[#ecfcff] p-1">F</span><span className="text-[#00D9FF]">F</span>
          </motion.div>
        </div>

        <div className="md:col-span-8">
          <h2 className="max-w-5xl font-display text-4xl font-bold uppercase leading-[0.92] tracking-[-0.065em] sm:text-6xl md:text-7xl">
            Good businesses deserve websites that feel like <span className="underline decoration-[#00D9FF] decoration-4 underline-offset-8">them.</span>
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <p className="text-sm leading-7 text-black/75">
              OFFSET is an independent digital studio focused on creating
              distinctive websites for businesses that want a stronger online
              presence.
            </p>
            <p className="text-sm leading-7 text-black/75">
              The approach is simple: understand the business, find a clear
              visual direction and build a website that makes it easier for
              people to discover what the business offers.
            </p>
          </div>

          <a
            href="#work"
            className="mt-9 inline-flex items-center gap-3 border-b border-[#111111]/40 pb-2 font-display text-sm font-bold uppercase transition-colors hover:border-[#00D9FF]"
          >
            Explore the concepts <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
