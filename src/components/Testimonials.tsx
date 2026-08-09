import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Fatima B.",
      text: "Excellent service ! Notre pèlerinage s'est déroulé sans souci grâce à une organisation parfaite. L'équipe était attentive et professionnelle.",
      rating: 5,
      location: "Montréal"
    },
    {
      name: "Ahmed K.",
      text: "Des guides professionnels et attentifs. Une expérience spirituelle inoubliable grâce à l'accompagnement exceptionnel de Safar Voyage.",
      rating: 5,
      location: "Laval"
    },
    {
      name: "Khadija M.",
      text: "Service impeccable du début à la fin. L'organisation était parfaite et l'accompagnement spirituel très enrichissant. Je recommande vivement !",
      rating: 5,
      location: "Québec"
    },
    {
      name: "Omar T.",
      text: "Une équipe dévouée qui nous a accompagnés avec bienveillance. Tout était organisé dans les moindres détails. Merci pour cette expérience unique.",
      rating: 5,
      location: "Gatineau"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Témoignages
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez les expériences de nos pèlerins qui nous font confiance pour leur voyage spirituel
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <Quote className="text-gold" size={32} />
                </div>
                
                <p className="text-muted-foreground text-center mb-6 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gold fill-current" size={20} />
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="font-semibold text-primary text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;