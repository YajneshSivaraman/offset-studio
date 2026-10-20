
// SelectedWork.jsx — OFFSET Studio's interactive project gallery.

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
} from 'lucide-react';

import { projects } from '../data/projects.js';
import SectionLabel from './SectionLabel.jsx';

// Each card starts with a typographic cover and reveals its screenshot
// on hover. Tapping a card on mobile toggles the screenshot.
function ProjectVisual({
  project,
  className = '',
  coverLabel = 'Selected concept',
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className={`group relative h-[260px] w-full cursor-pointer overflow-hidden bg-[#191919] sm:h-[340px] md:h-[400px] ${className}`}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onClick={() => setRevealed((previous) => !previous)}
      onKeyDown={(event) => {
        // Allow keyboard users to reveal or hide the screenshot.
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setRevealed((previous) => !previous);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${project.name}: ${revealed ? 'hide' : 'show'} website preview`}
      aria-pressed={revealed}
    >
      {/* Typographic cover shown before the screenshot is revealed. */}
      <div
        className={`absolute inset-0 flex flex-col justify-between p-5 transition-opacity duration-500 sm:p-7 ${
          revealed ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Decorative grid gives the cover a studio-design feel. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff18 1px, transparent 1px), linear-gradient(90deg, #ffffff18 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Project metadata. */}
        <div className="relative flex items-start justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            {coverLabel}
          </span>

          <span className="font-mono text-[10px] uppercase tracking-widest text-[#00D9FF]">
            {project.category}
          </span>
        </div>

        {/* Large project title. */}
        <div className="relative">
          <h3 className="break-words font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.07em] text-[#F4F0E8] sm:text-6xl md:text-7xl">
            {project.name}
            <span className="text-[#FF4D00]">.</span>
          </h3>

          <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/45">
              Hover to explore
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#00D9FF] text-[#00D9FF] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </div>
        </div>

        {/* Small corner accent. */}
        <span className="absolute right-5 top-16 h-2 w-2 bg-[#FF4D00] sm:right-7 sm:top-20" />
      </div>

      {/* Screenshot revealed when the card is hovered or tapped. */}
      {project.image && (
        <img
          src={project.image}
          alt={`${project.name} website screenshot`}
          loading="lazy"
          draggable="false"
          className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
            project.id === 'noir'
              ? 'object-cover object-top'
              : 'object-contain object-center'
          } ${revealed ? 'opacity-100' : 'opacity-0'}`}
        />
      )}

      {/* Dark overlay keeps the revealed screenshot visually polished. */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10 transition-opacity duration-500 ${
          revealed ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Screenshot state indicator. */}
      <div
        className={`pointer-events-none absolute bottom-5 left-5 right-5 flex items-center justify-between transition-opacity duration-300 sm:bottom-7 sm:left-7 sm:right-7 ${
          revealed ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-white">
          Website preview
        </span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00D9FF] text-[#111111]">
          <MoveUpRight size={17} />
        </span>
      </div>

      {/* Explain the interaction when no screenshot exists. */}
      {!project.image && (
        <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-widest text-white/45">
          Preview coming soon
        </span>
      )}
    </div>
  );
}

// Main selected-work section.
export default function SelectedWork() {
  const reduceMotion = useReducedMotion();

  // Track the selected NOIR website version.
  const [noirVersion, setNoirVersion] = useState(0);

  // Separate the featured NOIR project from the remaining projects.
  const noir = projects.find((project) => project.id === 'noir');

  const otherProjects = projects.filter(
    (project) => project.id !== 'noir'
  );

  // Resolve the URL and screenshot for the active NOIR version.
  const activeVersion = noir?.versions?.[noirVersion];

  const activeNoirProject = noir
    ? {
        ...noir,
        image: activeVersion?.image ?? noir.image,
        category: noir.category,
      }
    : null;

  return (
    <section
      id="work"
      className="bg-[#111111] px-5 py-24 text-[#F4F0E8] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading and introduction. */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <SectionLabel number="01">Selected work</SectionLabel>

            <h2 className="mt-8 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.07em] sm:text-7xl md:text-8xl">
              Ideas made
              <br />
              <span className="text-[#00D9FF]">visible.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/55 md:pb-2">
            Independent website concepts built around strong visual
            identities, thoughtful layouts and memorable digital
            experiences. Hover or tap to explore each design.
          </p>
        </div>

        {/* Featured NOIR project. */}
        {noir && (
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
            className="mb-20"
          >
            {/* Interactive cover that reveals the selected NOIR screenshot. */}
            <ProjectVisual
              key={`noir-${noirVersion}`}
              project={activeNoirProject}
              className="md:!h-[540px]"
              coverLabel={`Featured concept / 00${noirVersion + 1}`}
            />

            {/* NOIR title and website-version selector. */}
            <div className="flex flex-col justify-between gap-5 border-b border-white/15 py-5 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-display text-3xl font-bold uppercase tracking-[-0.05em] sm:text-4xl">
                  NOIR<span className="text-[#FF4D00]">.</span>
                </h3>

                <p className="mt-2 text-sm text-white/55">
                  {noir.description}
                </p>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-white/35">
                  {noir.category} / Concept project
                </p>
              </div>

              {/* Switch between NOIR versions. */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
                  Versions
                </span>

                {noir.versions?.map((version, index) => (
                  <button
                    key={version.label}
                    type="button"
                    onClick={() => setNoirVersion(index)}
                    aria-pressed={noirVersion === index}
                    className={`border px-4 py-3 font-mono text-xs transition-colors ${
                      noirVersion === index
                        ? 'border-[#00D9FF] bg-[#00D9FF] text-[#111111]'
                        : 'border-white/20 text-white/65 hover:border-[#00D9FF] hover:text-[#00D9FF]'
                    }`}
                  >
                    {version.label}
                  </button>
                ))}

                {/* Open the selected live NOIR website. */}
                {activeVersion?.url && (
                  <a
                    href={activeVersion.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 flex items-center gap-2 border border-[#FF4D00] px-4 py-3 font-mono text-xs uppercase tracking-widest text-[#FF4D00] transition-colors hover:bg-[#FF4D00] hover:text-white"
                  >
                    Visit <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        )}

        {/* Gallery of the remaining website concepts. */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : (index % 2) * 0.12,
              }}
             // Keep every project aligned consistently in the gallery.
className="!h-[260px] sm:!h-[340px] md:!h-[440px]"
            >
              {/* Project cover and screenshot reveal. */}
             <ProjectVisual
  project={project}
  coverLabel={`Concept / ${String(index + 2).padStart(2, '0')}`}
  className={index % 3 === 0 ? 'md:!h-[440px]' : ''}
/>

              {/* Project information and external link. */}
              <div className="flex items-start justify-between gap-4 border-b border-white/15 py-5">
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[#00D9FF]">
                    {project.category}
                  </p>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/50">
                    {project.description}
                  </p>

                  <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-white/35">
                    Independent concept project
                  </p>
                </div>

                {/* Visit the live website in a new tab. */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} website`}
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#111111]"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Link to the services section. */}
        <div className="mt-20 flex items-center justify-between gap-4 border-t border-white/15 pt-5 font-mono text-[10px] uppercase tracking-widest text-white/40">
          <span>Independent concepts / Made by OFFSET</span>

          <a
            href="#services"
            className="flex shrink-0 items-center gap-2 transition-colors hover:text-[#00D9FF]"
          >
            What we do <ArrowDownRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}