import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "./FadeIn";
import build1 from "../../assets/build1.jpg";
import road from "../../assets/road.jpg";

const heroImages = [
  { src: build1, alt: "Gritstone Construction building project" },
  { src: road, alt: "Gritstone Construction road construction project" },
];

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

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
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={heroImages[activeImage].src}
              alt={heroImages[activeImage].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-3xl">
          <p className="text-blue-400 font-medium mb-4">BUILT ON STRENGTH</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Building Excellence in Engineering Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Gritstone Construction Company Limited delivers trusted civil
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
        </FadeIn>
      </div>
    </section>
  );
}
