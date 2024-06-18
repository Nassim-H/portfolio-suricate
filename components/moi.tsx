import React from 'react';
import { MdWeb ,MdOutlineBugReport ,MdFamilyRestroom , MdOutlineSportsScore    } from "react-icons/md";

const PourquoiMoi: React.FC = () => {
  return (
    <section id="why-me" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12" id='moi'>Pourquoi Moi ?</h2>
        <p className="text-xl m-4 text-center text-gray-600">Suricate dans l&apos;âme, j&apos;ai plusieurs similitudes avec eux : </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="bg-secondary text-white p-3 rounded-full mr-4">
              <MdWeb />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Développeur Passionné</h3>
              <p className="mt-2 text-gray-600">
                Je suis un développeur passionné qui ne fait pas que coder, mais qui veille à toujours continuer de me former, un lait au chocolat à la main. Rien ne m&apos;effraie, pas même l&apos;échec, j&apos;en suis immunisé !
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-secondary text-white p-3 rounded-full mr-4">
              <MdFamilyRestroom  />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Solidarité</h3>
              <p className="mt-2 text-gray-600">
              L&apos;esprit d&apos;équipe et le relationnel sont mes forces. Je prends plaisir à m&apos;assurer que chacun se sente bien et puisse exploiter pleinement ses talents dans un projet. En tant qu&apos;enseignant et animateur, je fais en sorte que chacun s&apos;épanouisse et réussisse.              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-secondary text-white p-3 rounded-full mr-4">
              <MdOutlineBugReport />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Résolution de Problèmes</h3>
              <p className="mt-2 text-gray-600">
              J&apos;adore résoudre des problèmes complexes. Donnez-moi un bug, et je vous donnerai une solution (et peut-être un jeu de mots en bonus). Grâce à ma minutie et mon organisation, notamment dans la gestion du temps, je reste toujours productif. Cette approche méthodique me permet de m&apos;attaquer aux défis les plus ardus avec efficacité et précision.              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-secondary text-white p-3 rounded-full mr-4">
              <MdOutlineSportsScore />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Adaptabilité</h3>
              <p className="mt-2 text-gray-600">
              Qu&apos;il s&apos;agisse de nouvelles technologies ou de changements dans les projets, je m&apos;adapte rapidement, à l&apos;image des suricates qui s&apos;ajustent constamment à leur environnement. J&apos;aime relever les défis en tout genre, ce qui m&apos;a poussé à participer à des compétitions de Karaté combat depuis presque 10 ans. Cette adaptabilité, combinée à ma détermination, me permet de faire face aux situations les plus imprévues avec sérénité et efficacité.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiMoi;
