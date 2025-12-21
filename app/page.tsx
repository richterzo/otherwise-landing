"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Training from "@/components/Training";
import Mindset from "@/components/Mindset";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
// import Loader from "@/components/Loader"; // Uncomment per abilitare il preloader

export default function Home() {
  return (
    <main className="relative">
      {/* <Loader /> */}
      <Navigation />

      <Hero />
      <About />
      <Training />
      <Mindset />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}

