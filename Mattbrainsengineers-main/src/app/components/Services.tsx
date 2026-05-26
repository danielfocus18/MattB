import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building2, HardHat, Wrench, Home, TrendingUp, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Civil Engineering Works',
    description: 'Comprehensive civil engineering solutions including infrastructure design, surveying, and project planning.',
  },
  {
    icon: HardHat,
    title: 'Building & Construction',
    description: 'Quality construction services for residential, commercial, and industrial projects with attention to detail.',
  },
  {
    icon: Wrench,
    title: 'Building & Renovation',
    description: 'Expert renovation and refurbishment services to modernize and enhance existing structures.',
  },
  {
    icon: Home,
    title: 'Estate Development',
    description: 'Complete estate development solutions from planning to execution for residential and commercial properties.',
  },
  {
    icon: TrendingUp,
    title: 'P.O.P & Wall Cladding Works',
    description: 'Professional plaster of Paris and wall cladding installations for aesthetic and functional finishes.',
  },
  {
    icon: MessageSquare,
    title: 'Consultancy',
    description: 'Expert engineering consultancy services to guide your projects from concept to completion.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering comprehensive engineering solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
