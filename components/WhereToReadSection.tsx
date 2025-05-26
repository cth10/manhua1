import React from 'react';
import { Section } from './Section.js';
import { MagnifyingGlassIcon, GlobeEuropeAfricaIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const WhereToReadSection = () => {
  return (
    <Section
      id="onde-ler"
      title="Onde Encontrar Manhuas?"
      className="bg-white"
      icon={<MagnifyingGlassIcon className="h-10 w-10" />}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="mb-4">
            Com a crescente popularidade dos manhuas, diversas plataformas e editoras têm disponibilizado esses quadrinhos para o público global.
          </p>
          <ul className="space-y-3 list-inside">
            <li className="flex items-start">
              <CheckBadgeIcon className="h-6 w-6 text-brand-primary mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong>Plataformas Digitais e Webtoon Apps:</strong> Muitos manhuas são lançados oficialmente em aplicativos e sites especializados em webtoons. Algumas dessas plataformas oferecem traduções em vários idiomas, incluindo o português.
              </span>
            </li>
            <li className="flex items-start">
              <CheckBadgeIcon className="h-6 w-6 text-brand-primary mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong>Editoras Internacionais:</strong> Algumas editoras ao redor do mundo licenciam e publicam manhuas em formato impresso ou digital em seus respectivos idiomas. Vale a pena pesquisar por editoras que atuam no Brasil ou em Portugal.
              </span>
            </li>
            <li className="flex items-start">
              <CheckBadgeIcon className="h-6 w-6 text-brand-primary mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong>Comunidades de Fãs (Scanlations):</strong> Embora não oficiais, grupos de fãs (scanlators) frequentemente traduzem manhuas para diversos idiomas. É importante lembrar de apoiar os criadores e as publicações oficiais sempre que possível.
              </span>
            </li>
          </ul>
          <p className="mt-6 font-semibold text-brand-dark">
            Ao procurar por manhuas, priorize fontes oficiais para apoiar os artistas e a indústria!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://placehold.co/600x450/E8F5E9/4A90E2/Lendo+Manhua+Online"
            alt="Ilustração de pessoa lendo manhua em um tablet ou smartphone"
            className="rounded-lg shadow-xl w-full max-w-md object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
};

export { WhereToReadSection };
