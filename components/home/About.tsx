export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent py-16 text-center"
    >
      <div className="mx-auto max-w-xl">
        {/* Section Label */}
        <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[2px] text-[#7d84c9]">
          WHO WE ARE
        </p>

        {/* Heading */}
        <h2 className="m-0 text-[44px] font-medium uppercase tracking-[2px]">
          <span className="text-[#4a7fd4]">A B O U T</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-[18px] max-w-[380px] text-[13px] leading-[1.6] text-[#8b85b3]">
          Same sky, further out — the hero&apos;s void keeps drifting into
          indigo as you scroll, no hard cut between sections.
        </p>
      </div>
    </section>
  );
}