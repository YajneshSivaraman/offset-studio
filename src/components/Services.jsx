
// Services.jsx — explain what OFFSET Studio offers.
import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';

// Keep service descriptions together so they're easy to update.
const services = [
  {
    number: '01',
    title: 'One-page websites',
    description:
      'A focused, responsive website that introduces your business, showcases your services and gives visitors a clear way to contact you.',
    includes: ['Custom visual design', 'Mobile-friendly layout', 'WhatsApp enquiry link'],
  },
  {
    number: '02',
    title: 'Multi-page websites',
    description:
      'A more detailed website for businesses that need dedicated pages for their services, gallery, story and contact information.',
    includes: ['Multiple connected pages', 'Consistent visual identity', 'Navigation and contact flow'],
  },
  {
    number: '03',
    title: 'Custom website design',
    description:
      'A website concept tailored to your business, audience and personality rather than a generic template.',
    includes: ['Visual direction', 'Custom page sections', 'Responsive implementation'],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-[#F4F0E8] px-5 py-24 text-[#111111] md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading and short introduction. */}
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel number="02" light>Services</SectionLabel>
            <h2 className="mt-8 font-display text-5xl font-bold uppercase leading-[0.88] tracking-[-0.07em] sm:text-7xl md:text-8xl">
              Built around
              <br />
              <span className="text-[#FF4D00]">your business.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/60 md:col-span-4 md:justify-self-end">
            From a focused online presence to a complete multi-page experience,
            each website is designed around what your business needs.
          </p>
        </div>

        {/* Interactive service list. */}
        <div className="border-t border-black/20">
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <motion.div
                key={service.number}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="border-b border-black/20"
              >
                <button
                  type="button"
                  onClick={() => setActiveService(isActive ? -1 : index)}
                  aria-expanded={isActive}
                  className="group grid w-full grid-cols-[2.5rem_1fr_2.5rem] items-center gap-3 py-6 text-left sm:grid-cols-[4rem_1fr_3rem] sm:py-8"
                >
                  <span className="font-mono text-xs text-black/45">
                    {service.number}
                  </span>

                  <span className="font-display text-2xl font-semibold uppercase tracking-tight transition-colors group-hover:text-[#FF4D00] sm:text-4xl md:text-5xl">
                    {service.title}
                  </span>

                  <span className={`flex h-9 w-9 items-center justify-center border border-black/25 transition-all ${isActive ? 'rotate-45 bg-[#FF4D00] text-white' : 'group-hover:border-[#FF4D00]'}`}>
                    <ArrowUpRight size={18} />
                  </span>
                </button>

                {/* Reveal service details when selected. */}
                {isActive && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-6 overflow-hidden pb-8 pl-0 sm:grid-cols-2 sm:pl-16 md:grid-cols-12"
                  >
                    <p className="max-w-lg text-sm leading-7 text-black/65 md:col-span-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 md:col-span-5 md:col-start-8">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm">
                          <span className="h-2 w-2 shrink-0 bg-[#00AFCF]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Direct visitors to the enquiry section. */}
<a
  href="#contact"
  className="mt-10 inline-flex items-center gap-3 !text-[#F4F0E8] bg-[#111111] px-5 py-4 font-display text-sm font-bold uppercase transition-colors hover:bg-[#FF4D00] hover:!text-[#111111]"
>
  Discuss your project
  <ArrowDownRight size={18} />
</a>
      </div>
    </section>
  );
}
