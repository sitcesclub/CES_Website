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
    <section className="min-h-screen flex flex-col justify-center border-t border-white/[0.03] py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[2px] text-[var(--ces-text-secondary)] uppercase mb-2">Spotlight</p>
            <h2 className="text-3xl font-medium text-[var(--ces-text-primary)] tracking-tight">Featured Events</h2>
          </div>
          <Link href="/events" className="text-sm font-medium text-[var(--ces-text-muted)] hover:text-[var(--ces-text-primary)] transition-colors">
            View all events →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-white/[0.005] border border-white/[0.05] rounded-xl overflow-hidden group backdrop-blur-sm">
              <div className="h-48 bg-white/[0.01] relative overflow-hidden border-b border-white/[0.03]">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
              
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono tracking-wider">
                    <span className="text-[var(--ces-gold)]">{item.tag}</span>
                    <span className="text-[var(--ces-text-muted)]">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-medium text-[var(--ces-text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[var(--ces-text-muted)] leading-relaxed">{item.desc}</p>
                </div>
                
                <Link href={item.href} className="inline-flex items-center text-xs font-medium text-[var(--ces-text-secondary)] hover:text-[var(--ces-text-primary)] pt-2">
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
