
import React from 'react';

const experiences = {
  stage: [
    {
      title: 'Stage Développeur Full Stack',
      company: 'SDIS 62',
      period: 'Avril 2023 - Juin 2023',
      description: 'Développement d\'une interface de connexion sécurisé pour une entreprise de services. Utilisation de PHP Natif, Bootstrap et MySQL.',
    },
    {
      title: 'Stage Développeur Fullt-Stack',
      company: 'Waigéo',
      period: 'Mars 2024 - Juin 2024',
      description: 'Amélioration de l\'expérience utilisateur du site de suivi de projets réalisé en Node et Vue.JS.',
    },
  ],
  clientProjects: [
    {
      title: 'SIte vitrine',
      client: 'Particulier',
      period: '2024',
      description: "Conception d'une charte graphique et Développement d'un site vitrine responsive",
    },
    {
      title: 'Application Mobile',
      client: 'Particulier',
      period: '2024',
      description: "Développement d'une application mobile de réveil en React Native",
    },
  ],
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Expérience Professionnelle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Stages</h3>
            {experiences.stage.map((stage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h4 className="text-xl font-semibold text-gray-800">{stage.title}</h4>
                <p className="text-gray-600">{stage.company} - {stage.period}</p>
                <p className="mt-4 text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Projets pour Clients</h3>
            {experiences.clientProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
                <p className="text-gray-600">{project.client} - {project.period}</p>
                <p className="mt-4 text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
