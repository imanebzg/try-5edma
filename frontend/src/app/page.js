// src/app/page.js
"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero'; 
import Careers from './components/Careers'; 
import Testimonals from './components/Testimonials'; 
import Process from './components/Process'; 
import Stats from './components/Stats';
import FAQ from './components/FAQ'; 
import Footer from './components/Footer'; 
// import { N } from 'framer-motion/dist/types.d-O7VGXDJe';





export default function Home() {
  
  const [isVisible, setIsVisible] = useState(false);
 
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
     <Navbar />
     <Hero />
     <Careers />
     <Testimonals />
     <Process />
     <Stats />
     <FAQ />
     <Footer />
    </div>
  );
}