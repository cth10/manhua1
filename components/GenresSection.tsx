import React from 'react';
import { Section } from './Section.js';
import { Card } from './Card.js';
import { PuzzlePieceIcon, HeartIcon, BoltIcon, BookOpenIcon as GenreIcon, UsersIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';

const genres = [
  {
    title: "Wuxia (武俠)",
    description: "Aventuras épicas de heróis marciais errantes na China antiga, focadas em honra, justiça e habilidades de luta extraordinárias.",
    icon: <GenreIcon className="h-7 w-7" />,
    imageUrl: "https://placehold.co/400x200/D1C4E9/4A90E2/Wuxia",
    altText: "Ilustração temática Wuxia em manhua, herói com espada"
  },
  {
    title: "Xianxia (仙侠)",
    description: "Fantasia com elementos de mitologia chinesa, envolvendo imortais, deuses, demônios e o cultivo de energia espiritual (Qi) para alcançar a imortalidade.",
    icon: <BoltIcon className="h-7 w-7" />,
    imageUrl: "https://placehold.co/400x200/C8E6C9/FF69B4/Xianxia",
    altText: "Ilustração temática Xianxia em manhua, personagem cultivando energia"
  },
  {
    title: "Cultivo (修真/修炼)",
    description: "Subgênero do Xianxia, focado no processo de 'cultivo', onde protagonistas treinam intensamente para aumentar seu poder espiritual e transcender limitações mortais.",
    icon: <UsersIcon className="h-7 w-7" />,
    imageUrl: "https://placehold.co/400x200/BBDEFB/4A90E2/Cultivo",
    altText: "Ilustração temática Cultivo em manhua, personagem meditando"
  },
  {
    title: "Romance (爱情)",
    description: "Histórias de amor que podem se passar em cenários históricos, modernos ou fantásticos, explorando as complexidades dos relacionamentos.",
    icon: <HeartIcon className="h-7 w-7" />,
    imageUrl: "https://placehold.co/400x200/FFCDD2/FF69B4/Romance",
    altText: "Ilustração temática de Romance em manhua, casal"
  },
  {
    title: "Moderno/Urbano",
    description: "Manhuas ambientados nos dias atuais, frequentemente explorando temas como vida escolar, carreira, dramas familiares e slice of life.",
    icon: <BuildingStorefrontIcon className="h-7 w-7" />,
    imageUrl: "https://placehold.co/400x200/B2EBF2/FF69B4/Urbano+Moderno",
    altText: "Ilustração temática Manhua Moderno/Urbano, cena da cidade"
  }
];

const GenresSection = () => {
  return (
    <Section
      id="generos"
      title="Gêneros Populares"
      className="bg-white"
      icon={<PuzzlePieceIcon className="h-10 w-10" />}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {genres.map((genre, index) => (
          <Card
            key={index}
            title={genre.title}
            description={genre.description}
            icon={genre.icon}
            imageUrl={genre.imageUrl}
            altText={genre.altText}
            className="min-h-[300px] md:min-h-[350px] opacity-0 animate-fade-in-up" // opacity-0 ensures fade-in works with delay
            style={{ animationDelay: `${index * 150}ms` }}
          />
        ))}
      </div>
      <p className="mt-8 text-center text-slate-600">
        Esta é apenas uma amostra! O universo dos manhuas é vasto e continua a se expandir com novos temas e subgêneros criativos.
      </p>
    </Section>
  );
};

export { GenresSection };
