import { Metadata } from "@/types";
import { BASE_DESCRIPTION, BASE_TITLE } from "@/constants";
import Hero from "@/components/hero-home";
import FeaturesGrid from "@/components/features-planet";
import Features from "@/components/features-home";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Faqs from "@/components/faqs";
import Script from "next/script";

export const metadata: Metadata = {
  title: BASE_TITLE + " Home",
  description: BASE_DESCRIPTION,
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <Features />
      <TestimonialsCarousel />
      <Faqs />
    </>
  );
}
