import React from 'react';
import { Section } from './Section.js';
import { BookOpenIcon } from '@heroicons/react/24/outline';

const DefinitionSection = () => {
  return (
    <Section
      id="definicao"
      title="O Que é Manhua?"
      className="bg-white"
      icon={<BookOpenIcon className="h-10 w-10" />}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <p className="mb-4">
            <strong>Manhua (漫画)</strong> é o termo chinês para histórias em quadrinhos. Assim como o Japão tem seus mangas e a Coreia seus manhwas, a China possui uma rica tradição de arte sequencial que evoluiu significativamente ao longo dos anos, especialmente com a popularização da internet.
          </p>
          <p className="mb-4">
            Originalmente, o termo abrangia diversas formas de arte gráfica, mas hoje é mais comumente associado às narrativas em quadrinhos, que vão desde contos folclóricos e épicos históricos até romances modernos e fantasias elaboradas.
          </p>
          <p>
            Os manhuas contemporâneos, em particular os webtoons (quadrinhos digitais otimizados para leitura em tela), ganharam imensa popularidade global, destacando-se por suas cores vibrantes e estilos artísticos diversificados.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://placehold.co/600x400/FFECF5/FF69B4/Exemplo+de+Manhua"
            alt="Exemplo ilustrativo de uma página de manhua com cores vibrantes"
            className="rounded-lg shadow-xl w-full max-w-md object-cover aspect-video transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
};

export { DefinitionSection };
