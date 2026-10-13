import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ArrowUp, ArrowDown, Mail, Award, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Amir's assistant. How can I help you today?",
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition(prev => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY
      }));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const quickResponses: Record<string, string> = {
    skills: "Amir's technical skills include Generative & Agentic AI with LangChain, LangGraph and LangSmith (95%), the MERN stack (92%), Python & Machine Learning (90%), Deep Learning & NLP (87%), AI Automation with n8n (90%), RESTful API Development (90%), Databases like MongoDB, SQL and PostgreSQL (88%), DSA (92%), OOP (94%), and Git, Docker & AWS (85%). Soft skills include Leadership, Communication, Problem Solving, and Strategic Planning.",
    experience: "Amir has 3+ years of professional experience:\n\n1. **Full Stack AI Engineer at Techmanion** (Lahore) - Builds full-stack apps and AI solutions with LLMs, LangChain, LangGraph, RAG and AI agents for US-based clients, including financial platforms integrating QuickBooks, Stripe and Gusto.\n\n2. **Full Stack AI Engineer at Devanics** (Remote) - Built 5 full-stack applications and 3 AI agent and RAG-based systems, plus n8n automation workflows.\n\n3. **Web Developer at SincSol** (Lahore) - Developed web solutions with C#, Razor Pages, JavaScript and PostgreSQL.\n\n4. **Teaching Assistant at UET Lahore** - Mentored 30+ students in Programming Fundamentals and OOP.\n\n5. **Web Development Intern at Ustadam** (Lahore) - Built ASP.Net Core Razor Pages with MS SQL and Windows Forms utilities.",
    projects: "Navigate to the Projects section to see Amir's featured work, including LedgerIQ (AI financial insights), Schesti (construction management), Vorame (traders community), an AI-powered HR hiring automation, the Volvox AI research assistant, an MCP server with agentic workflows, and several ML, deep learning and web projects.",
    contact: "You can reach Amir at:\n📧 Email: amirhashmi017@gmail.com\n📱 Phone: +92 328 4136880\n📍 Location: Lahore, Pakistan\n💼 LinkedIn: linkedin.com/in/amirhashmi017\n💻 GitHub: github.com/amirhashmi017",
    resume: "Amir is a Full-Stack AI Engineer with 3+ years of experience specializing in Generative and Agentic AI, RAG pipelines, multi-agent workflows, AI automation, and full-stack web development with the MERN stack and Next.js.",
    about: "Amir Hashmi is a Full-Stack AI Engineer with 3+ years of experience, currently working at Techmanion. Amir specializes in Generative and Agentic AI, Python, Machine Learning, Deep Learning and NLP, and builds autonomous AI systems, RAG pipelines and AI-powered web applications.",
    certifications: "Amir's certifications include the ML, Deep Learning & NLP Bootcamp, Google AI Essentials, Maximize Productivity With AI Tools, Prompt Engineering, and HackerRank certificates in Python, JavaScript, C# and SQL.",
    education: "Amir is pursuing a **Bachelor of Science in Computer Science (BSCS)** at the University of Engineering and Technology (UET) Lahore with a CGPA of 3.83. Before that, Amir completed an Intermediate in Computer Science (ICS) at Punjab Group of Colleges with Grade A, and Matric in Computer Science at Punjab School with Grade A+.",
    techmanion: "Amir currently works as a Full Stack AI Engineer at Techmanion in Lahore, building full-stack and AI-powered applications for US-based clients, including financial-services platforms integrating QuickBooks Online, Stripe and Gusto, and n8n automation workflows.",
    devanics: "At Devanics (Remote), Amir worked as a Full Stack AI Engineer, building 5 full-stack applications with TypeScript, Node.js, React, Next.js and MongoDB, and engineering 3 AI agent and RAG-based systems with LangChain, LangGraph, LangSmith and MCP.",
    sincsol: "At SincSol in Lahore, Amir worked as a Web Developer, building web solutions with C#, Razor Pages, JavaScript and PostgreSQL and collaborating on UI enhancements with React, HTML and CSS.",
    ustadam: "At Ustadam in Lahore, Amir interned as a Web Developer, creating dynamic pages with ASP.Net Core Razor Pages and MS SQL, and building 2 desktop utilities with Windows Forms (C#).",
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simple keyword matching for responses
    let botResponse = "I'm here to help! You can ask me about Amir's skills, experience, projects, education, certifications, or how to get in touch.";

    const lowerInput = inputValue.toLowerCase();
    
    // Check for specific responses
    Object.keys(quickResponses).forEach((key) => {
      if (lowerInput.includes(key)) {
        botResponse = quickResponses[key];
      }
    });

    // Navigate to sections with confirmation
    const sections = ['home', 'about', 'projects', 'experience', 'education', 'skills', 'contact'];
    let navigated = false;
    
    sections.forEach((section) => {
      if (lowerInput.includes(section)) {
        botResponse = `Navigating to ${section} section...`;
        navigated = true;
        setTimeout(() => {
          scrollToSection(section);
        }, 500);
      }
    });

    // Special navigation commands
    if (lowerInput.includes('top') || lowerInput.includes('beginning')) {
      botResponse = 'Scrolling to the top...';
      navigated = true;
      setTimeout(() => scrollToTop(), 500);
    }

    if (lowerInput.includes('bottom') || lowerInput.includes('end') || lowerInput.includes('footer')) {
      botResponse = 'Scrolling to the bottom...';
      navigated = true;
      setTimeout(() => scrollToBottom(), 500);
    }

    if (lowerInput.includes('certification') && !navigated) {
      botResponse = quickResponses.certifications + '\n\nNavigating to Skills section...';
      setTimeout(() => scrollToSection('skills'), 500);
    }

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Draggable Chat Button */}
      <div
        ref={dragRef}
        className="fixed z-50"
        style={{
          bottom: `${24 - position.y}px`,
          right: `${24 - position.x}px`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        <div className="relative">
          <div
            onMouseDown={() => setIsDragging(true)}
            className="absolute -top-2 -left-2 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing hover:bg-primary/30 transition-colors"
          >
            <GripVertical className="h-4 w-4 text-primary" />
          </div>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg hover:scale-110 transition-all duration-300 glow-cyan ${
              isOpen ? 'rotate-90' : ''
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed z-50 w-96 max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-scale-in"
          style={{
            bottom: `${96 - position.y}px`,
            right: `${24 - position.x}px`
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4">
            <h3 className="text-lg font-bold text-background">Portfolio Assistant</h3>
            <p className="text-sm text-background/80">Ask me anything about Amir</p>
          </div>

          {/* Messages */}
          <ScrollArea className="h-96 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Quick Actions */}
          <div className="p-3 bg-muted/50 border-t border-border">
            <div className="flex flex-wrap gap-2 mb-3">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => scrollToTop()}
                className="text-xs"
              >
                <ArrowUp className="h-3 w-3 mr-1" />
                Top
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => scrollToBottom()}
                className="text-xs"
              >
                <ArrowDown className="h-3 w-3 mr-1" />
                Bottom
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => scrollToSection('contact')}
                className="text-xs"
              >
                <Mail className="h-3 w-3 mr-1" />
                Contact
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => scrollToSection('skills')}
                className="text-xs"
              >
                <Award className="h-3 w-3 mr-1" />
                Certifications
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => scrollToSection('skills')}
                className="text-xs"
              >
                Skills
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => scrollToSection('education')}
                className="text-xs"
              >
                Education
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => scrollToSection('experience')}
                className="text-xs"
              >
                Experience
              </Button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-background"
            />
            <Button
              onClick={handleSend}
              size="icon"
              className="bg-primary hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
