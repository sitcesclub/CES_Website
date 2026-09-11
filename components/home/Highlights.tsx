import Link from "next/link";

const highlights = [
  {
    tag: "HACKATHON",
    date: "05 SEP 2026",
    title: "CES Hackathon 2026",
    desc: "A high-intensity coding sprint where students engineered functional prototypes addressing modern community infrastructure issues.",
    href: "/events",
  },
  {
    tag: "OPEN SOURCE",
    date: "14 AUG 2026",
    title: "SIT Contribution Day",
    desc: "Introducing repository pipelines and engineering practices to students getting started with modern structural systems.",
    href: "/events",
  },
];

export default function Highlights() {
  return (
    <section className="min-h-screen flex items-center bg-slate-900 border-t border-slate-800 py-16 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Spotlight</p>
            <h2 className="text-3xl font-bold tracking-tight text-white">Featured Architecture & Events</h2>
          </div>
          <Link href="/events" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            View all events →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-slate-950 border border-slate-800 rounded-lg overflow-hidden group">
              <div className="h-48 bg-slate-900 relative overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
              </div>
              
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-medium tracking-wider text-slate-300">
                    <span>{item.tag}</span>
                    <span className="text-slate-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-slate-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                
                <Link href={item.href} className="inline-flex items-center text-xs font-semibold text-slate-300 hover:text-white pt-2">
                  View event <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
