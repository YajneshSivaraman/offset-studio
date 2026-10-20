// SelectedWork.jsx — Responsive project gallery for OFFSET Studio.

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
} from 'lucide-react';

import { projects } from '../data/projects.js';
import SectionLabel from './SectionLabel.jsx';

// Detect whether the current device supports precise mouse hovering.
function useHoverCapability() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // Touch-first devices should use tap interactions instead of hover.
    const mediaQuery = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );

    const updateCapability = () => setCanHover(mediaQuery.matches);

    updateCapability();
    mediaQuery.addEventListener('change', updateCapability);

    return () => {
      mediaQuery.removeEventListener('change', updateCapability);
    };
  }, []);

  return canHover;
}

// Reusable project preview with mouse and touch interactions.
function ProjectVisual({
  project,
  className = '',
  coverLabel = 'Selected concept',
  canHover,
}) {
  const [revealed, setRevealed] = useState(false);

  // Keep the screenshot visible while the user focuses the card with a keyboard.
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setRevealed((previous) => !previous);
    }
  };

  // Reveal on hover only when the device has a mouse or trackpad.
  const handleMouseEnter = () => {
    if (canHover) setRevealed(true);
  };

  const handleMouseLeave = () => {
    if (canHover) setRevealed(false);
  };

  // Touchscreens toggle the preview when tapped.
  const handleClick = () => {
    if (!canHover) {
      setRevealed((previous) => !previous);
    }
  };

  return (
    <div
      className={`group relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-[#191919] sm:aspect-[16/10] lg:aspect-[16/9] ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${project.name}: ${revealed ? 'hide' : 'show'} website preview`}
      aria-pressed={revealed}
    >
      {/* Typographic cover displayed before the screenshot is revealed. */}
      <div
        className={`absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-500 sm:p-6 md:p-8 ${
          revealed ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        {/* Decorative grid adds the OFFSET studio aesthetic. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff18 1px, transparent 1px), linear-gradient(90deg, #ffffff18 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Project category and concept number. */}
        <div className="relative flex flex-wrap items-start justify-between gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/50 sm:text-[10px] sm:tracking-[0.2em]">
            {coverLabel}
          </span>

          <span className="font-mono text-[9px] uppercase tracking-widest text-[#00D9FF] sm:text-[10px]">
            {project.category}
          </span>
        </div>

        {/* Responsive project title and interaction instruction. */}
        <div className="relative mt-8">
          <h3 className="break-words font-display text-3xl font-bold uppercase leading-[0.9] tracking-[-0.07em] text-[#F4F0E8] sm:text-5xl md:text-6xl lg:text-7xl">
            {project.name}
            <span className="text-[#FF4D00]">.</span>
          </h3>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/20 pt-3 sm:mt-5 sm:pt-4">
            <span className="font-mono text-[9px] uppercase tracking-wider text-white/50 sm:text-[10px] sm:tracking-widest">
              {canHover ? 'Hover to explore' : 'Tap to explore'}
            </span>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#00D9FF] text-[#00D9FF] transition-transform duration-300 group-hover:rotate-45 sm:h-9 sm:w-9">
              <ArrowUpRight size={17} />
            </span>
          </div>
        </div>

        {/* Small decorative corner accent. */}
        <span className="absolute right-4 top-12 h-2 w-2 bg-[#FF4D00] sm:right-6 sm:top-16 md:right-8" />
      </div>

      {/* Show the project screenshot when revealed. */}
      {project.image && (
        <img
          src={project.image}
          alt={`${project.name} website screenshot`}
          loading="lazy"
          draggable="false"
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
            project.id === 'noir'
              ? 'object-cover object-top'
              : 'object-contain object-center'
          } ${revealed ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        />
      )}

      {/* Dark gradient improves contrast over revealed screenshots. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10 transition-opacity duration-500 ${
          revealed && project.image ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Screenshot indicator appears only when a screenshot is available. */}
      {project.image && (
        <div
          className={`pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 transition-opacity duration-300 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 ${
            revealed ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-white sm:text-[10px]">
            Website preview
          </span>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00D9FF] text-[#111111] sm:h-9 sm:w-9">
            <MoveUpRight size={17} />
          </span>
        </div>
      )}

      {/* Inform visitors when a screenshot is not yet available. */}
      {!project.image && (
        <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-widest text-white/45 sm:bottom-6 sm:left-6 sm:text-[10px]">
          Preview coming soon
        </span>
      )}
    </div>
  );
}

// Main selected-work section.
export default function SelectedWork() {
  const reduceMotion = useReducedMotion();
  const canHover = useHoverCapability();

  // Track the currently selected NOIR website version.
  const [noirVersion, setNoirVersion] = useState(0);

  // Separate the featured NOIR project from the other concepts.
  const noir = projects.find((project) => project.id === 'noir');

  const otherProjects = projects.filter(
    (project) => project.id !== 'noir'
  );

  // Select the image and URL belonging to the active NOIR version.
  const activeVersion = noir?.versions?.[noirVersion];

  const activeNoirProject = noir
    ? {
        ...noir,
        image: activeVersion?.image ?? noir.image,
      }
    : null;

  return (
    <section
      id="work"
      className="overflow-hidden bg-[#111111] px-4 py-20 text-[#F4F0E8] sm:px-6 sm:py-24 md:px-10 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Responsive section heading and introduction. */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-14 md:mb-20 md:flex-row md:items-end">
          <div className="min-w-0">
            <SectionLabel number="01">Selected work</SectionLabel>

            <h2 className="mt-7 font-display text-4xl font-bold uppercase leading-[0.92] tracking-[-0.07em] sm:mt-8 sm:text-6xl md:text-7xl lg:text-8xl">
              Ideas made
              <br />
              <span className="text-[#00D9FF]">visible.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/55 md:pb-2">
            Independent website concepts built around strong visual
            identities, thoughtful layouts and memorable digital
            experiences.{' '}
            {canHover
              ? 'Hover over a preview to explore.'
              : 'Tap a preview to explore.'}
          </p>
        </div>

        {/* Featured NOIR project. */}
        {noir && (
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
            className="mb-14 sm:mb-20"
          >
            {/* Large responsive preview for the selected NOIR version. */}
            <ProjectVisual
              key={`noir-${noirVersion}`}
              project={activeNoirProject}
              canHover={canHover}
              className="sm:aspect-[16/9] lg:aspect-[2/1]"
              coverLabel={`Featured concept / ${String(noirVersion + 1).padStart(2, '0')}`}
            />

            {/* NOIR title, description and version controls. */}
            <div className="flex flex-col justify-between gap-5 border-b border-white/15 py-5 sm:py-6 lg:flex-row lg:items-center">
              <div className="min-w-0">
                <h3 className="font-display text-3xl font-bold uppercase tracking-[-0.05em] sm:text-4xl">
                  NOIR<span className="text-[#FF4D00]">.</span>
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  {noir.description}
                </p>

                <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-white/35 sm:text-[10px]">
                  {noir.category} / Concept project
                </p>
              </div>

              {/* Version buttons wrap naturally on smaller screens. */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 w-full font-mono text-[10px] uppercase tracking-widest text-white/40 sm:mr-2 sm:w-auto">
                  Versions
                </span>

                {noir.versions?.map((version, index) => (
                  <button
                    key={version.label}
                    type="button"
                    onClick={() => setNoirVersion(index)}
                    aria-pressed={noirVersion === index}
                    className={`min-h-11 border px-3 py-2.5 font-mono text-xs transition-colors sm:px-4 ${
                      noirVersion === index
                        ? 'border-[#00D9FF] bg-[#00D9FF] text-[#111111]'
                        : 'border-white/20 text-white/65 hover:border-[#00D9FF] hover:text-[#00D9FF]'
                    }`}
                  >
                    {version.label}
                  </button>
                ))}

                {/* Open the currently selected live NOIR website. */}
                {activeVersion?.url && (
                  <a
                    href={activeVersion.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-0 inline-flex min-h-11 items-center gap-2 border border-[#FF4D00] px-3 py-2.5 font-mono text-xs uppercase tracking-widest text-[#FF4D00] transition-colors hover:bg-[#FF4D00] hover:text-[#111111] sm:ml-1 sm:px-4"
                  >
                    Visit <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        )}

        {/* Responsive gallery of the remaining website concepts. */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-y-12 lg:grid-cols-2 lg:gap-y-14">
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
              className="min-w-0"
            >
              {/* All project cards share consistent responsive dimensions. */}
              <ProjectVisual
                project={project}
                canHover={canHover}
                coverLabel={`Concept / ${String(index + 2).padStart(2, '0')}`}
              />

              {/* Project details and optional external website link. */}
              <div className="flex items-start justify-between gap-4 border-b border-white/15 py-5 sm:py-6">
                <div className="min-w-0 flex-1">
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-[#00D9FF] sm:text-[10px]">
                    {project.category}
                  </p>

                  <h3 className="break-words font-display text-xl font-bold uppercase tracking-tight sm:text-2xl md:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/50">
                    {project.description}
                  </p>

                  <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-white/35">
                    Independent concept project
                  </p>
                </div>

                {/* Keep the external link easy to tap on mobile. */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} website`}
                    className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#111111]"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing link to the services section. */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-5 font-mono text-[9px] uppercase tracking-widest text-white/40 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <span>Independent concepts / Made by OFFSET</span>

          <a
            href="#services"
            className="flex items-center gap-2 transition-colors hover:text-[#00D9FF]"
          >
            What we do <ArrowDownRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}