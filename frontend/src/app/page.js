// src/app/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Briefcase, Building2, Buildings, Calendar, ChevronRight, GraduationCap, HeartHandshake, Laptop, Mail, Phone, Plane, Star, Stethoscope, Target, Users } from '__barrel_optimize__?names=ArrowRight,Brain,Briefcase,Building2,Buildings,Calendar,ChevronRight,GraduationCap,HeartHandshake,Laptop,Mail,Phone,Plane,Star,Stethoscope,Target,Users!=!lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
const careers = [
  {
    icon: Stethoscope,
    title: "Médecine",
    description: "Découvrez le quotidien des médecins dans différentes spécialités : chirurgie, pédiatrie, cardiologie...",
    duration: "Stage d'observation: 1-7 jours",
    partners: "CHU, Cliniques privées"
  },
  {
    icon: Plane,
    title: "Aviation",
    description: "Explorez le monde passionnant de l'aviation avec nos pilotes mentors et découvrez les coulisses du métier.",
    duration: "Stage d'observation: 1-3 jours",
    partners: "Air Algérie, Tassili Airlines"
  },
  {
    icon: Stethoscope,
    title: "Pharmacie",
    description: "Immergez-vous dans l'univers pharmaceutique: recherche, officine, industrie pharmaceutique.",
    duration: "Stage d'observation: 1-5 jours",
    partners: "Pharmacies, Laboratoires"
  },
  {
    icon: Laptop,
    title: "Ingénierie",
    description: "Explorez différentes branches: informatique, civil, mécanique, électronique...",
    duration: "Stage d'observation: 1-7 jours",
    partners: "Sonatrach, Sonelgaz, Startups"
  }
];

const testimonials = [
  {
    name: "Amina B.",
    age: 17,
    career: "Médecine",
    quote: "Grâce à TryKhedma, j'ai pu suivre un chirurgien pendant 3 jours. Cette expérience a confirmé ma vocation!",
    image: "amina.png"
  },
  {
    name: "Karim M.",
    age: 18,
    career: "Aviation",
    quote: "J'hésitais entre plusieurs métiers. Le stage avec un pilote m'a ouvert les yeux sur ma vraie passion.",
    image: "karim.png"
  }
];

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


// Stats array with updated metrics
const stats = [
  { icon: Users, value: '1000+', label: 'Jeunes Orientés' },
  { icon: Building2, value: '50+', label: 'Partenaires' },
  { icon: Calendar, value: '2000+', label: 'Stages Réalisés' },
  { icon: Star, value: '98%', label: 'Satisfaction' },
];

export default function Home() {
  
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('youth');

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      const navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.classList.toggle('bg-opacity-90', scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Navbar - Same as before */}
      <nav id="navbar" className="fixed w-full z-50 bg-white shadow-lg transition-all duration-300">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                Try<span className="text-blue-900">Khedma</span>
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#discover" className="text-blue-800 hover:text-blue-600 font-medium transition">
                Découvrir
              </a>
              <a href="#how-it-works" className="text-blue-800 hover:text-blue-600 font-medium transition">
                Comment ça marche
              </a>
              <a href="#testimonials" className="text-blue-800 hover:text-blue-600 font-medium transition">
                Témoignages
              </a>
            </div>

            <div className="flex space-x-4">
              <button className="px-6 py-2 text-blue-900 hover:text-blue-700 font-medium transition">
                Connexion
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:from-blue-700 hover:to-blue-900 transition transform hover:scale-105 shadow-lg">
                Inscription
              </button>
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section with updated content */}
      <section
  className="pt-32 pb-20 relative overflow-hidden"
  style={{
    backgroundImage: "url('bg.png')",
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
              Vis l'expérience unique d'un stage d'observation aux côtés de professionnels passionnés.
              Médecin, pilote, ingénieur... Trouve ta voie avant de choisir tes études!
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


      {/* Careers Section */}
      <section className="py-20 bg-white" id="careers">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
            Explore les Carrières de tes Rêves
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careers.map((career, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                  <career.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{career.title}</h3>
                <p className="text-blue-600 mb-4">{career.description}</p>
                <div className="text-sm text-blue-500">
                  <p className="mb-2">{career.duration}</p>
                  <p className="font-medium">Partenaires: {career.partners}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
            Ils ont Trouvé leur Voie
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">{testimonial.name}, {testimonial.age} ans</h3>
                    <p className="text-blue-600">{testimonial.career}</p>
                  </div>
                </div>
                <p className="text-blue-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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


      {/* Stats Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-blue-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* FAQ Section */}
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
     

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">TryKhedma</h3>
              <p className="text-blue-200">
                La première plateforme algérienne de stages d'observation et de
                mentorat professionnel.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#discover" className="hover:text-white transition">Découvrir</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition">Comment ça marche</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Témoignages</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  contact@trykhedma.dz
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +213 555 123 456
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition">LinkedIn</a>
                <a href="#" className="text-blue-200 hover:text-white transition">Instagram</a>
                <a href="#" className="text-blue-200 hover:text-white transition">Facebook</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} TryKhedma. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}