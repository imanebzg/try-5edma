import React from 'react';
import {  Mail, Phone} from '__barrel_optimize__?names=ArrowRight,Brain,Briefcase,Building2,Buildings,Calendar,ChevronRight,GraduationCap,HeartHandshake,Laptop,Mail,Phone,Plane,Star,Stethoscope,Target,Users!=!lucide-react';
const Footer = () => {
  return (
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
  );
};

export default Footer;
