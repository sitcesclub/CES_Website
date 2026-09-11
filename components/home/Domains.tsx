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
    <section className="min-h-screen flex items-center bg-slate-950 py-16 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">What We Do</p>
          <h2 className="text-3xl font-bold tracking-tight text-white">Technical Scope & Focus Tracks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <div 
              key={domain.id} 
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors flex flex-col justify-between group h-48"
            >
              <div>
                <span className="text-xs font-mono text-slate-600 block mb-2">{domain.id}</span>
                <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors mb-2">
                  {domain.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">{domain.desc}</p>
              </div>
              <div className="text-slate-600 group-hover:text-white transition-colors text-right text-lg">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
