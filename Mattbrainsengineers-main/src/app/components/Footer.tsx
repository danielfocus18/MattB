import { useState } from "react";
import {
  Building2,
  Mail,
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";
import mattbLogo from "../../assets/ico.jpg";
import { PrivacyPolicy } from "./PrivacyPolicy";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={mattbLogo}
                alt="GRITSTONE CONTRACTORS COMPANY LIMITED "
                className="w-12.5 h-12.5 object-contain drop-shadow-md"
              />
              <div>
                <h3 className="font-bold text-lg leading-tight">
                  Gritstone Constructions
                </h3>
                <p className="text-xs text-muted-foreground">Company Limited</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Delivering excellence in engineering solutions with a commitment
              to quality, innovation, and client satisfaction since 2026.
            </p>
            <p className="text-sm text-muted-foreground italic mb-4">
              "Built On Strength"
            </p>
            <div className="flex gap-3">
              <a
                href="https://web.facebook.com/profile.php?id=61591055726609"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com/gritstone_construction?igsh=N3drdHZ3MWtmOHN4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Civil Engineering Projects</li>
              <li>Real Estate Activities</li>
              <li>Building Construction & Renovation</li>
              <li>Road Construction</li>
              <li>Project Management</li>
              <li>Engineering Consultancy</li>
              <li>Mining & Quarrying Support</li>
              <li>P.O.P & Wall Cladding Works</li>
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
                <a
                  href="https://wa.me/233246836630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:gritstoneconstructioncompany@gmail.com"
                  className="hover:text-blue-600 break-all"
                >
                  gritstoneconstructioncompany@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>WR-205-4261 Esaaman,Shama-Western Region,Ghana</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Matthew Nketsiah, CEO</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Gritstone Constructions Company Limited. All
            rights reserved.
          </p>
          <span className="hidden sm:inline">&middot;</span>
          <button
            onClick={() => setIsPrivacyOpen(true)}
            className="hover:text-blue-600 transition-colors underline-offset-2 hover:underline"
          >
            Privacy Policy
          </button>
        </div>
      </div>

      <PrivacyPolicy open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen} />
    </footer>
  );
}
