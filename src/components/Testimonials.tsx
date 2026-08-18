import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLang } from "@/lib/i18n";

const Testimonials = () => {
  const { t } = useLang();

  const testimonials = [
    {
      name: "Ali Hamouche",
      text: t(
        "Le service téléphonique de l'agence est tout simplement remarquable. Dès les premières minutes, on est accueilli avec courtoisie, professionnalisme et une grande écoute. Les conseillers prennent le temps de bien comprendre les besoins et répondent à chaque question avec clarté et patience. Très bon service et prix abordables !",
        "The agency's phone service is simply remarkable. From the first minutes you are welcomed with courtesy, professionalism and real attentiveness. The advisors take the time to understand your needs and answer every question with clarity and patience. Great service and affordable prices!",
      ),
      rating: 5,
      location: t("Avis Google — Voyages Maestro", "Google review — Voyages Maestro"),
    },
    {
      name: "Fatima B.",
      text: t(
        "Excellent service ! Notre pèlerinage s'est déroulé sans souci grâce à l'organisation d'Achraf. L'équipe était attentive et professionnelle du début à la fin.",
        "Excellent service! Our pilgrimage went smoothly thanks to Achraf's organization. The team was attentive and professional from start to finish.",
      ),
      rating: 5,
      location: t("Montréal", "Montreal"),
    },
    {
      name: "Ahmed K.",
      text: t(
        "Achraf est disponible, patient et très professionnel. Une expérience spirituelle inoubliable grâce à l'accompagnement exceptionnel de son équipe.",
        "Achraf is available, patient and very professional. An unforgettable spiritual experience thanks to his team's exceptional support.",
      ),
      rating: 5,
      location: "Laval",
    },
    {
      name: "Khadija M.",
      text: t(
        "Service impeccable du début à la fin. L'organisation était parfaite et l'accompagnement spirituel très enrichissant. Je recommande vivement !",
        "Impeccable service from start to finish. The organization was perfect and the spiritual guidance very enriching. Highly recommended!",
      ),
      rating: 5,
      location: t("Québec", "Quebec City"),
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t("Témoignages", "Testimonials")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(
              "Découvrez les expériences de nos pèlerins qui nous font confiance pour leur voyage spirituel",
              "Discover the experiences of the pilgrims who trust us with their spiritual journey",
            )}
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
                  “{testimonial.text}”
                </p>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gold fill-current" size={20} />
                  ))}
                </div>

                <div className="text-center">
                  <div className="font-semibold text-primary text-lg">{testimonial.name}</div>
                  <div className="text-muted-foreground">{testimonial.location}</div>
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
