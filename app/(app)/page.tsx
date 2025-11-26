"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import TechBrands from "@/components/tech-brands";
import Features from "@/components/features";
import Testimonials from "@/components/testimonails";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import CallToAction from "@/components/call-to-action";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhyUs from "@/components/why-us";
// import SliderHero from "@/components/slider-hero";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/* <SliderHero /> */}
      <TechBrands />
      <WhyUs />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}
