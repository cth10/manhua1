import React from 'react';
import { Section } from './Section.js';
import { ArrowsRightLeftIcon, GlobeAltIcon, PencilSquareIcon, BookOpenIcon as ComicIcon } from '@heroicons/react/24/outline';

const ComparisonItem = ({ title, origin, readingDirection, colorFormat, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-brand-secondary/30">
    <div className="flex items-center mb-4">
      <span className="text-brand-secondary mr-3">{icon}</span>
      <h3 className="text-2xl font-semibold playfair-display text-brand-dark">{title}</h3>
    </div>
    <ul className="space-y-2 text-slate-700">
      <li><strong>Origem:</strong> {origin}</li>
      <li><strong>Leitura (geralmente):</strong> {readingDirection}</li>
      <li><strong>Cores (frequente):</strong> {colorFormat}</li>
    </ul>
  </div>
);

const ComparisonSection = () => {
  return (
    <Section 
      id="comparacao" 
      title="Manhua vs. Manga vs. Manhwa" 
      className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100"
      icon={<ArrowsRightLeftIcon className="h-10 w-10" />}
    >
      <p className="text-center mb-10 max-w-3xl mx-auto">
        Embora todos sejam formas de histórias em quadrinhos asiáticas, cada um possui características distintas que refletem suas culturas de origem.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <ComparisonItem 
          title="Manhua (漫画)"
          origin="China"
          readingDirection="Esquerda para Direita (webtoons); Direita para Esquerda (tradicionais)"
          colorFormat="Frequentemente coloridos, especialmente digitais"
          icon={<ComicIcon className="h-8 w-8" />}
        />
        <ComparisonItem 
          title="Manga (漫画)"
          origin="Japão"
          readingDirection="Direita para Esquerda"
          colorFormat="Tradicionalmente Preto e Branco (com capas coloridas)"
          icon={<PencilSquareIcon className="h-8 w-8" />}
        />
        <ComparisonItem 
          title="Manhwa (만화)"
          origin="Coreia do Sul"
          readingDirection="Esquerda para Direita"
          colorFormat="Misto (webtoons coloridos; impressos podem ser P&B)"
          icon={<GlobeAltIcon className="h-8 w-8" />}
        />
      </div>
      <p className="mt-10 text-center text-slate-600">
        É importante notar que estas são generalizações. Existem exceções e uma crescente troca de influências entre os estilos.
      </p>
    </Section>
  );
};

export { ComparisonSection };
