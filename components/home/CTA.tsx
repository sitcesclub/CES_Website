export default function CTA() {
  return (
    <section id="connect" className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 text-center relative overflow-hidden py-16 md:py-0">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 w-full">
        <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Be Part of CES</p>
        
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Learn with us. Build with us.<br />Grow with us.
        </h2>
        
        <p className="max-w-md mx-auto text-sm sm:text-base text-slate-400">
          Gain access to structural mentorship, code hubs, and deep collaborative technical tracking lines.
        </p>
        
        <div className="pt-4">
          <a
            href="https://linktr.ee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-md text-sm font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Connect with CES
          </a>
        </div>
      </div>
    </section>
  );
}
