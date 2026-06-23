import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { FadeIn } from "./FadeIn";
import ceoPhoto from "../../assets/Ceo.jpg";
import mdPhoto from "../../assets/MD.jpg";
import fdPhoto from "../../assets/FD.jpg";

const leaders = [
  {
    name: "Ing Matthew Nketsiah",
    title: "Founder & CEO",
    image: ceoPhoto,
  },
  {
    name: "Ing Kingsley Kwofie",
    title: "Managing Director",
    image: mdPhoto,
  },
  {
    name: "Sarpong Dwomoh",
    title: "Financial Director",
    image: fdPhoto,
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold mb-2">OUR TEAM</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the team driving Gritstone Construction Company Limited
              forward
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <Card className="overflow-hidden text-center hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg">{leader.name}</h3>
                  <p className="text-sm text-blue-600">{leader.title}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
