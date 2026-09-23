"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const achievements = [
  {
    tag: "RESEARCH AWARD",
    date: "2024–2025",
    title: "Outstanding Paper at Regional Science & Technology Congress, 2025",
    project: "CNN-Based Ensemble Classifier Powered by GAN: A Framework for Crime Data Analysis",
    desc: "A student team from Siliguri Institute of Technology (SIT) secured the Outstanding Paper Award at the 7th Regional Science & Technology Congress 2024–25 for their research on crime data analysis.",
    team: "Arunangshu Nag, Arpan Dey, Rounak Pramanik, Dripta Majumdar",
    mentor: "Dr. Anupam Mukherjee",
  },
  {
    tag: "RESEARCH AWARD",
    date: "2026",
    title: "Outstanding Paper Presentation at Regional Science and Technology Congress, 2026",
    project: "A Hybrid Machine Learning Framework for Geospatial Cyber Crime Prediction and Demographic Pattern Analysis",
    desc: "The research received the Outstanding Paper Presentation Award at the 8th Regional Science & Technology Congress (Region-1), 2026, held at the University of North Bengal.",
    team: "Arnav Biswas, Ayandeep Roy, Suryashis Banerjee, Rimi Dutta",
    mentor: "Dr. Anupam Mukherjee",
  },
  {
    tag: "SIH 2025 • 2ND RUNNERS UP",
    date: "2025",
    title: "2nd Runners Up at Smart India Hackathon (SIH) 2025, Grand Finale — Software Edition",
    teamName: "Team BLACK SYNTEX",
    project: "Smart Crop Advisory System for Small and Marginal Farmers",
    desc: "The team secured 2nd Runner-Up at the Smart India Hackathon 2025 Grand Finale with a solution focused on smart crop advisory support for small and marginal farmers.",
    team: "Ayush Sharma (Lead), Payal Vyas, Plovdiv Kumar Kundu, Nilkamal Adhikari, Avigyan Guha, Poulami Kundu",
    mentor: "Keshav Kumar & Swarnava Mukherjee (CSE Alumni)",
  },
  {
    tag: "SIH 2025 • FINALIST",
    date: "2025",
    title: "Finalists at Smart India Hackathon (SIH) 2025 Grand Finale — Hardware Edition",
    teamName: "Team Grainz",
    project: "Handheld Radio Set having Satellite Personal Tracking System",
    desc: "The team reached the Grand Finale of Smart India Hackathon 2025 with a hardware solution involving a handheld radio and satellite-enabled personal tracking system.",
    team: "Debashish Sinha, Md Shahbaz Hashmi Ansari, Ishika Paul, Prithivi Raj Sha, Manjima Ghosh, Snigdha Bhowmick",
  },
  {
    tag: "CYBERSECURITY • FINALIST",
    date: "2025",
    title: "Finalists of National CyberShield Hackathon — 5th Cybercrime Investigation and Intelligence Summit (CIIS)",
    teamName: "Team HashByte",
    project: "Detecting Fake Banking APKs",
    desc: "The team reached the National CyberShield Hackathon finals with a project focused on detecting fake banking APKs and addressing cybersecurity threats.",
    team: "Amol Kumar, Bhaskar Kumar, Rohini Kumari, Masudar Rahaman",
    mentor: "Dr. Prasanta Kumar Roy",
  },
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
    </svg>
  );
}

export default function Achievements() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const currentScroll = carousel.scrollLeft;

    setCanScrollLeft(currentScroll > 5);
    setCanScrollRight(currentScroll < maxScroll - 5);

    const cards = Array.from(carousel.children) as HTMLElement[];

    if (!cards.length) return;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - currentScroll);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    updateScrollState();

    carousel.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollState);

    return () => {
      carousel.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const firstCard = carousel.children[0] as HTMLElement;

    if (!firstCard) return;

    const gap = 24;
    const amount = firstCard.offsetWidth + gap;

    carousel.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.children[index] as HTMLElement;

    if (!carousel || !card) return;

    carousel.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative z-10 w-full px-5 sm:px-6 lg:px-8 py-12 sm:py-16 bg-transparent">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Intro */}
        <div className="mb-10 sm:mb-14">
          <p className="mb-2.5 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[3px] text-[#6FA8FF]">
            THE ARCHIVE
          </p>

          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-[-1px] text-[#E8EEFF]">
            Achievements
          </h1>

          <p className="mt-3.5 text-[14px] sm:text-[16px] leading-relaxed text-[#8F9CC2] max-w-2xl">
            Celebrating research, innovation, collaboration and competitive excellence across the CES community.
          </p>

          <div className="mt-6 h-px w-20 bg-gradient-to-r from-[#6FA8FF]/50 to-transparent" />
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* LEFT ARROW */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous achievements"
              className="
                absolute left-2 sm:left-3 lg:left-[-20px]
                top-1/2 -translate-y-1/2
                z-20
                flex h-10 w-10 sm:h-11 sm:w-11
                items-center justify-center
                rounded-full
                border border-white/[0.10]
                bg-[#080D24]/90
                text-[#C9D8FF]
                shadow-xl
                backdrop-blur-md
                transition-all duration-200
                hover:border-[#6FA8FF]/50
                hover:bg-[#101936]
                hover:text-white
                active:scale-95
              "
            >
              <ChevronIcon direction="left" />
            </button>
          )}

          {/* RIGHT ARROW */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next achievements"
              className="
                absolute right-2 sm:right-3 lg:right-[-20px]
                top-1/2 -translate-y-1/2
                z-20
                flex h-10 w-10 sm:h-11 sm:w-11
                items-center justify-center
                rounded-full
                border border-white/[0.10]
                bg-[#080D24]/90
                text-[#C9D8FF]
                shadow-xl
                backdrop-blur-md
                transition-all duration-200
                hover:border-[#6FA8FF]/50
                hover:bg-[#101936]
                hover:text-white
                active:scale-95
              "
            >
              <ChevronIcon direction="right" />
            </button>
          )}

          {/* RIGHT EDGE FADE */}
          {canScrollRight && (
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-[#050408] to-transparent" />
          )}

          {/* LEFT EDGE FADE */}
          {canScrollLeft && (
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-[#050408] to-transparent" />
          )}

          {/* Cards */}
          <div
            ref={carouselRef}
            className="
              flex gap-4 sm:gap-6
              overflow-x-auto
              snap-x snap-mandatory
              pb-4
              pr-8
              overscroll-x-contain
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {achievements.map((item, idx) => (
              <article
                key={idx}
                className="
                  group
                  relative
                  flex
                  shrink-0
                  snap-start
                  flex-col
                  overflow-hidden
                  rounded-xl
                  border border-white/[0.06]
                  bg-white/[0.015]
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:border-[#6FA8FF]/40
                  hover:bg-white/[0.025]
                  hover:shadow-[0_8px_30px_rgba(111,168,255,0.06)]

                  w-[calc(100vw-40px)]
                  sm:w-[480px]
                  lg:w-[520px]
                  xl:w-[540px]
                "
              >
                {/* Visual Header Area */}
                <div
                  className="
                    relative
                    h-28
                    sm:h-36
                    lg:h-40
                    overflow-hidden
                    border-b border-white/[0.04]
                  "
                >
                  {/* Subtle Grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Large Background Number */}
                  <div
                    className="
                      absolute
                      bottom-1
                      left-4
                      sm:bottom-2
                      sm:left-6
                      text-[56px]
                      sm:text-[76px]
                      lg:text-[84px]
                      font-medium
                      leading-none
                      tracking-[-5px]
                      text-white/[0.035]
                      group-hover:text-white/[0.06]
                      transition-colors
                      select-none
                    "
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Corner Index Tag */}
                  <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-[2px] text-[#6F7DA8]">
                      CES / {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="flex flex-grow flex-col justify-between p-4 sm:p-6 lg:p-7">
                  <div>
                    {/* Category Tag & Date */}
                    <div className="flex items-center justify-between gap-2 text-[9px] sm:text-[10px] font-mono font-medium tracking-[1.5px]">
                      <span className="text-[#6FA8FF]">{item.tag}</span>
                      <span className="text-[#6F7DA8]">{item.date}</span>
                    </div>

                    {/* Achievement Title */}
                    <h3
                      className="
                        mt-3
                        sm:mt-4
                        text-[19px]
                        sm:text-[23px]
                        lg:text-[25px]
                        font-medium
                        leading-tight
                        tracking-[-0.5px]
                        text-[#E8EEFF]
                        group-hover:text-[#C9D8FF]
                        transition-colors
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Team Name badge if present */}
                    {item.teamName && (
                      <div className="mt-2 inline-flex items-center gap-1.5 rounded bg-[#6FA8FF]/10 px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wider text-[#6FA8FF] border border-[#6FA8FF]/20">
                        {item.teamName}
                      </div>
                    )}

                    {/* Project / Paper details */}
                    {item.project && (
                      <p className="mt-2 text-[11px] sm:text-[12px] font-mono text-[#9AA9D6] italic line-clamp-2">
                        &quot;{item.project}&quot;
                      </p>
                    )}

                    {/* Short Description */}
                    <p
                      className="
                        mt-2.5
                        sm:mt-3
                        max-w-xl
                        text-[12px]
                        sm:text-sm
                        leading-[1.65]
                        text-[#8F9CC2]
                        line-clamp-3
                      "
                    >
                      {item.desc}
                    </p>

                    {/* Team Members & Mentor Footer */}
                    <div className="mt-3.5 pt-3 border-t border-white/[0.04] space-y-1 text-[11px] sm:text-[12px] text-[#7D89B5]">
                      {item.team && (
                        <p className="line-clamp-2">
                          <span className="font-medium text-[#9AA9D6]">Team:</span> {item.team}
                        </p>
                      )}
                      {item.mentor && (
                        <p className="line-clamp-1">
                          <span className="font-medium text-[#9AA9D6]">Mentor:</span> {item.mentor}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2">
          {achievements.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to achievement ${index + 1}`}
              onClick={() => scrollToCard(index)}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${
                  activeIndex === index
                    ? "w-6 bg-[#6FA8FF]"
                    : "w-1.5 bg-[#596587] hover:bg-[#8F9CC2]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
