import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set theme by default
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'certifications', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open (handle iOS/Safari too)
  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      html.classList.add('overflow-hidden');
      document.body.classList.add('overflow-hidden');
      document.body.classList.add('touch-none');
    } else {
      html.classList.remove('overflow-hidden');
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('touch-none');
    }
    return () => {
      html.classList.remove('overflow-hidden');
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('touch-none');
    };
  }, [isOpen]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', href: '/#home', id: 'home' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Experience', href: '/#experience', id: 'experience' },
    { name: 'Education', href: '/#education', id: 'education' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Certifications', href: '/#certifications', id: 'certifications' },
    { name: 'Skills', href: '/#skills', id: 'skills' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16">
          {/* Left (brand placeholder) */}
          <div className="hidden md:block" />

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  activeSection === link.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Theme toggle (desktop) */}
          <div className="hidden md:flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="col-span-3 md:hidden flex items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

      </div>

      {/* Mobile Navigation Backdrop + Panel via portal to body to avoid stacking issues */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <>
          {/* Fullscreen backdrop (under nav due to z order) */}
          <div
            className="fixed inset-0 z-[998] md:hidden bg-background bg-white dark:bg-[#0d0d0d]"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
          {/* Link panel positioned below the navbar */}
          <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-[999] bg-background bg-white dark:bg-[#0d0d0d] border-t border-border animate-fade-in">
            <div className="px-6 py-8 flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium transition-colors duration-300 hover:text-primary ${
                    activeSection === link.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;
