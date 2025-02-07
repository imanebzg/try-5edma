import React from "react";
import { Laptop, Plane, Stethoscope, Briefcase, Utensils } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

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
      "Explorez différentes branches: informatique, civil, mécanique...",
    duration: "Stage d'observation: 1-7 jours",
    partners: "Sonatrach, Sonelgaz..",
  },
  {
    icon: Briefcase,
    title: "Journalisme",
    description:
      "Vivez une immersion dans le monde des médias : reportage, interviews..",
    duration: "Stage d'observation: 1-4 jours",
    partners: "Télévisions, Journaux, Radios",
  },
  {
    icon: Utensils,
    title: "Chef cuisinier",
    description:
      "Découvrez le métier de chef cuisinier : création de plats et innovation culinaire..",
    duration: "Stage d'observation: 1-5 jours",
    partners: "Restaurants, Écoles de cuisine",
  },
];

const Careers = () => {
  return (
    <section className="py-20 bg-white" id="careers">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
          Explore les Carrières de tes Rêves
        </h2>

        {/* Swiper Container */}
        <div className="relative pb-11">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            spaceBetween={20}
            autoplay={{ delay: 3000 }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            modules={[Pagination, Autoplay]}
            className="w-full pb-10"
          >
            {careers.map((career, index) => (
              <SwiperSlide key={index}>
                <div className="h-[350px] flex flex-col justify-between bg-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                    <career.icon className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {career.title}
                  </h3>

                  {/* Description (Ensures Consistency) */}
                  <p className="text-blue-600 min-h-[100px]">{career.description}</p>

                  {/* Duration & Partners */}
                  <div className="text-sm text-blue-500">
                    <p className="mb-2">{career.duration}</p>
                    <p className="font-medium">Partenaires: {career.partners}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="swiper-pagination flex justify-center" style={{ marginTop: "180px" }}></div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
