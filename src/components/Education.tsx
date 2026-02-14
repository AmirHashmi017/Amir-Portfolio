import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institution: 'University of Engineering and Technology - UET Lahore',
      duration: '2023 - 2027',
      grade: 'CGPA: 3.83',
      description: 'Focused on software engineering, data structures and algorithms, object-oriented programming, databases, and artificial intelligence. Gained hands-on experience with the MERN stack, machine learning, and data-driven applications.',
    },
    {
      degree: 'Intermediate in Computer Science (ICS)',
      institution: 'Punjab Group of Colleges - PGC',
      duration: '2021 - 2023',
      grade: 'Grade: A',
      description: 'Studied core subjects including computer science, mathematics, and physics, building a strong foundation for programming and analytical thinking.',
    },
    {
      degree: 'Matric in Computer Science',
      institution: 'Punjab School',
      duration: '2019 - 2021',
      grade: 'Grade: A+',
      description: 'Completed foundational studies in science and mathematics, building essential academic and analytical skills.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-8 shadow-lg border border-border card-hover ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="text-sm text-muted-foreground">{edu.duration}</span>
                    {edu.grade && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-primary font-semibold">{edu.grade}</span>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
