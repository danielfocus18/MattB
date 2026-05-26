import { Building2, Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MR</span>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Mattb Rains Engineers</h3>
                <p className="text-xs text-muted-foreground">Limited Company</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Delivering excellence in engineering solutions with a commitment to quality,
              innovation, and client satisfaction since 2014.
            </p>
            <p className="text-sm text-muted-foreground italic mb-4">
              "Adwen Ma Mpuntu" - Peace of Mind Through Quality Engineering
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-blue-600 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Civil Engineering Works</li>
              <li>Building & Construction</li>
              <li>Building & Renovation</li>
              <li>Estate Development</li>
              <li>P.O.P & Wall Cladding</li>
              <li>Consultancy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+233246836630" className="hover:text-blue-600">
                  +233 24 683 6630
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/233246836630" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:matthewenki.63@gmail.com" className="hover:text-blue-600 break-all">
                  matthewenki.63@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Matthew Nketsiah, CEO</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Mattb Rains Engineers Limited Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
