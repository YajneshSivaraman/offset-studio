// React state for the enquiry form.
import { useState } from 'react';

// Motion animations.
import { motion, useReducedMotion } from 'motion/react';

// Icons used in the contact section.
import { ArrowUpRight, MessageCircle } from 'lucide-react';

// Reusable section heading.
import SectionLabel from './SectionLabel.jsx';

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [business, setBusiness] = useState('');
  const [service, setService] = useState('One-page website');
  const [details, setDetails] = useState('');

  // Prepare a message that the visitor can send through WhatsApp.
  // Replace this placeholder with your real number before publishing.
  const whatsappNumber = '917010508392';

  function handleSubmit(event) {
    event.preventDefault();

    if (!whatsappNumber) {
      alert('Add your WhatsApp business number in Contact.jsx before enabling enquiries.');
      return;
    }

    const message = [
      'Hi OFFSET Studio!',
      `Business: ${business || 'Not specified'}`,
      `Service: ${service}`,
      `Project details: ${details || 'I would like to discuss my project.'}`,
    ].join('\n');

    // Open WhatsApp with the visitor's enquiry already filled in.
   // Build a WhatsApp URL with the enquiry pre-filled.
const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contact" className="bg-[#F4F0E8] px-5 py-24 text-[#111111] md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionLabel number="05" light>Start a project</SectionLabel>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 font-display text-5xl font-bold uppercase leading-[0.86] tracking-[-0.075em] sm:text-7xl md:text-8xl"
          >
            Have a good
            <br />
            <span className="text-[#FF4D00]">one.</span>
          </motion.h2>

          <p className="mt-7 max-w-md text-sm leading-7 text-black/60">
            Tell us a little about your business and what you need. We'll use
            the details to start a conversation about the right website for you.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 border border-black/20 px-4 py-3 text-sm transition-colors hover:border-[#FF4D00]">
              View concepts <ArrowUpRight size={16} />
            </a>
            <span className="inline-flex items-center gap-2 px-2 py-3 text-xs text-black/50">
              <MessageCircle size={16} /> WhatsApp enquiries
            </span>
          </div>
        </div>

        {/* Collect only the information needed to start the conversation. */}
        <form onSubmit={handleSubmit} className="space-y-6 md:col-span-5">
          <div>
            <label htmlFor="business" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-black/55">
              Business name
            </label>
            <input
              id="business"
              value={business}
              onChange={(event) => setBusiness(event.target.value)}
              placeholder="What is your business called?"
              className="w-full border-b border-black/25 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-[#FF4D00]"
            />
          </div>

          <div>
            <label htmlFor="service" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-black/55">
              What do you need?
            </label>
            <select
              id="service"
              value={service}
              onChange={(event) => setService(event.target.value)}
              className="w-full border-b border-black/25 bg-transparent py-3 text-sm outline-none focus:border-[#FF4D00]"
            >
              <option>One-page website</option>
              <option>Multi-page website</option>
              <option>Custom website design</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="details" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-black/55">
              Tell us about the project
            </label>
            <textarea
              id="details"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="What would you like your website to do?"
              rows={4}
              className="w-full resize-y border-b border-black/25 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-[#FF4D00]"
            />
          </div>

          <button
            type="submit"
            className="group flex w-full items-center justify-between bg-[#111111] px-5 py-4 font-display text-sm font-bold uppercase text-[#F4F0E8] transition-colors hover:bg-[#FF4D00]"
          >
            Prepare enquiry <ArrowUpRight size={19} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
         
        </form>
      </div>
    </section>
  );
}
