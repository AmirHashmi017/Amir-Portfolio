import { useEffect, useState } from 'react';
import { Award, Briefcase, Users, CheckCircle } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const About = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    companies: 0,
    certifications: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = {
      experience: 2,
      projects: 15,
      companies: 3,
      certifications: 10,
    };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        experience: Math.floor(targets.experience * progress),
        projects: Math.floor(targets.projects * progress),
        companies: Math.floor(targets.companies * progress),
        certifications: Math.floor(targets.certifications * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, increment);
  };

  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: counters.experience, suffix: '+' },
    { icon: CheckCircle, label: 'Projects Completed', value: counters.projects, suffix: '+' },
    { icon: Users, label: 'Companies', value: counters.companies, suffix: '+' },
    { icon: Award, label: 'Certifications', value: counters.certifications, suffix: '+' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-4 items-center mb-16">
          <div className="animate-slide-in-left">
            <div className="bg-card rounded-2xl p-3 md:p-4 shadow-xl border-2 border-white overflow-hidden w-64 md:w-80 mx-auto">
    {/* Fixed height for tighter control */}
    <div className="relative h-64 md:h-80 w-full">
      <img
        src="/Assets/MyPic.png"
        alt="Portrait of Amir Hashmi"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
    </div>
  </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-4 text-primary">Professional Overview</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I am Amir Hashmi, a MERN & AI/ML Developer with over 2 years of experience, currently working 
              at Devanics. 
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Detail-oriented Full Stack Developer with strong expertise in Python, Machine Learning, Deep
              Learning, and NLP. Skilled in building data-driven solutions, designing and deploying ML models, and
              integrating AI features into web applications. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hands-on experience with MERN stack, ASP.Net Core, OOP, DSA, C#, JavaScript, and SQL/NoSQL databases.
              Demonstrated success in professional,
              internship, freelance, and academic projects. Seeking opportunities to contribute to innovative
              AI/ML solutions while leveraging full-stack development expertise.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-lg border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-gradient mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
