import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16">
      {/* Structural Geometric Grid Background */}
      <div className="absolute inset-0 z-0 opacity-25 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-400 uppercase">
          Computer Engineers' Society
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          Hero Section
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 font-medium">
          A technical community at{" "}
          <span className="text-slate-200 border-b border-slate-800 pb-0.5">
            Siliguri Institute of Technology
          </span>.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#about"
            className="w-full sm:w-auto px-8 py-3 rounded-md font-semibold text-sm bg-white text-slate-950 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950 text-center"
          >
            Explore CES
          </Link>
          <Link
            href="/events"
            className="w-full sm:w-auto px-8 py-3 rounded-md font-semibold text-sm bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-700 text-center"
          >
            Upcoming Events
          </Link>
        </div>
      </div>
    </section>
  );
}
