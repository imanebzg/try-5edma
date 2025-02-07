import React, { useState } from 'react';
import { ArrowRight, Brain, Briefcase, Building2, Buildings, Calendar, ChevronRight, GraduationCap, HeartHandshake, Laptop, Mail, Phone, Plane, Star, Stethoscope, Target, Users } from '__barrel_optimize__?names=ArrowRight,Brain,Briefcase,Building2,Buildings,Calendar,ChevronRight,GraduationCap,HeartHandshake,Laptop,Mail,Phone,Plane,Star,Stethoscope,Target,Users!=!lucide-react';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('youth');

  return (
    <section
  className="pt-48 pb-32 relative overflow-hidden"
  style={{
    backgroundImage: "url('bg4.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-900  mb-8 leading-tight drop-shadow-[0_2px_5px_rgba(255,255,255,0.6)]">
              Découvre ta{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                future carrière
              </span>
              {' '}en action! 🚀
            </h1>
            
            <p className="text-xl text-white mb-12 leading-relaxed">
            Découvrez le métier de vos rêves en immersion ! Connectez-vous avec des professionnels passionnés et vivez une journée dans leur peau pour explorer votre avenir.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button 
                onClick={() => setActiveTab('youth')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <GraduationCap className="mr-2" />
                Espace Jeunes
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition" />
              </button>
              
              <button 
                onClick={() => setActiveTab('business')}
                className="group px-8 py-4 bg-white text-blue-800 rounded-full text-lg font-semibold hover:bg-blue-50 transition shadow-lg flex items-center justify-center border-2 border-blue-200"
              >
                <Building2 className="mr-2" />
                Espace Entreprises
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;

