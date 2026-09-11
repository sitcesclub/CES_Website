export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[calc(100vh-5rem)] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-col justify-between py-12 sm:py-16">
      <div className="flex w-full flex-col items-center justify-between gap-6 my-auto md:flex-row">
        {/* Hero Content */}
        <div className="min-w-0 flex-1 text-left">
          <p className="mb-1.5 text-[14px] font-medium text-[#c9a24a]">
            Computer Engineers&apos; Society
          </p>

          <h1 className="mb-4 text-[38px] font-medium leading-[1.15] text-[#f5f4fb]">
            Welcomes you
          </h1>

          <p className="mb-6 max-w-[360px] text-[13px] leading-[1.4] text-[#8b85b3]">
            Official Computer Science &amp; Engineering Department Club of
            Siliguri Institute of Technology
          </p>

          <button
            type="button"
            className="cursor-pointer rounded-[24px] border-none bg-[#f2f0fb] px-6 py-2.5 text-[13px] font-medium text-[#0a0812] transition-colors hover:bg-[#e2e0eb] focus:outline-none"
          >
            Join our community
          </button>
        </div>

        {/* Hero Visual */}
        <div className="relative flex h-[190px] w-[190px] shrink-0 items-center justify-center">
          {/* Glowing pulse */}
          <div
            className="absolute right-3.5 top-1 h-[7px] w-[7px] animate-pulse rounded-full bg-[#7a8cff]"
            style={{
              boxShadow: "0 0 10px 2px rgba(122,140,255,0.5)",
            }}
          />

          {/* Robot icon */}
          <svg
            className="h-[88px] w-[88px] text-[#e8c977]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 3h6M12 3v2M12 19v2M5 12H3M21 12h-2M7 7h10v10H7V7zM10 11h.01M14 11h.01M10 14h4"
            />
          </svg>
        </div>
      </div>

      {/* Down Chevron */}
      <div className="flex w-full justify-center pb-4 pt-12">
        <svg
          className="h-4 w-4 animate-bounce text-white/35"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}