import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2, Target, Eye, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const values = [
  "Quality craftsmanship and attention to detail",
  "Timely project delivery and execution",
  "Professional engineering expertise",
  "Innovative and sustainable solutions",
  "Client satisfaction and transparency",
  "Safety-first approach on all projects",
];

const stats = [
  { icon: Calendar, label: "Established", value: "2026" },
  { icon: Award, label: "Projects Completed", value: "200+" },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-blue-600 font-semibold mb-2">ABOUT US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building Excellence Since 2014
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Led by CEO <strong>Matthew Nketsiah</strong>, Gritstone
              Construction Company Limited is a trusted name in engineering
              excellence. Our motto, <em>"Built On Trust"</em>, reflects our
              commitment to peace of mind through quality workmanship.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              With over a decade of experience serving clients across Ghana, we
              have built a reputation for delivering exceptional engineering and
              construction services. Our journey began with a vision to
              transform the built environment through innovation, integrity, and
              unwavering commitment to excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in delivering comprehensive engineering solutions
              across civil works, construction, renovation, estate development,
              and specialized finishes. Our team combines technical expertise
              with innovative thinking to bring your vision to life.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 bg-blue-600 rounded-lg text-white"
                  >
                    <Icon className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699786373847-82b005a8632a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzc5MzEyODE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Civil engineering infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg -z-10" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-blue-600/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver high-quality engineering and construction
                    services that contribute to sustainable development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-600/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become a leading engineering and real estate development
                    company recognized for excellence and innovation.
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
