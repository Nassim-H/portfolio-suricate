import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const projets = [
//   {
//     title: 'Site de Matching',
//     description: 'Conception et développement d’un site de matching. Plusieurs services développés en équipe : serveur en Spring, serveur API en Python, et Front-End en React.',
//     technologies: ['React', 'Spring', 'Python'],
//     link: 'https://github.com/ton-projet',
//     isOnline: false,
//   },
  {
    title: 'Serveur API',
    description: "Développement d'une API REST de jeux. Utilisation de Insomnia",
    technologies: ['PHP Laravel', 'API REST', 'Python'],
    link: 'https://github.com/Nassim-H/api-games',
    isOnline: false,
  },
  {
    title: 'Site Vitrine en Next.JS',
    description: "Développement d'un site vitrine responsive avec élaboration de la charte graphique.",
    technologies: ['Next.JS', 'Tailwind'],
    link: 'https://raqy.vercel.app/',
    isOnline: true,
  },
  {
    title: 'Portfolio 3D',
    description: "Développement d'un portfolio avec des éléments 3D et la réalisation d'une charte graphique.",
    technologies: ['Next.JS', 'Tailwind'],
    link: 'https://nassim-hassain-licence.vercel.app/',
    isOnline: true,
  },
  {
    title: 'Boutique en ligne',
    description: 'Développement d\'une boutique en ligne de vente de pièces motos.',
    technologies: ['PHP Laravel', 'Tailwind', 'ORM Eloquent'],
    link: 'https://github.com/Nassim-H/moto_west_v1',
    isOnline: false,
  },
  {
    title: "Site de liste de destinations",
    description: "Conception d'un site questionnant une API externe pour afficher et lister les destinations d'un aéroport donné",
    technologies: ['PHP natif', 'Guzzle', 'Bootstrap'],
    link: 'https://github.com/Nassim-H/airports',
    isOnline: false,
  },
  {
    title: 'Blog en Flask',
    description: 'Programmation d\'un blog de film en Python avec Flask.',
    technologies: ['Python Flask'],
    link: 'https://github.com/Nassim-H/blog',
    isOnline: false,
  },
];

const Projets: React.FC = () => {
  return (
    <section id="projets" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12" id='projet'>Quelques Projets...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary">{projet.title}</h3>
              <p className="mt-4 text-gray-600">{projet.description}</p>
              <h2 className="text-xl mt-2 font-semibold text-secondary">Technologies utilisées</h2>
              <ul className="mt-4 text-gray-600 list-disc pl-6">
                {projet.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
              <a href={projet.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300 mt-4 inline-block">
                Lien projet
              </a>
                {projet.isOnline ? (
                    <div className="flex items-center mt-4">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span className="text-green-500">En ligne</span>
                    </div>
                ) : (
                    <div className="flex items-center mt-4">
                    <FaTimesCircle className="text-red-500 mr-2" />
                    <span className="text-red-500">Hors ligne</span>
                    </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projets;
