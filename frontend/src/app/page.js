import {
  ArrowRight,
  Brain,
  Building2,
  Calendar,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Mail,
  Phone,
} from "lucide-react";
import * as data from "./_utils/landing-page-data.js";
import Accordions from "./_components/Accordions.jsx";
import Link from "next/link.js";

export default function Home() {
  return (
    <>
      <div className={`bg-gradient-to-b from-blue-50 via-white to-blue-50 `}>
        {/* Hero Section with updated content */}
        <section
          className="pt-32 pb-20 relative overflow-hidden"
          style={{
            backgroundImage: "url('bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          id="hero"
        >
          <div className="inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-blue-900  mb-8 leading-tight drop-shadow-[0_2px_5px_rgba(255,255,255,0.6)]">
                Découvre ta{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  future carrière
                </span>{" "}
                en action! 🚀
              </h1>

              <p className="text-xl text-white mb-12 leading-relaxed">
                Vis l'expérience unique d'un stage d'observation aux côtés de
                professionnels passionnés. Médecin, pilote, ingénieur... Trouve
                ta voie avant de choisir tes études!
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-6">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition transform hover:scale-105 shadow-lg flex items-center justify-center">
                  <GraduationCap className="mr-2" />
                  <Link href="/login">Espace Jeunes</Link>
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition" />
                </button>

                <button className="group px-8 py-4 bg-white text-blue-800 rounded-full text-lg font-semibold hover:bg-blue-50 transition shadow-lg flex items-center justify-center border-2 border-blue-200">
                  <Building2 className="mr-2" />
                  Espace Entreprises
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-20 bg-white" id="discover">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
              Explore les Carrières de tes Rêves
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.careers.map((career, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                    <career.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {career.title}
                  </h3>
                  <p className="text-blue-600 mb-4">{career.description}</p>
                  <div className="text-sm text-blue-500">
                    <p className="mb-2">{career.duration}</p>
                    <p className="font-medium">
                      Partenaires: {career.partners}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-blue-50" id="testimonials">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
              Ils ont Trouvé leur Voie
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">
                        {testimonial.name}, {testimonial.age} ans
                      </h3>
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
        <section className="py-20" id="how-it-works">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
              Comment ça marche?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  1. Choisis ton Domaine
                </h3>
                <p className="text-blue-600">
                  Explore nos différentes carrières disponibles et sélectionne
                  celle qui t'intéresse.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  2. Réserve ton Stage
                </h3>
                <p className="text-blue-600">
                  Choisis tes dates et postule pour un stage d'observation de 1
                  à 7 jours.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                  <HeartHandshake className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  3. Vis l'Expérience
                </h3>
                <p className="text-blue-600">
                  Découvre le quotidien du métier aux côtés d'un professionnel
                  passionné.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="py-20 bg-gradient-to-b from-white via-blue-50 to-white"
          id="faq"
        >
          <Accordions faqs={data.faqs} />
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">TryKhedma</h3>
                <p className="text-blue-200">
                  La première plateforme algérienne de stages d'observation et
                  de mentorat professionnel.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2 text-blue-200">
                  <li>
                    <a href="#discover" className="hover:text-white transition">
                      Découvrir
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="hover:text-white transition"
                    >
                      Comment ça marche
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="hover:text-white transition"
                    >
                      Témoignages
                    </a>
                  </li>
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
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-200">
              <p>
                &copy; {new Date().getFullYear()} TryKhedma. Tous droits
                réservés.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
