
import React from "react";
import About from "../components/About";
import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import { useEffect } from "react";

const Index = () => {
      useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Index;
