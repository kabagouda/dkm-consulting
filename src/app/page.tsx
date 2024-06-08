import { About } from "@/components/home/About";
import Contact from "@/components/home/Contact";
import { Navigation } from "@/components/home/Navigation";
import Services from "@/components/home/Services";

import Hero from "@/components/home/Hero";
import { Whytochooseus } from "@/components/home/Whychooseus";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Whytochooseus />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
