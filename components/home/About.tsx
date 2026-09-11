import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-slate-900 border-y border-slate-800 py-16 md:py-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-6">
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            About CES
          </p>
          
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Shaping the tech landscape for engineering students.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-sm leading-relaxed text-slate-400">
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Who we are</h3>
              <p>A dynamic collective of passionate programmers, thinkers, and engineering students working outside the curriculum boundaries.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Why we exist</h3>
              <p>To bridge the gap between academic textbooks and rapid structural shifts in technology, software engineering, and core infrastructure.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">What we provide</h3>
              <p>Hands-on development labs, peer hackathons, real project collaborations, and an expansive developer network framework.</p>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-semibold text-white hover:text-slate-300 transition-colors group"
            >
              Learn more about our mission
              <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
