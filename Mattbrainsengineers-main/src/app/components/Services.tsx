import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Building2,
  Home,
  HardHat,
  Route,
  ClipboardList,
  MessageSquare,
  Pickaxe,
  PaintRoller,
} from "lucide-react";
import { FadeIn } from "./FadeIn";

const services = [
  {
    icon: Building2,
    title: "Construction of Other Civil Engineering Projects",
    description:
      "Comprehensive civil engineering solutions covering infrastructure, surveying, and large-scale project execution.",
  },
  {
    icon: Home,
    title: "Real Estate Activities",
    description:
      "End-to-end real estate development and property solutions tailored to client needs.",
  },
  {
    icon: HardHat,
    title: "Building Construction & Renovation",
    description:
      "Quality construction and renovation services for residential, commercial, and industrial properties.",
  },
  {
    icon: Route,
    title: "Road Construction",
    description:
      "Professional road construction and infrastructure works engineered to last.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Expert oversight from planning to completion, keeping projects on schedule and within budget.",
  },
  {
    icon: MessageSquare,
    title: "Engineering Consultancy",
    description:
      "Expert engineering consultancy services to guide your projects from concept to completion.",
  },
  {
    icon: Pickaxe,
    title: "Support Activities for Mining and Quarrying",
    description:
      "Specialized support services for mining and quarry operations across Ghana.",
  },
  {
    icon: PaintRoller,
    title: "P.O.P & Wall Cladding Works",
    description:
      "Professional plaster of Paris and wall cladding installations for aesthetic and functional finishes.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering comprehensive engineering solutions tailored to your
              needs
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={index} delay={(index % 3) * 0.1}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
