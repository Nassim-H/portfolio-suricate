import React from 'react';
import { MdOutlineBiotech,MdOutlineWork,MdOutlineSchool, MdOutlineCheck   } from "react-icons/md";

const PourquoiSuricate: React.FC = () => {
  return (
    <section id="why-suricate" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12" id='suricate'>Pourquoi Suricate Concept ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="bg-primary text-white p-3 rounded-full mr-4">
              <MdOutlineBiotech />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Innovation</h3>
              <p className="mt-2 text-gray-600">
                Suricate Concept est à la pointe de l'innovation en cybersécurité, développant des solutions avancées pour protéger les systèmes d'information, notamment dans la santé.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary text-white p-3 rounded-full mr-4">
              <MdOutlineWork />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Expertise</h3>
              <p className="mt-2 text-gray-600">
                L'expertise de l'équipe de Suricate Concept garantit non seulement des solutions robustes et fiables, mais aussi diverses et variées, de la cybersécurité à la formation et sensibilisation en passant par le webmarketing. Curieux et passionné du monde digital, devenir un Suricate me permettra d'élargir mes connaissances
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary text-white p-3 rounded-full mr-4">
              <MdOutlineCheck />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Engagement</h3>
              <p className="mt-2 text-gray-600">
                Suricate Concept s'engage à proposer son expertise partout dans le monde, notamment en Algérie. Contribuer au développement de mon pays est une valeur importante pour moi. Avec Suricate Concept, c'est possible !
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary text-white p-3 rounded-full mr-4">
              <MdOutlineSchool />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Contribution</h3>
              <p className="mt-2 text-gray-600">
                Mon désir est de contribuer activement à des projets significatifs, apportant mes compétences et ma créativité pour aider Suricate Concept à atteindre ses ambitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiSuricate;
