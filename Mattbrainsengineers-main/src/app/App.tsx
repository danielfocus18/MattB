import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}