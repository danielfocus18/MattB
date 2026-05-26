import { Card, CardContent } from './ui/card';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Kwame Mensah',
    role: 'Property Developer',
    content: 'Mattb Rains Engineers transformed our estate development project beyond expectations. Their attention to detail and professional approach made the entire process smooth and stress-free.',
    rating: 5,
  },
  {
    name: 'Akosua Darko',
    role: 'Homeowner',
    content: 'The renovation work on my home was completed on time and within budget. The team was professional, courteous, and the quality of work is outstanding. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Samuel Osei',
    role: 'Business Owner',
    content: 'We hired them for our commercial building construction and they delivered excellence. Matthew and his team are reliable, skilled, and truly understand client needs.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-blue-600/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
