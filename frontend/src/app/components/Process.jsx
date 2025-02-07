
import React from 'react';
import {  Brain, Calendar,HeartHandshake } from '__barrel_optimize__?names=ArrowRight,Brain,Briefcase,Building2,Buildings,Calendar,ChevronRight,GraduationCap,HeartHandshake,Laptop,Mail,Phone,Plane,Star,Stethoscope,Target,Users!=!lucide-react';
const Process = () => {
  return (
    <section className="py-20">
        <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
            Comment ça marche?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">1. Choisis ton Domaine</h3>
            <p className="text-blue-600">Explore nos différentes carrières disponibles et sélectionne celle qui t'intéresse.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">2. Réserve ton Stage</h3>
            <p className="text-blue-600">Choisis tes dates et postule pour un stage d'observation de 1 à 7 jours.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                <HeartHandshake className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">3. Vis l'Expérience</h3>
            <p className="text-blue-600">Découvre le quotidien du métier aux côtés d'un professionnel passionné.</p>
            </div>
        </div>
        </div>
</section>
  );
};

export default Process;
