import { FaPlay, FaHeart, FaStar, FaUsers, FaFire, FaTrophy } from "react-icons/fa";
import React from "react";
import { useEffect } from "react";

const Gallery = () => {
        useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);
  const galleryItems = [
    {
      id: 1,
      type: "image",
      title: "Salle de Musculation Douala",
      description: "Équipements modernes dans notre salle principale",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "équipements",
    },
    {
      id: 2,
      type: "image",
      title: "Cours de Danse Africaine",
      description: "Ambiance festive avec nos cours inspirés de la culture camerounaise",
      image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
      category: "cours",
    },
    {
      id: 3,
      type: "video",
      title: "Entraînement Cardio Intensif",
      description: "Session cardio matinale avec notre coach certifié",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "entraînement",
    },
    {
      id: 4,
      type: "image",
      title: "Coaching Personnel",
      description: "Accompagnement personnalisé pour atteindre vos objectifs",
      image: "https://images.unsplash.com/photo-1583500178690-f7fd39ce8b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      category: "coaching",
    },
    {
      id: 5,
      type: "image",
      title: "Espace Yoga & Relaxation",
      description: "Zone dédiée au bien-être et à la méditation",
      image: "https://images.unsplash.com/photo-1506629905853-6e9c2b0b2b8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "bien-être",
    },
    {
      id: 6,
      type: "image",
      title: "Événement Communautaire",
      description: "Challenge mensuel avec nos membres fidèles",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80",
      category: "événements",
    },
  ];

  const testimonials = [
    {
      name: "Marie Ngono",
      role: "Membre depuis 2 ans",
      text: "FitCameroun a changé ma vie ! L'ambiance familiale et les coachs professionnels m'ont aidée à perdre 15kg.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c8e6e4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      rating: 5,
    },
    {
      name: "Jean-Paul Mballa",
      role: "Coach sportif",
      text: "Travailler chez FitCameroun est un plaisir. L'équipement de qualité et l'esprit d'équipe sont exceptionnels.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      rating: 5,
    },
    {
      name: "Claudine Fouda",
      role: "Passionnée de fitness",
      text: "Les cours de danse africaine sont fantastiques ! Je recommande à toutes les femmes camerounaises.",
      image: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-yellow-500 to-red-600">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-16">
            Notre <span className="text-yellow-300">Galerie</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Découvrez l'ambiance authentique de FitCameroun en images
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                      <FaPlay className="text-white text-4xl" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Témoignages de nos <span className="text-green-600">Membres</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce que disent nos membres camerounais de leur expérience FitCameroun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center hover:shadow-xl transition-shadow p-6 border rounded-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-gray-600 italic mt-2">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
