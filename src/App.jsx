// App.js
import React from "react";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <HeroSection />
      <Skills></Skills>
      <Projects />
      <Contact />
      
    </div>
  );
}
