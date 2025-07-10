import React from "react";
import { Play, MapPin, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 via-yellow-500/80 to-red-600/70"></div>
      
      {/* Contenu principal */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Votre Bien-être,
          <span className="block text-yellow-300">Notre Priorité</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in">
          Au cœur du Cameroun, découvrez la salle de sport qui transforme votre vie
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <div className="flex items-center space-x-2 text-lg bg-black/20 px-4 py-2 rounded-full">
            <MapPin className="h-5 w-5 text-yellow-300" />
            <span>Yaoundé & Douala</span>
          </div>
          <div className="flex items-center space-x-2 text-lg bg-black/20 px-4 py-2 rounded-full">
            <Clock className="h-5 w-5 text-yellow-300" />
            <span>Ouvert 6h - 22h</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <a 
            href="#reservation" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Réserver une séance gratuite
          </a>
          <a 
            href="#programmes" 
            className="flex items-center border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Découvrir nos programmes
          </a>
        </div>

        {/* Statistiques */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-lg">Membres actifs</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
            <div className="text-lg">Coachs certifiés</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-300 mb-2">5★</div>
            <div className="text-lg">Satisfaction client</div>
          </div>
        </div>
      </div>

      {/* Flèche de défilement */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};