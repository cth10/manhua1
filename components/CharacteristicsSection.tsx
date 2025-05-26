import React from 'react';
import { Section } from './Section.js';
import { Card } from './Card.js';
import { SparklesIcon, ArrowRightCircleIcon, PaintBrushIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const characteristics = [
  {
    title: "Leitura Esquerda-Direita",
    description: "A maioria dos manhuas modernos, especialmente os digitais, são lidos da esquerda para a direita, seguindo o padrão ocidental. Alguns tradicionais podem seguir a leitura da direita para a esquerda.",
    icon: <ArrowRightCircleIcon className="h-8 w-8" />,
    imageUrl: "https://placehold.co/400x200/E0F7FA/4A90E2/Leitura+Manhua",
    altText: "Ilustração de painéis de manhua mostrando direção de leitura"
  },
  {
    title: "Frequentemente Coloridos",
    description: "Uma característica marcante, principalmente em webtoons, é o uso abundante de cores vibrantes, o que contribui para uma experiência visual rica e imersiva.",
    icon: <PaintBrushIcon className="h-8 w-8" />,
    imageUrl: "https://placehold.co/400x200/FFF9C4/FFD700/Cores+Vibrantes",
    altText: "Exemplo de manhua com cores vibrantes e detalhadas"
  },
  {
    title: "Formato Webtoon",
    description: "Muitos manhuas são publicados em formato de longas tiras verticais, otimizados para leitura em smartphones e outros dispositivos digitais.",
    icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
    imageUrl: "https://placehold.co/400x200/FCE4EC/FF69B4/Formato+Webtoon",
    altText: "Demonstração de formato webtoon de manhua em tela de celular"
  },
  {
    title: "Estilos Artísticos Diversos",
    description: "A arte nos manhuas varia enormemente, desde estilos que remetem à pintura tradicional chinesa até traços modernos e estilizados, influenciados por tendências globais.",
    icon: <SparklesIcon className="h-8 w-8" />,
    imageUrl: "https://placehold.co/400x200/EDE7F6/4A90E2/Estilos+Artisticos",
    altText: "Colagem mostrando variedade de estilos de arte em manhua"
  }
];

const CharacteristicsSection = () => {
  return (
    <Section
      id="caracteristicas"
      title="Características Principais"
      className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100"
      icon={<SparklesIcon className="h-10 w-10" />}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {characteristics.map((char, index) => (
          <Card
            key={index}
            title={char.title}
            description={char.description}
            icon={char.icon}
            imageUrl={char.imageUrl}
            altText={char.altText}
            className="opacity-0 animate-fade-in-up" // opacity-0 ensures fade-in works with delay
            style={{ animationDelay: `${index * 150}ms` }}
          />
        ))}
      </div>
    </Section>
  );
};

export { CharacteristicsSection };
