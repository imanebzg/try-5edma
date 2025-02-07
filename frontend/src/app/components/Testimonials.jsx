
import React from 'react';

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
const Testimonals = () => {
  return (
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


  );
};

export default Testimonals;
