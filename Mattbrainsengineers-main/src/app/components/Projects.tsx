import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'Modern Residential Complex',
    category: 'Estate Development',
    image: 'https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzkyNzE3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Complete estate development with modern amenities and sustainable design.',
  },
  {
    title: 'Commercial Building Construction',
    category: 'Building & Construction',
    image: 'https://images.unsplash.com/photo-1776840724505-e659660bfefa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3OTMxMjgxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'State-of-the-art commercial building with premium finishes.',
  },
  {
    title: 'Infrastructure Development',
    category: 'Civil Engineering',
    image: 'https://images.unsplash.com/photo-1604044478919-5b53331fa61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHdvcmtlcnN8ZW58MXx8fHwxNzc5MzEyODE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Critical infrastructure project delivered on time and within budget.',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our commitment to excellence across diverse engineering projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <Badge className="mb-2">{project.category}</Badge>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
