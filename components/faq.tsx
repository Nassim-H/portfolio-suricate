'use client'
import React, { useState } from 'react';

function FAQ() {
const [activeIndex, setActiveIndex] = useState<number | null>(null);

const handleQuestionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
};

return (
    <section id="faq" className="py-16 bg-background">
        <div className="container mx-auto ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-primary">F.A.Q</h2>
            <div className="max-w-3xl mx-auto p-6">
                {questions.map((q, index) => (
                    <Question key={index} question={q.question} answer={q.answer} isActive={activeIndex === index} onClick={() => handleQuestionClick(index)} />
                ))}
            </div>
        </div>
    </section>
);
}

function Question({ question, answer, isActive, onClick }: { question: string, answer: React.ReactNode, isActive: boolean, onClick: () => void }) {
    return (
        <div className="mb-8">
            <div className={`cursor-pointer flex justify-between items-center p-4 bg-white rounded-lg shadow-md transition duration-300 ${isActive ? 'border border-gray-300' : ''}`} onClick={onClick}>
                <h3 className="text-xl md:text-2xl font-semibold text-secondary">{question}</h3>
                <svg className={`w-6 h-6 fill-current ${isActive ? 'transform rotate-180' : ''}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>
            </div>
            {isActive && (
                <div className="p-4 mt-2 bg-gray-50 rounded-b-lg shadow-md">
                    <p className="text-gray-700">{answer}</p>
                </div>
            )}
        </div>
    );
}

const questions = [
  {
    question: "Puis-je me présenter en une ligne ?",
    answer: (
        <span>
        Non, donc j&apos;ai développé un <b>site</b> pour le faire !
        </span>
    )
  },
  {
    question: "Pourquoi est-ce que je candidate au poste de Développeur Full-Stack ?",
    answer: (
        <span>
Grâce à mon expérience et ma formation <b>autodidacte</b> en développement web, j&apos;ai découvert une passion pour tout ce qui touche au développement, tant <em>Back-End</em> que <em>Front-End</em>. J&apos;ai principalement travaillé avec <b>PHP Laravel</b> et <b>Python Flask</b> pour le <em>Back-End</em>, et j&apos;ai également approfondi mes compétences en design web et <em>Front-End</em>, notamment avec <b>React</b> et <b>Next.JS</b>. Ce poste chez Suricate Concept est une opportunité idéale pour combiner mes compétences et créer des projets <b>innovants</b> et <b>utiles</b> pour la société.        </span>
    )
  
  },
  {
    question: "Et pourquoi est-ce que je souhaite intégrer Suricate Concept ?",
    answer:  (
        <span>
J&apos;ai découvert votre entreprise au cours de mes études et votre image de marque m&apos;a particulièrement marquée, mais pas que. En effet, votre désir et ambition de travailler dans différents secteurs avec une expertise dans la <b>cybersécurité</b>, la <b>formation</b> et le <b>webmarketing</b> m&apos;a particulièrement attiré. Je souhaite donc intégrer Suricate Concept pour élargir mes connaissances et contribuer à des projets <b>significatifs</b> et <b>innovants</b>. De plus, votre engagement à proposer votre expertise partout dans le monde, notamment en <b>Algérie</b>, me touche particulièrement, car je souhaite contribuer au développement de mon pays.        </span>
      )
},
  {
    question: "Quelle expérience ais-je acquéris dans le monde professionnel ?",
    answer: (
        <span>
Étant encore en sortie d&apos;étude d&apos;un B.U.T Informatique, mon expérience professionnelle est limitée, mais loin d&apos;être inexistante. J&apos;ai réalisé deux stages en entreprise, d&apos;une durée totale de plus de quatre mois. Cette expérience m&apos;a préparée au monde professionnel dans des postes de développeur Full-Stack où j&apos;ai pu alterner entre <em>Back-End</em> et <em>Front-End</em>. J&apos;ai également une expérience professionnelle en tant qu&apos;indépendant, notamment dans le développement mobile en <b>React Native</b> (j&apos;aime apprendre !!). Bien que non professionnelle, mes études m&apos;ont permis de me préparer au monde du travail notamment avec divers projets en équipe avec l&apos;utilisation de <b>Git</b> et de méthodes <b>agiles</b>.        </span>
      )
},
  {
    question: "Quels sont mes projets à long terme ?",
    answer: (
        <span>
À long terme, je souhaite contribuer positivement au développement de mon pays d&apos;origine : l&apos;Algérie, en apportant mes <b>compétences</b> et mon <b>savoir-faire</b> dans le domaine du développement web. Je souhaite également continuer à me former et à apprendre de nouvelles <b>technologies</b> pour rester à jour et <b>compétitif</b>.        </span>
      )
},



];

export default FAQ;