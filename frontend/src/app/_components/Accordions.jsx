"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
function Accordions({ faqs }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Questions Fréquentes
      </h2>
      <p className="text-blue-600 text-center mb-12 max-w-2xl mx-auto">
        Tout ce que tu dois savoir sur nos stages d'observation et notre
        programme de mentorat
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.01]"
          >
            <button
              onClick={() =>
                setOpenFaqIndex(openFaqIndex === index ? null : index)
              }
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
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="p-6 pt-0">
                <p className="text-blue-700 leading-relaxed">{faq.answer}</p>
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
  );
}

export default Accordions;
