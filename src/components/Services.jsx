import React from "react";
import { FaDumbbell, FaHeart, FaUsers, FaClock, FaBolt, FaRunning, FaCalendarAlt } from "react-icons/fa";
import { useEffect } from "react";






const Services = () => {
        useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);
  const services = [
    {
      icon: FaDumbbell,
      title: "Musculation & Force",
      description: "Équipements professionnels pour développer votre force et votre masse musculaire",
      features: ["Machines guidées", "Poids libres", "Zone fonctionnelle", "Coaching personnalisé"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: FaHeart,
      title: "Cardio Training",
      description: "Améliorez votre endurance avec nos équipements cardio dernière génération",
      features: ["Tapis de course", "Vélos elliptiques", "Rameurs", "Programmes adaptés"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: FaUsers,
      title: "Cours Collectifs",
      description: "Dansez, transpirez et amusez-vous avec nos cours inspirés de la culture camerounaise",
      features: ["Danse africaine", "HIIT", "Yoga", "Zumba locale"],
      image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
    },
    {
      icon: FaBolt,
      title: "Coaching Personnel",
      description: "Un accompagnement sur-mesure avec nos coachs camerounais certifiés",
      features: ["Plan personnalisé", "Suivi nutrition", "Motivation", "Résultats garantis"],
      image: "https://images.unsplash.com/photo-1583500178690-f7fd39ce8b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      icon: FaClock,
      title: "Programmes Spécialisés",
      description: "Des programmes adaptés aux besoins spécifiques des Camerounais",
      features: ["Gestion diabète", "Perte de poids", "Préparation sportive", "Rééducation"],
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4221&q=80"
    },
    {
      icon: FaBolt,
      title: "Événements Communautaires",
      description: "Participez à nos événements qui renforcent l'esprit de communauté",
      features: ["Challenges mensuels", "Tournois", "Journées santé", "Célébrations culturelles"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section améliorée */}
      <section 
        className="relative py-32 bg-gradient-to-br from-green-600 via-yellow-500 to-red-600"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nos <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Découvrez notre gamme complète de services conçus pour vous accompagner 
            dans votre parcours fitness, adaptés à la culture camerounaise
          </p>
        </div>
      </section>

      {/* Services Grid améliorée */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-green-600 p-3 rounded-full shadow-md">
                    <service.icon className="text-white text-xl" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="#contact" 
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horaires Section améliorée */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-yellow-500 rounded-xl p-8 text-white text-center shadow-xl">
            <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
              <FaCalendarAlt className="mr-4 text-3xl" />
              Horaires Flexibles
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nous nous adaptons à votre rythme de vie camerounais avec des horaires étendus
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <h3 className="text-2xl font-bold mb-4">Semaine</h3>
                <p className="text-xl mb-3">Lundi - Vendredi</p>
                <p className="text-3xl font-bold text-yellow-300 mb-2">6h00 - 22h00</p>
                <p className="text-sm opacity-90">Cours collectifs : 6h30, 12h30, 18h30</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <h3 className="text-2xl font-bold mb-4">Week-end</h3>
                <p className="text-xl mb-3">Samedi - Dimanche</p>
                <p className="text-3xl font-bold text-yellow-300 mb-2">8h00 - 20h00</p>
                <p className="text-sm opacity-90">Événements spéciaux le samedi</p>
              </div>
            </div>
            
            <div className="mt-8 bg-black/10 rounded-lg p-4 max-w-2xl mx-auto border border-yellow-400/30">
              <p className="font-medium">Fermé les jours fériés officiels</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;