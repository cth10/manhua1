import React from 'react';

const Section = ({ id, title, children, className = '', titleClassName = '', contentClassName = '', icon }) => {
  return (
    <section id={id} className={`py-12 md:py-20 px-4 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-center mb-8 md:mb-12">
          {icon && <span className="mr-4 text-brand-primary">{icon}</span>}
          <h2 className={`text-3xl md:text-4xl font-bold playfair-display text-center text-brand-dark ${titleClassName}`}>
            {title}
          </h2>
        </div>
        <div className={`text-lg leading-relaxed text-slate-700 ${contentClassName}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export { Section };
