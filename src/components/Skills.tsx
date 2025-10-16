import { useEffect, useState } from 'react';
import { Lightbulb, Users, Target, MessageCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
  { name: 'MERN Stack (MongoDB, Express, React, Node)', level: 92 },
  { name: 'Python & Machine Learning', level: 90 },
  { name: 'Deep Learning & NLP', level: 87 },
  { name: 'ASP.Net Core (C#)', level: 85 },
  { name: 'RESTful API Development', level: 90 },
  { name: 'Databases (MongoDB, SQL, PostgreSQL)', level: 88 },
  { name: 'Data Structures & Algorithms (DSA)', level: 92 },
  { name: 'Object-Oriented Programming (OOP)', level: 94 },
  { name: 'Git, Docker & AWS Tools', level: 85 },
];


  const softSkills = [
    { name: 'Leadership', icon: Users },
    { name: 'Communication', icon: MessageCircle },
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Strategic Planning', icon: Target },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={visible ? skill.level : 0} 
                    className="h-3 bg-muted"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 text-primary">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center border border-border card-hover"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <skill.icon className="h-8 w-8 text-background" />
                  </div>
                  <h4 className="font-semibold">{skill.name}</h4>
                </div>
              ))}
            </div>

            <div id="core-expertise" className="mt-8 bg-card rounded-xl p-6 border border-border">
              <h4 className="text-xl font-bold mb-4">Core Expertise</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  Full-Stack Web Application Development (MERN & ASP.Net Core)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  AI/ML Model Design, Training & Deployment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  RESTful API Development & Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  Database Design, Optimization & Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  Performance Optimization & Scalable Architecture
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
