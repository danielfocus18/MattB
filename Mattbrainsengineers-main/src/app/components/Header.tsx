import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import mattbLogo from "../../assets/ico.jpg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95  backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={mattbLogo}
              alt="Gritstone Construction Company Limited"
              className="w-12.5 h-12.5 object-contain drop-shadow-md"
            />
            <div>
              <h1 className="font-bold text-lg leading-tight">
                GRITSTONE CONSTRUCTION
              </h1>
              <p className="text-xs text-muted-foreground">Company Limited</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <Button onClick={() => scrollToSection("contact")}>
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left py-2 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left py-2 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left py-2 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left py-2 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full"
            >
              Contact Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
