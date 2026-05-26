import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/233246836630?text=Hello, I would like to inquire about your services', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+233246836630';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:matthewenki.63@gmail.com';
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">CONTACT US</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quotation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button size="lg" onClick={handleCall} className="group">
            <Phone className="h-5 w-5 mr-2" />
            Call Now
          </Button>
          <Button size="lg" onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
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
                  Fill out the form below and we'll get back to you within 24 hours
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
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="civil">Civil Engineering Works</option>
                      <option value="construction">Building & Construction</option>
                      <option value="renovation">Building & Renovation</option>
                      <option value="estate">Estate Development</option>
                      <option value="pop">P.O.P & Wall Cladding Works</option>
                      <option value="consultancy">Consultancy</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Request Quotation
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
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+233246836630" className="text-sm text-muted-foreground hover:text-blue-600">
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
                    <a href="https://wa.me/233246836630" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-green-600">
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
                    <a href="mailto:matthewenki.63@gmail.com" className="text-sm text-muted-foreground hover:text-blue-600 break-all">
                      matthewenki.63@gmail.com
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
                      Accra, Ghana
                      <br />
                      <span className="text-xs italic">(Exact address to be added)</span>
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
                    href="#"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Connect with us on social media for updates and project highlights
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white border-blue-600">
              <CardContent className="pt-6">
                <p className="text-lg font-medium mb-2">Our Motto</p>
                <p className="text-2xl font-bold italic">"Adwen Ma Mpuntu"</p>
                <p className="text-sm text-blue-100 mt-2">
                  Peace of Mind Through Quality Engineering
                </p>
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
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Google Maps integration will be added here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Once you provide your exact office address and coordinates, we'll embed an interactive map
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
