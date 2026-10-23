
// Process.jsx — show clients how a project moves forward.
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';

// The steps describe the proposed workflow, not guaranteed deadlines.
const steps = [
  {
    number: '01',
    title: 'The conversation',
    description: 'We discuss your business, goals, audience and the features you need.',
  },
  {
    number: '02',
    title: 'The direction',
    description: 'We agree on the visual style, page structure and project scope.',
  },
  {
    number: '03',
    title: 'The build',
    description: 'Your website is designed, developed and checked across screen sizes.',
  },
  {
    number: '04',
    title: 'The handover',
    description: 'After your approval and final payment, the website is handed over according to the agreed scope.',
  },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className="bg-[#111111] px-5 py-24 text-[#F4F0E8] md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel number="03">The process</SectionLabel>
            <h2 className="mt-8 font-display text-5xl font-bold uppercase leading-[0.88] tracking-[-0.07em] sm:text-7xl md:text-8xl">
              Clear steps.
              <br />
              <span className="text-[#00D9FF]">No mystery.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55 md:col-span-4 md:justify-self-end">
            A straightforward process keeps the project focused from the first
            conversation to the final handover.
          </p>
        </div>

        {/* Each step enters as the visitor scrolls down. */}
        <div className="grid grid-cols-1 border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border-b border-white/20 py-7 sm:px-5 sm:first:pl-0 sm:nth-[2n]:border-l sm:nth-[2n]:border-white/20 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:first:pl-0"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="font-mono text-xs text-[#00D9FF]">
                  STEP / {step.number}
                </span>
                <ArrowUpRight size={17} className="text-white/35" />
              </div>

              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
