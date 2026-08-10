import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/lib/i18n";
import souvenirMedina from "@/assets/souvenir-medina.jpg";
import souvenirGroup from "@/assets/souvenir-group.jpg";
import souvenirHotel from "@/assets/souvenir-hotel.jpg";
import souvenirIstanbul from "@/assets/souvenir-istanbul.jpg";

const Souvenirs = () => {
  const { t } = useLang();

  const photos = [
    {
      src: souvenirMedina,
      title: t("Mosquée du Prophète, Médine", "Prophet's Mosque, Madinah"),
      caption: t("Groupe Omra Ramadan", "Ramadan Umrah group"),
    },
    {
      src: souvenirGroup,
      title: t("Départ de Montréal", "Departure from Montreal"),
      caption: t("Nos pèlerins en ihram", "Our pilgrims in ihram"),
    },
    {
      src: souvenirHotel,
      title: t("Hébergement à Makkah", "Accommodation in Makkah"),
      caption: t("Vue sur le Haram", "View of the Haram"),
    },
    {
      src: souvenirIstanbul,
      title: t("Escale à Istanbul", "Istanbul stopover"),
      caption: t("Forfaits combinés", "Combined packages"),
    },
  ];

  return (
    <section id="souvenirs" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t("Souvenirs de nos voyages", "Memories from our journeys")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(
              "Photos et vidéos de nos groupes : des moments de sérénité partagés entre pèlerins.",
              "Photos and videos of our groups: moments of serenity shared between pilgrims.",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {photos.map((photo) => (
            <Card
              key={photo.title}
              className="overflow-hidden border-0 shadow-card group"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  width={1280}
                  height={853}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-primary">{photo.title}</h3>
                <p className="text-sm text-muted-foreground">{photo.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden border-0 shadow-card max-w-4xl mx-auto">
          <div className="aspect-video w-full bg-deep-brown">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/videoseries?list=PLJ7bkKMv0PxSlnnBpqmhFEBpAKDvIvvBv"
              title={t("Vidéos de nos voyages", "Videos from our journeys")}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-primary mb-1">
              {t("Médiathèque vidéo", "Video library")}
            </h3>
            <p className="text-muted-foreground">
              {t(
                "Revivez les étapes du pèlerinage et les témoignages filmés de nos pèlerins.",
                "Relive the stages of the pilgrimage and filmed testimonials from our pilgrims.",
              )}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Souvenirs;
