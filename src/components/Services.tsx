import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, FileText, Bus, Hotel, Users, Shield } from "lucide-react";
import mosqueImage from "@/assets/mosque-services.jpg";

const Services = () => {
  const services = [
    {
      icon: <Plane className="text-gold" size={32} />,
      title: "Forfaits Hajj",
      description: "Organisez votre pèlerinage du Hajj avec nos forfaits complets incluant vol, hébergement et accompagnement spirituel."
    },
    {
      icon: <Hotel className="text-gold" size={32} />,
      title: "Forfaits Omra",
      description: "Découvrez nos offres Omra sur mesure avec différents niveaux de confort pour votre petit pèlerinage."
    },
    {
      icon: <FileText className="text-gold" size={32} />,
      title: "Assistance Visa",
      description: "Nous vous accompagnons dans toutes les démarches administratives pour l'obtention de votre visa."
    },
    {
      icon: <Bus className="text-gold" size={32} />,
      title: "Transport",
      description: "Transport terrestre organisé entre les lieux saints avec des véhicules climatisés et confortables."
    },
    {
      icon: <Users className="text-gold" size={32} />,
      title: "Accompagnement spirituel",
      description: "Guides religieux expérimentés pour vous accompagner dans votre démarche spirituelle."
    },
    {
      icon: <Shield className="text-gold" size={32} />,
      title: "Assurance voyage",
      description: "Couverture complète pour votre sécurité et votre tranquillité d'esprit pendant votre voyage."
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255,248,240,0.95), rgba(255,248,240,0.95)), url('${mosqueImage}')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Une gamme complète de services pour faire de votre pèlerinage une expérience inoubliable et sereine
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;