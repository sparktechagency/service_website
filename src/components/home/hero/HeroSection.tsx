"use client";

import HeroForm from "./HeroForm";


const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full bg-[url('/images/hero.jpeg')] bg-center bg-no-repeat bg-cover flex items-center justify-center px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(17,24,39,0.7)] z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white max-w-5xl w-full text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-center">
           Direct Access to the People Who Make It Happen 
        </h1>
        <p className="text-base md:text-lg font-medium mb-8 text-center">
          Our mission: To simplify hiring in the manufacturing and engineering sectors, giving candidates more control and employers a direct route to the right people.
        </p>
        <HeroForm />
      </div>
    </section>
  );
};

export default HeroSection;
