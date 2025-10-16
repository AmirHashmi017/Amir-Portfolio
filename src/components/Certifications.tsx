import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Certifications = () => {
  const certifications = [
    {
      title: 'ML, Deep Learning & NLP Bootcamp',
      image: '/Assets/Udemy AI-ML Certificate.jpg',
      url: 'https://www.udemy.com/certificate/UC-fb6922a0-6789-4c0c-a3a0-20cb5f9e2cd8/',
    },
    {
      title: 'Google AI Essentials Certificate',
      image: '/Assets/Google AI Essentials.jpg',
      url: 'https://www.coursera.org/account/accomplishments/specialization/T8XX4ZQX7IA6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n',
    },
    {
      title: 'Python Certificate',
      image: '/Assets/pythoncertificate.png',
      url: 'https://www.hackerrank.com/certificates/413a5d3f711a',
    },
    {
      title: 'Maximize Productivity With AI Tools',
      image: '/Assets/Maximize Productivity With AI tools.jpg',
      url: 'https://www.coursera.org/account/accomplishments/verify/RVLVMTNBEDFN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    },
    {
      title: 'Prompt Engineering',
      image: '/Assets/Coursera Art of prompting.jpg',
      url: 'https://www.coursera.org/account/accomplishments/verify/KD8RLBMV7L8M?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    },
    {
      title: 'JavaScript Certificate',
      image: '/Assets/javascript_certificate.jpg',
      url: 'https://www.hackerrank.com/certificates/b534858f7fb1',
    },
    {
      title: 'C# Certificate',
      image: '/Assets/Csharpcertificate.jpeg',
      url: 'https://www.hackerrank.com/certificates/f76d0bd8f8b6',
    },
    {
      title: 'SQL Certificate',
      image: '/Assets/SQL Certificate.JPG',
      url: 'https://www.hackerrank.com/certificates/ec6238e677d1',
    },
    {
      title: 'Ustadam Internship Certificate',
      image: '/Assets/Ustadam Certificate.jpeg',
      url: 'https://www.linkedin.com/in/amirhashmi017/details/experience/',
    },
    
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary transition-all duration-300 card-hover overflow-hidden"
            >
              <CardHeader className="p-0">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent className="pt-4">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </CardTitle>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={cert.url} target="_blank" rel="noreferrer noopener">
                    View Certificate
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

