import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FadeIn } from "./FadeIn";
import foundation from "../../assets/foundation.jpg";
import blocks from "../../assets/blocks.jpg";
import roof from "../../assets/roof.jpg";
import pop from "../../assets/pop.jpg";
import truck1 from "../../assets/truck1.jpg";

const processSteps = [
  {
    step: "01",
    title: "Foundation Work",
    description:
      "Every build starts with a solid foundation, engineered for stability and built to last.",
    image: foundation,
  },
  {
    step: "02",
    title: "Structural Walls",
    description:
      "Precision block-laying and structural framing bring each design to life.",
    image: blocks,
  },
  {
    step: "03",
    title: "Roofing",
    description:
      "Quality roofing systems that protect the structure and complete the build.",
    image: roof,
  },
  {
    step: "04",
    title: "Interior Finishing",
    description:
      "P.O.P ceiling and wall cladding work that brings a refined, finished look to every space.",
    image: pop,
  },
  {
    step: "05",
    title: "Logistics & Equipment",
    description:
      "Our fleet keeps materials and equipment moving, so every site stays on schedule.",
    image: truck1,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold mb-2">HOW WE BUILD</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From foundation to finish, every stage is handled with precision
              and care
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {processSteps.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
