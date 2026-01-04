import { Hero } from "@/components/vor/sections/Hero";
import { StudioIn60 } from "@/components/vor/sections/StudioIn60";
import { Testimonials } from "@/components/vor/sections/Testimonials";
import { Plans } from "@/components/vor/sections/Plans";
import { Schedule } from "@/components/vor/sections/Schedule";
import { Gallery } from "@/components/vor/sections/Gallery";
import { FAQ } from "@/components/vor/sections/FAQ";
import { FinalCTA } from "@/components/vor/sections/FinalCTA";
import { LocalBusinessJsonLd } from "@/components/vor/JsonLd";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <StudioIn60 />
      <Testimonials />
      <Plans />
      <Schedule />
      <Gallery />
      <FAQ />
      <FinalCTA />
    </>
  );
}
