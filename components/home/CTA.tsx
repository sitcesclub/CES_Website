export default function CTA() {
  return (
    <section id="connect" className="min-h-screen flex flex-col justify-center items-center border-t border-white/[0.03] text-center relative overflow-hidden py-16 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 w-full relative z-10">
        <p className="text-[11px] font-medium tracking-[2px] text-[var(--ces-text-secondary)] uppercase">Be Part of CES</p>
        
        <h2 className="text-3xl sm:text-5xl font-medium text-[var(--ces-text-primary)] tracking-tight leading-tight">
          Learn with us. Build with us.<br />Grow with us.
        </h2>
        
        <p className="max-w-md mx-auto text-[13px] text-[var(--ces-text-muted)] leading-relaxed">
          Gain access to structural mentorship, code hubs, and deep collaborative technical tracking lines.
        </p>
        
        <div className="pt-4">
          <a
            href="https://linktr.ee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full text-[13px] font-medium bg-[#f2f0fb] text-[#0a0812] hover:bg-[#e2e0eb] transition-all"
          >
            Connect with CES
          </a>
        </div>
      </div>
    </section>
  );
}
