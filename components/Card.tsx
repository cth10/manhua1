import React from 'react';

const Card = ({ title, description, icon, className = '', imageUrl, altText, style }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-2xl p-6 hover:shadow-brand-primary/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col ${className}`}
      style={style}
    >
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={altText || title} 
          className="w-full h-40 object-cover rounded-t-lg mb-4" 
          loading="lazy"
        />
      )}
      <div className="flex items-center mb-3">
        {icon && <span className="text-brand-primary mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-brand-dark playfair-display">{title}</h3>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed flex-grow">{description}</p>
    </div>
  );
};
export { Card };
