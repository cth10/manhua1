import React from 'react';

const HeroSection = () => {
  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return;

    const id = targetId.substring(1);
    const element = document.getElementById(id);

    if (element) {
      const headerElement = document.getElementById('app-header'); 
      const headerOffset = headerElement ? headerElement.offsetHeight : 64; 
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative h-[calc(100vh-64px)] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
      <img
        src="https://placehold.co/1920x1080/2c3e50/ecf0f1/Cena+Epica+de+Manhua"
        alt="Ilustração estilizada de arte manhua heroica, uma cena épica e colorida."
        className="absolute inset-0 w-full h-full object-cover filter brightness-50"
        loading="lazy"
      />
      <div className="relative z-10 text-center p-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 playfair-display drop-shadow-lg">
          Descobrindo o Universo dos Manhuas
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto drop-shadow-md">
          Mergulhe nas vibrantes e cativantes histórias em quadrinhos originárias da China.
        </p>
        <a
          href="#definicao"
          onClick={handleSmoothScroll}
          className="mt-8 inline-block bg-brand-primary hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-lg"
        >
          Comece a Explorar
        </a>
      </div>
    </div>
  );
};

export { HeroSection };
