import { Calendar } from 'lucide-react';

const Experience = () => {
  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    if (end.getDate() < start.getDate()) months--; // Adjust if current day is before start day in month

    // Add 1 to count the starting month as well (e.g., June to July is 2 months of work)
    months = Math.max(1, months + 1);

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let durationStr = '';
    if (years > 0) {
      durationStr += `${years} yr${years > 1 ? 's' : ''}`;
      if (remainingMonths > 0) durationStr += ` ${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
    } else {
      durationStr += `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
    }

    const formatDate = (date: Date) => {
      return date.toLocaleString('default', { month: 'short', year: 'numeric' });
    };

    return `${formatDate(start)} - ${endDate ? formatDate(end) : 'Present'} · ${durationStr}`;
  };

  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Devanics',
      location: 'Remote',
      startDate: '2025-07-01',
      isPresent: true,
      achievements: [
        "Designed and implemented scalable RESTful APIs using TypeScript, Express.js, and MongoDB.",
        "Developed efficient database schemas and performed comprehensive API testing using Postman.",
        'Build responsive frontends with React, integrating APIs, and managing auth flows.'
      ],
    },
    {
      role: 'Web Developer',
      company: 'SincSol',
      location: 'Lahore, Punjab, Pakistan',
      startDate: '2024-09-01',
      endDate: '2024-11-30',
      achievements: [
        'Developed 2+ web solutions using C#, Razor Pages, JavaScript, and PostgreSQL.',
        'Collaborated with 3+ team members on UI enhancements using REACT, HTML and CSS.'
      ],
    },
    {
      role: 'Teaching Assistant',
      company: 'University of Engineering and Technology Lahore',
      location: 'Lahore, Punjab, Pakistan',
      startDate: '2024-09-01',
      endDate: '2025-05-31',
      achievements: [
        'Mentored 30+ students in Programming Fundamentals and OOP courses; led 15+ lab sessions.',
        'Supported lab sessions in C#, C++, Python and SQL.'
      ],
    },
    {
      role: '.NET Development Intern',
      company: 'Ustadam',
      location: 'Lahore, Punjab, Pakistan',
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      achievements: [
        'Created dynamic pages with ASP.Net Core Razor Pages and back-end integration via MS SQL for 2+ modules.',
        'Built 2 desktop utilities using Windows Forms (C#).'
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 `}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background animate-pulse-glow"></div>

                <div className={`bg-card rounded-xl p-6 shadow-lg border border-border card-hover ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                  }`}>
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-semibold">{calculateDuration(exp.startDate, exp.endDate)}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-primary font-semibold mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
