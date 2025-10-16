import { Mail, Linkedin, MapPin, Phone, Github, Code  } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'amirhashmi017@gmail.com', href: 'mailto:amirhashmi017@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 328 4136880', href: 'tel:+923284136880' },
    { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amirhashmi017', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/amirhashmi017', label: 'GitHub' },
    { icon: Code, href: 'https://leetcode.com/u/AmirHashmi191/', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:amirhashmi017@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your vision to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="animate-fade-in space-y-8">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-muted transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 text-primary">Social Links</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 glow-cyan"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 text-background" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
