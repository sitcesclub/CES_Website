import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Domains from "@/components/home/Domains";
import Highlights from "@/components/home/Highlights";
import WhatIsHappening from "@/components/home/Upcoming";
import GalleryPreview from "@/components/home/GalleryPreview";
import CTA from "@/components/home/CTA";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Domains />
      <Highlights />
      <WhatIsHappening />
      <GalleryPreview />
      <CTA />
    </>
  );
}
