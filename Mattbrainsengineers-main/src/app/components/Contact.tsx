import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = "service_74gxv3f";
const EMAILJS_TEMPLATE_ID = "template_6zdo7xh";
const EMAILJS_PUBLIC_KEY = "hXBw0iUtSXod9PJt0";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      toast.success("Message sent! Matthew will contact you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send. Please call +233 24 683 6630 directly.");
    }
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/233246836630?text=Hello, I would like to inquire about your services",
      "_blank",
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+233246836630";
  };

  const handleEmail = () => {
    window.location.href = "mailto:gritstoneconstructioncompany@gmail.com";
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">CONTACT US</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free
            consultation and quotation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button size="lg" onClick={handleCall}>
            <Phone className="h-5 w-5 mr-2" />
            Call Now
          </Button>
          <Button
            size="lg"
            onClick={handleWhatsApp}
            className="bg-green-600 hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            WhatsApp
          </Button>
          <Button size="lg" variant="outline" onClick={handleEmail}>
            <Mail className="h-5 w-5 mr-2" />
            Email Us
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Request a Free Quotation</CardTitle>
                <CardDescription>
                  Fill out the form below and we will get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+233 24 683 6630"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="civil">
                        Construction of Other Civil Engineering Projects
                      </option>
                      <option value="real-estate">
                        Real Estate Activities
                      </option>
                      <option value="construction-renovation">
                        Building Construction & Renovation
                      </option>
                      <option value="road">Road Construction</option>
                      <option value="project-management">
                        Project Management
                      </option>
                      <option value="consultancy">
                        Engineering Consultancy
                      </option>
                      <option value="mining-quarry">
                        Support Activities for Mining and Quarrying
                      </option>
                      <option value="pop">P.O.P & Wall Cladding Works</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Request Quotation
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+233246836630"
                      className="text-sm text-muted-foreground hover:text-blue-600"
                    >
                      +233 24 683 6630
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/233246836630"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-green-600"
                    >
                      +233 24 683 6630
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:gritstoneconstructioncompany@gmail.com"
                      className="text-sm text-muted-foreground hover:text-blue-600 break-all"
                    >
                      gritstoneconstructioncompany@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Office Location</p>
                    <p className="text-sm text-muted-foreground">
                      WR-205-4261 Esaaman,Shama-Western Region, Ghana
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <a
                    href="https://web.facebook.com/profile.php?id=61591055726609"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/gritstone_construction?igsh=N3drdHZ3MWtmOHN4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Connect with us on social media for updates and project
                  highlights
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white border-blue-600">
              <CardContent className="pt-6">
                <p className="text-lg font-medium mb-2">Our Motto</p>
                <p className="text-2xl font-bold italic">"Built On Strength"</p>
                <p className="text-sm text-blue-100 mt-2"></p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Find Us on the Map</CardTitle>
              <CardDescription>
                Visit our office for in-person consultations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden rounded-b-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3974.3506012404173!2d-1.6644657999999999!3d5.0467828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMDInNDguNCJOIDHCsDM5JzUyLjEiVw!5e0!3m2!1sen!2sgh!4v1782067187606!5m2!1sen!2sgh"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gritstone Construction Office Location"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
