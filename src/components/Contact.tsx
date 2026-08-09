import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import contactImage from "@/assets/contact-background.jpg";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(245,239,230,0.95), rgba(245,239,230,0.95)), url('${contactImage}')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Prêt à planifier votre voyage spirituel ? Notre équipe est à votre disposition pour vous accompagner
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-0 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">
                Demande de renseignements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Nom et prénom *
                  </label>
                  <Input placeholder="Votre nom complet" className="border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Téléphone *
                  </label>
                  <Input placeholder="Votre numéro de téléphone" className="border-border" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  E-mail *
                </label>
                <Input placeholder="votre.email@example.com" type="email" className="border-border" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Type de voyage
                </label>
                <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                  <option value="">Sélectionnez un type de voyage</option>
                  <option value="hajj">Hajj</option>
                  <option value="omra">Omra</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea 
                  placeholder="Décrivez vos besoins, vos questions ou demandez un devis personnalisé..."
                  className="border-border min-h-[120px]"
                />
              </div>
              
              <Button variant="spiritual" className="w-full text-lg py-6">
                Envoyer ma demande
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <Card className="shadow-soft border-0">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-spiritual p-3 rounded-full">
                    <Phone className="text-deep-brown" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-2">Téléphone</h3>
                    <p className="text-muted-foreground">+1 514 123 4567</p>
                    <p className="text-sm text-muted-foreground mt-1">Du lundi au vendredi, 9h-18h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-0">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-spiritual p-3 rounded-full">
                    <Mail className="text-deep-brown" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-2">E-mail</h3>
                    <p className="text-muted-foreground">contact@hajjassist.ca</p>
                    <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-0">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-spiritual p-3 rounded-full">
                    <MapPin className="text-deep-brown" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-2">Adresse</h3>
                    <p className="text-muted-foreground">3450 Rue Saint-Denis</p>
                    <p className="text-muted-foreground">Montréal, QC H2X 3L1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-0">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-spiritual p-3 rounded-full">
                    <Clock className="text-deep-brown" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-2">Horaires</h3>
                    <p className="text-muted-foreground">Lundi - Vendredi : 9h00 - 18h00</p>
                    <p className="text-muted-foreground">Samedi : 10h00 - 16h00</p>
                    <p className="text-muted-foreground">Dimanche : Fermé</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;