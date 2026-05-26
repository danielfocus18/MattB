import { Card, CardContent } from './ui/card';
import { Award, Shield, FileCheck, Trophy } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'ISO 9001:2015 Certified',
    description: 'Quality Management System',
  },
  {
    icon: FileCheck,
    title: 'Licensed Contractor',
    description: 'Ghana Standards Authority',
  },
  {
    icon: Award,
    title: 'Safety Certified',
    description: 'Occupational Health & Safety',
  },
  {
    icon: Trophy,
    title: 'Excellence Award 2023',
    description: 'Outstanding Engineering Services',
  },
];

export function Certifications() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">CERTIFICATIONS & AWARDS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognized Excellence</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality and safety is backed by industry certifications and recognition
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
