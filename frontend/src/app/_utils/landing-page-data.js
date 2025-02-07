import {
  Stethoscope,
  Plane,
  Laptop,
  Users,
  Building2,
  Calendar,
  Star,
} from "lucide-react";
const careers = [
  {
    icon: Stethoscope,
    title: "Médecine",
    description:
      "Découvrez le quotidien des médecins dans différentes spécialités : chirurgie, pédiatrie, cardiologie...",
    duration: "Stage d'observation: 1-7 jours",
    partners: "CHU, Cliniques privées",
  },
  {
    icon: Plane,
    title: "Aviation",
    description:
      "Explorez le monde passionnant de l'aviation avec nos pilotes mentors et découvrez les coulisses du métier.",
    duration: "Stage d'observation: 1-3 jours",
    partners: "Air Algérie, Tassili Airlines",
  },
  {
    icon: Stethoscope,
    title: "Pharmacie",
    description:
      "Immergez-vous dans l'univers pharmaceutique: recherche, officine, industrie pharmaceutique.",
    duration: "Stage d'observation: 1-5 jours",
    partners: "Pharmacies, Laboratoires",
  },
  {
    icon: Laptop,
    title: "Ingénierie",
    description:
      "Explorez différentes branches: informatique, civil, mécanique, électronique...",
    duration: "Stage d'observation: 1-7 jours",
    partners: "Sonatrach, Sonelgaz, Startups",
  },
];

const testimonials = [
  {
    name: "Amina B.",
    age: 17,
    career: "Médecine",
    quote:
      "Grâce à TryKhedma, j'ai pu suivre un chirurgien pendant 3 jours. Cette expérience a confirmé ma vocation!",
    image: "amina.png",
  },
  {
    name: "Karim M.",
    age: 18,
    career: "Aviation",
    quote:
      "J'hésitais entre plusieurs métiers. Le stage avec un pilote m'a ouvert les yeux sur ma vraie passion.",
    image: "karim.png",
  },
];

const faqs = [
  {
    question: "Comment fonctionne un stage d'observation TryKhedma ?",
    answer:
      "Le stage d'observation permet de suivre un professionnel pendant 1 à 7 jours pour découvrir son métier au quotidien. Tu observes ses activités, poses des questions et comprends les réalités du métier avant de t'engager dans cette voie.",
    icon: "🔍",
  },
  {
    question: "Quels métiers puis-je découvrir avec TryKhedma ?",
    answer:
      "TryKhedma te permet de découvrir une grande variété de métiers : médecin, pilote de ligne, pharmacien, ingénieur, architecte, et bien d'autres. Notre réseau de professionnels s'agrandit constamment pour t'offrir plus d'opportunités.",
    icon: "💼",
  },
  {
    question: "À partir de quel âge puis-je participer ?",
    answer:
      "Tu peux participer aux stages d'observation TryKhedma dès l'âge de 15 ans. C'est le moment idéal pour commencer à explorer différentes carrières avant de faire tes choix d'orientation.",
    icon: "📅",
  },
  {
    question: "Les stages sont-ils payants ?",
    answer:
      "L'inscription sur la plateforme est gratuite. Certains stages peuvent avoir des frais administratifs minimes. Des bourses sont disponibles pour les étudiants méritants pour rendre l'expérience accessible à tous.",
    icon: "💰",
  },
  {
    question: "Comment sont sélectionnés les professionnels mentors ?",
    answer:
      "Nos mentors sont des professionnels expérimentés, rigoureusement sélectionnés pour leur expertise et leur capacité à transmettre leur passion. Ils sont tous vérifiés et certifiés par notre équipe.",
    icon: "⭐",
  },
  {
    question: "Puis-je faire plusieurs stages d'observation ?",
    answer:
      "Absolument ! Tu peux participer à autant de stages que tu le souhaites dans différents domaines pour avoir une vision complète des métiers qui t'intéressent.",
    icon: "🔄",
  },
];

// Stats array with updated metrics
const stats = [
  { icon: Users, value: "1000+", label: "Jeunes Orientés" },
  { icon: Building2, value: "50+", label: "Partenaires" },
  { icon: Calendar, value: "2000+", label: "Stages Réalisés" },
  { icon: Star, value: "98%", label: "Satisfaction" },
];

export { careers, testimonials, faqs, stats };
