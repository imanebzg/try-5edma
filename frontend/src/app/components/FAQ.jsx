
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


const faqs = [
    {
      question: "Comment fonctionne un stage d'observation TryKhedma ?",
      answer: "Le stage d'observation permet de suivre un professionnel pendant 1 à 7 jours pour découvrir son métier au quotidien. Tu observes ses activités, poses des questions et comprends les réalités du métier avant de t'engager dans cette voie.",
      icon: "🔍"
    },
    {
      question: "Quels métiers puis-je découvrir avec TryKhedma ?",
      answer: "TryKhedma te permet de découvrir une grande variété de métiers : médecin, pilote de ligne, pharmacien, ingénieur, architecte, et bien d'autres. Notre réseau de professionnels s'agrandit constamment pour t'offrir plus d'opportunités.",
      icon: "💼"
    },
    {
      question: "À partir de quel âge puis-je participer ?",
      answer: "Tu peux participer aux stages d'observation TryKhedma dès l'âge de 15 ans. C'est le moment idéal pour commencer à explorer différentes carrières avant de faire tes choix d'orientation.",
      icon: "📅"
    },
    {
      question: "Les stages sont-ils payants ?",
      answer: "L'inscription sur la plateforme est gratuite. Certains stages peuvent avoir des frais administratifs minimes. Des bourses sont disponibles pour les étudiants méritants pour rendre l'expérience accessible à tous.",
      icon: "💰"
    },
    {
      question: "Comment sont sélectionnés les professionnels mentors ?",
      answer: "Nos mentors sont des professionnels expérimentés, rigoureusement sélectionnés pour leur expertise et leur capacité à transmettre leur passion. Ils sont tous vérifiés et certifiés par notre équipe.",
      icon: "⭐"
    },
    {
      question: "Puis-je faire plusieurs stages d'observation ?",
      answer: "Absolument ! Tu peux participer à autant de stages que tu le souhaites dans différents domaines pour avoir une vision complète des métiers qui t'intéressent.",
      icon: "🔄"
    }
  ];
const FAQ = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
            Questions Fréquentes
            </h2>
            <p className="text-blue-600 text-center mb-12 max-w-2xl mx-auto">
            Tout ce que tu dois savoir sur nos stages d'observation et notre programme de mentorat
            </p>
            
            <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.01]"
                >
                <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-blue-50"
                >
                    <div className="flex items-center gap-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <h3 className="text-xl font-semibold text-blue-900 pr-6">
                        {faq.question}
                    </h3>
                    </div>
                    <div className="flex-shrink-0">
                    {openFaqIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-blue-600" />
                    ) : (
                        <ChevronDown className="w-6 h-6 text-blue-600" />
                    )}
                    </div>
                </button>
                
                <div
                    className={`transition-all duration-300 ease-in-out ${
                    openFaqIndex === index
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                    <div className="p-6 pt-0">
                    <p className="text-blue-700 leading-relaxed">
                        {faq.answer}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>

            <div className="mt-12 text-center">
            <p className="text-blue-600 mb-6">
                Tu as d'autres questions ? N'hésite pas à nous contacter !
            </p>
            
            </div>
        </div>
</section>

  );
};

export default FAQ;

     