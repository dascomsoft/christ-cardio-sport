import React from "react";
import { FaCheck, FaStar, FaCrown, FaHeart, FaCreditCard, FaMobile, FaUniversity, FaMoneyBill } from "react-icons/fa";
import { useEffect } from "react";




const Pricing = () => {
        useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);
  const plans = [
    {
      name: "Découverte",
      price: "15,000",
      period: "mois",
      description: "Parfait pour débuter votre parcours fitness",
      icon: FaHeart,
      color: "green",
      popular: false,
      features: [
        "Accès libre aux équipements",
        "2 cours collectifs/semaine",
        "Vestiaires et douches",
        "Plan d'entraînement de base",
        "Suivi mensuel"
      ]
    },
    {
      name: "Famille Camerounaise",
      price: "25,000",
      period: "mois",
      description: "Le choix favori de nos membres",
      icon: FaStar,
      color: "yellow",
      popular: true,
      features: [
        "Accès illimité 7j/7",
        "Tous les cours collectifs",
        "2 séances coaching/mois",
        "Plan nutrition personnalisé",
        "Suivi hebdomadaire",
        "Accès aux événements VIP",
        "Programme spécialisé au choix"
      ]
    },
    {
      name: "Champion",
      price: "40,000",
      period: "mois",
      description: "Pour les plus ambitieux",
      icon: FaCrown,
      color: "red",
      popular: false,
      features: [
        "Tout du plan Famille +",
        "Coaching personnel illimité",
        "Nutrition et suivi médical",
        "Accès prioritaire aux équipements",
        "Programme de compétition",
        "Massage de récupération",
        "Invitations aux événements exclusifs",
        "Garantie résultats 90 jours"
      ]
    }
  ];

  const paymentMethods = [
    {
      icon: FaCreditCard,
      title: "Cartes Bancaires",
      description: "Visa, MasterCard acceptées"
    },
    {
      icon: FaMobile,
      title: "Mobile Money",
      description: "Orange Money, MTN MoMo"
    },
    {
      icon: FaUniversity,
      title: "Virements",
      description: "Toutes banques camerounaises"
    },
    {
      icon: FaMoneyBill,
      title: "Espèces",
      description: "Paiement sur place"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section améliorée */}
      <section 
        className="relative py-32 bg-gradient-to-br from-green-600 via-yellow-500 to-red-600"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nos <span className="text-yellow-300">Tarifs</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Des tarifs adaptés à tous les budgets camerounais
          </p>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto border border-yellow-400/30">
            <p className="text-lg font-semibold">🎉 Offre Spéciale Nouvel An !</p>
            <p>Premier mois à -50% pour tout nouvel abonnement</p>
          </div>
        </div>
      </section>

      {/* Plans Section améliorée */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  plan.popular 
                    ? 'ring-2 ring-yellow-400 transform hover:scale-[1.03] border-yellow-500' 
                    : 'border border-gray-200 transform hover:scale-[1.02]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-black px-4 py-1 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
                    Plus Populaire
                  </div>
                )}
                
                <div className="p-8 text-center">
                  <div className={`${plan.color === 'green' ? 'bg-green-100 text-green-600' : 
                                  plan.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' : 
                                  'bg-red-100 text-red-600'} 
                                  w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <plan.icon className="text-3xl" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-lg text-gray-600"> FCFA/{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#abonnement"
                    className={`block w-full py-3 px-6 rounded-lg font-bold text-center transition-all duration-200 ${
                      plan.popular 
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-black' 
                        : plan.color === 'green'
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : plan.color === 'red'
                            ? 'bg-red-600 hover:bg-red-700 text-white'
                            : 'bg-yellow-600 hover:bg-yellow-700 text-white'
                    }`}
                  >
                    {plan.popular ? 'Choisir ce plan ⭐' : 'Commencer maintenant'}
                  </a>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Sans engagement • Résiliation facile
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Offres spéciales améliorées */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-white text-blue-600 rounded-full p-2 mr-3">👨‍🎓</span>
                Étudiants
              </h3>
              <p className="mb-4">
                Tarif préférentiel pour tous les étudiants camerounais avec carte valide.
              </p>
              <div className="text-3xl font-bold mb-2">12,000 FCFA/mois</div>
              <p className="text-sm opacity-80">Au lieu de 15,000 FCFA</p>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-white text-purple-600 rounded-full p-2 mr-3">🏢</span>
                Entreprises
              </h3>
              <p className="mb-4">
                Offres groupées pour les entreprises camerounaises.
              </p>
              <div className="text-3xl font-bold mb-2">À partir de -30%</div>
              <p className="text-sm opacity-80">Sur les abonnements collectifs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modalités de paiement améliorées */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl p-8 shadow-lg text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Modalités de Paiement</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Nous facilitons votre adhésion avec des options de paiement adaptées au contexte camerounais
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentMethods.map((method, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200"
                >
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="text-2xl" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm opacity-80">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;