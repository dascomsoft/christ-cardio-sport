
import { useEffect } from "react";
import React from "react";
import { FaHeart, FaUsers, FaTrophy, FaShieldAlt, FaFistRaised, FaRunning } from "react-icons/fa";

const About = () => {
      useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);
  const values = [
    {
      icon: FaHeart,
      title: "Santé & Bien-être",
      description: "Votre santé est notre priorité absolue"
    },
    {
      icon: FaUsers,
      title: "Communauté",
      description: "Une famille unie par la passion du sport"
    },
    {
      icon: FaTrophy,
      title: "Excellence",
      description: "Des résultats exceptionnels pour chacun"
    },
    {
      icon: FaShieldAlt,
      title: "Confiance",
      description: "Un environnement sûr et professionnel"
    }
  ];

  const champions = [
    {
      name: "Francis Ngannou",
      title: "Champion UFC & Fierté Camerounaise",
      quote: "Le sport m'a sauvé la vie. C'est en m'entraînant dur que j'ai pu réaliser mes rêves.",
      image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
    },
    {
      name: "Samuel Eto'o",
      title: "Légende du Football Camerounais",
      quote: "La discipline physique forge le caractère. Chaque Camerounais peut atteindre l'excellence.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec image de fond camerounaise */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-yellow-500 to-red-600">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-16">
            À Propos de <span className="text-yellow-300">Christ-Cardio-Sport</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Depuis 2020, nous accompagnons les Camerounais dans leur quête de bien-être et de forme physique
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Née de la passion de coachs camerounais expérimentés, Christ-Cardio-Sport est aujourd'hui 
                la référence fitness au Cameroun. Nous combinons équipements modernes et approche 
                personnalisée pour offrir une expérience unique.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Notre salle accueille quotidiennement des centaines de membres 
                dans une ambiance conviviale et motivante, reflétant l'esprit camerounais.
              </p>
              <div className="bg-gradient-to-r from-green-600 to-yellow-500 text-white p-6 rounded-lg">
                <p className="text-lg font-semibold flex items-center">
                  <FaFistRaised className="mr-3" />
                  "Ensemble, nous bâtissons un Cameroun plus fort et plus sain !"
                </p>
                <p className="text-sm mt-2 opacity-90">- Équipe Christ-Cardio-Sport</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaRunning className="mr-3 text-green-600" />
                Nos Valeurs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="text-2xl text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Inspirations Camerounaises */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-green-600">Inspirations</span> Camerounaises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inspirés par nos champions camerounais qui ont conquis le monde par leur détermination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {champions.map((champion, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img
                    src={champion.image}
                    alt={champion.name}
                    className="w-20 h-20 rounded-full object-cover mr-6"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{champion.name}</h3>
                    <p className="text-green-600 font-medium">{champion.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "{champion.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
  {/* Call to Action */}
<section className="py-20 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold text-white mb-6">
      Rejoignez la Révolution Fitness
    </h2>
    <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
      Plus de 500 Camerounais nous font déjà confiance pour leur transformation physique
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/contact" 
        className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
      >
        Rejoindre Christ-Cardio-Sport
      </a>
      <a 
        href="/programmes" 
        className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-medium transition-colors duration-200"
      >
        Découvrir nos programmes
      </a>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;
