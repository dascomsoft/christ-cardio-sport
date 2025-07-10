import React from "react";
import { FaDumbbell, FaRunning, FaHeartbeat, FaUsers, FaFire, FaSwimmer, FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";



const Programs = () => {
        useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);
  const programs = [
    {
      icon: FaDumbbell,
      title: "Musculation",
      description: "Développez votre masse musculaire avec nos équipements modernes",
      duration: "45-60 min",
      level: "Tous niveaux",
      color: "bg-red-500"
    },
    {
      icon: FaRunning,
      title: "Cardio Training",
      description: "Améliorez votre endurance et brûlez les calories efficacement",
      duration: "30-45 min",
      level: "Débutant à Avancé",
      color: "bg-blue-500"
    },
    {
      icon: FaHeartbeat,
      title: "HIIT",
      description: "Entraînement par intervalles haute intensité pour des résultats rapides",
      duration: "20-30 min",
      level: "Intermédiaire",
      color: "bg-orange-500"
    },
    {
      icon: FaUsers,
      title: "Cours Collectifs",
      description: "Zumba, Yoga, Pilates dans une ambiance conviviale camerounaise",
      duration: "45-60 min",
      level: "Tous niveaux",
      color: "bg-green-500"
    },
    {
      icon: FaFire,
      title: "Cross Training",
      description: "Entraînement fonctionnel pour une condition physique complète",
      duration: "45 min",
      level: "Avancé",
      color: "bg-purple-500"
    },
    {
      icon: FaSwimmer,
      title: "Aqua Fitness",
      description: "Exercices aquatiques doux pour les articulations",
      duration: "45 min",
      level: "Tous niveaux",
      color: "bg-cyan-500"
    }
  ];

  const schedules = [
    { day: "Lundi", morning: "Musculation", afternoon: "HIIT", evening: "Yoga" },
    { day: "Mardi", morning: "Cardio", afternoon: "Cross Training", evening: "Zumba" },
    { day: "Mercredi", morning: "Musculation", afternoon: "Aqua Fitness", evening: "Pilates" },
    { day: "Jeudi", morning: "HIIT", afternoon: "Cardio", evening: "Cours Collectifs" },
    { day: "Vendredi", morning: "Cross Training", afternoon: "Musculation", evening: "Danse Africaine" },
    { day: "Samedi", morning: "Cours Collectifs", afternoon: "Cardio", evening: "Détente" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec background */}
      <section 
        className="relative py-32 bg-gradient-to-br from-green-600 via-yellow-500 to-red-600"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-16">
            Nos <span className="text-yellow-300">Programmes</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Des programmes adaptés à tous les niveaux pour atteindre vos objectifs de forme physique
          </p>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Découvrez Nos <span className="text-green-600">Programmes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque programme est conçu par nos coachs expérimentés pour vous garantir des résultats optimaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Card Header */}
                <div className="p-6 text-center">
                  <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <program.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                </div>
                
                {/* Card Content */}
                <div className="px-6 pb-6">
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Durée:</span>
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Niveau:</span>
                      <span>{program.level}</span>
                    </div>
                  </div>
                  <a 
                    href="https://wa.me/237XXXXXXXXX" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                  >
                    <FaWhatsapp className="mr-2" />
                    Contacter le coach
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planning <span className="text-green-600">Hebdomadaire</span>
            </h2>
            <p className="text-xl text-gray-600">
              Consultez nos horaires et planifiez vos séances
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-green-600 to-yellow-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Jour</th>
                  <th className="px-6 py-4 text-left font-semibold">Matin (8h-12h)</th>
                  <th className="px-6 py-4 text-left font-semibold">Après-midi (14h-18h)</th>
                  <th className="px-6 py-4 text-left font-semibold">Soir (18h-22h)</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{schedule.day}</td>
                    <td className="px-6 py-4 text-gray-600">{schedule.morning}</td>
                    <td className="px-6 py-4 text-gray-600">{schedule.afternoon}</td>
                    <td className="px-6 py-4 text-gray-600">{schedule.evening}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Commencer Votre Transformation ?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Rejoignez Christ-Cardio-Sport dès aujourd'hui et bénéficiez d'un accompagnement personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/237XXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors duration-200"
            >
              <FaWhatsapp className="mr-2" />
              Contacter sur WhatsApp
            </a>
            <a 
              href="/essai-gratuit" 
              className="border-2 border-white text-white hover:bg-white hover:text-black font-medium py-3 px-6 rounded-lg text-lg transition-colors duration-200"
            >
              Essai gratuit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;