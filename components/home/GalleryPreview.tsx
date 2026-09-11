import Link from "next/link";

const galleryItems = [1, 2, 3];

export default function GalleryPreview() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-white/[0.03] bg-transparent py-20">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[2px] text-[var(--ces-text-secondary)]">
            Visual Feed
          </p>

          <h2 className="text-3xl font-medium tracking-tight text-[var(--ces-text-primary)] sm:text-4xl">
            Moments from CES
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--ces-text-muted)]">
            A glimpse into the events, people, and experiences that make CES
            what it is.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {galleryItems.map((item) => (
            <div
              key={item}
              className="group relative h-64 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0b0d1c]/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/[0.18] hover:bg-[#0d1025]/80"
            >
              {/* Ambient glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/[0.07] blur-3xl transition-all duration-500 group-hover:bg-indigo-400/[0.13]" />

              {/* Grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080a18]/80 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-300/50" />

                <span className="text-[10px] font-medium uppercase tracking-[1.5px] text-white/30">
                  CES Moments
                </span>
              </div>
            </div>
          ))}

          {/* View Gallery */}
          <Link
            href="/gallery"
            className="group relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0b0d1c]/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/[0.18] hover:bg-[#0d1025]/80"
          >
            {/* Ambient glow */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/[0.07] blur-3xl transition-all duration-500 group-hover:bg-indigo-400/[0.13]" />

            {/* Grid texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

            {/* Content */}
            <div className="relative flex items-center gap-3">
              <span className="text-sm font-medium text-[var(--ces-text-muted)] transition-colors group-hover:text-[var(--ces-text-primary)]">
                View gallery
              </span>

              <span className="text-lg text-[var(--ces-text-muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--ces-text-primary)]">
                →
              </span>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}