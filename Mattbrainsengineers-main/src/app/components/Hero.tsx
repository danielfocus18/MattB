import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1776840724505-e659660bfefa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3OTMxMjgxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gritstone Constructions Company Limited"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-blue-400 font-medium mb-4">BUILT ON STRENGHT!</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Building Excellence in Engineering Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Gritstone Constructions Company Limited delivers trusted civil
            engineering, construction, real estate development, and project
            management services with a commitment to quality, reliability, and
            innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-blue-600/20"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
