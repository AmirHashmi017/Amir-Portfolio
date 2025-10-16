import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import Certifications from '@/components/Certifications';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
     
    </div>
  );
};

export default Index;
