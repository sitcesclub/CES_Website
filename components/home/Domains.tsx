const domains = [
  { id: "01", title: "Development", desc: "Building scalable web platforms, architectures, applications, and core system utilities." },
  { id: "02", title: "Cloud & DevOps", desc: "Learning modern cloud-native systems, containerization strategies, and automation pipes." },
  { id: "03", title: "AI / ML", desc: "Exploring neural networks, predictive datasets, data parsing systems, and machine learning models." },
  { id: "04", title: "Cybersecurity", desc: "Understanding operational infrastructure defense systems, testing processes, and cryptography." },
  { id: "05", title: "Open Source", desc: "Contributing to global public codebases, managing git branches, and engineering shared tools." },
  { id: "06", title: "Community", desc: "Hosting peer development circles, managing tech talks, and organizing programming sprints." },
];

export default function Domains() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16 bg-transparent border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12 border-l border-white/[0.1] pl-4">
          <p className="text-[11px] font-medium tracking-[2px] text-[var(--ces-text-secondary)] uppercase mb-2">What We Do</p>
          <h2 className="text-3xl font-medium text-[var(--ces-text-primary)] tracking-tight">Technical Scope & Focus Tracks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <div 
              key={domain.id} 
              className="p-6 bg-white/[0.01] border border-white/[0.05] rounded-xl hover:border-white/[0.12] transition-colors flex flex-col justify-between group h-48 backdrop-blur-sm"
            >
              <div>
                <span className="text-xs font-mono text-[var(--ces-text-muted)] block mb-2">{domain.id}</span>
                <h3 className="text-lg font-medium text-[var(--ces-text-primary)] mb-2">
                  {domain.title}
                </h3>
                <p className="text-[13px] text-[var(--ces-text-muted)] line-clamp-2 leading-relaxed">{domain.desc}</p>
              </div>
              <div className="text-[var(--ces-text-muted)] group-hover:text-[var(--ces-text-primary)] transition-colors text-right text-lg">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
