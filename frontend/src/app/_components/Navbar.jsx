import React from "react";
import Link from "next/link";
import UserIcon from "./UserIcon";
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-30">
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

    </header>
  );
};

export default Navbar;
