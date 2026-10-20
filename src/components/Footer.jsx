
// Footer.jsx — close the site with a clear studio identity.
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] px-5 pb-8 pt-12 text-[#F4F0E8] md:px-10">
      <div className="mx-auto max-w-[1600px]">
        {/* Large wordmark acts as the final visual anchor. */}
        <a
          href="#home"
          className="block font-display text-[clamp(4rem,15vw,13rem)] font-bold uppercase leading-[0.8] tracking-[-0.04em]"
        >
          OFFSET<span className="text-[#FF4D00]">.</span>
        </a>

        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/20 pt-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/45">
              Independent digital studio
            </p>
            <p className="mt-2 text-sm text-white/65">
              Thoughtful design. Unusual ideas.
            </p>
          </div>

          <a
            href="#home"
            className="inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#00D9FF]"
          >
            Back to top <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 font-mono text-[9px] uppercase tracking-widest text-white/35 sm:flex-row">
          <span>© {new Date().getFullYear()} OFFSET Studio</span>
          <span>Independent concept portfolio</span>
        </div>
      </div>
    </footer>
  );
}
