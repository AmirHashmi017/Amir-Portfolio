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
      text: "Hello! I'm Hammad's assistant. How can I help you today?",
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
    skills: "Hammad's technical skills include Oracle Primavera P6 (95%), Project Planning & Scheduling (93%), Cost Control & Budgeting (90%), Progress Tracking & Reporting (92%), Risk Assessment (88%), Microsoft Project (88%), AutoCAD (85%), Microsoft Excel (90%), and SketchUp (82%). His soft skills include Leadership, Communication, Problem Solving, and Strategic Planning.",
    experience: "Hammad has 5+ years of professional experience:\n\n1. **Planning Engineer at Nudhum** (Apr 2025 - Present, Jeddah, Saudi Arabia) - Currently working with a multinational company.\n\n2. **Planning Engineer at Arail Construction & Industrial Co. Ltd.** (2023 - Mar 2025, Riyadh, Saudi Arabia) - Worked on AL-Kharj-STP Phase III project with Thabat Construction Company. Responsibilities included tracking project activities, preparing EOT claims, developing progress reports, and coordinating with subcontractor planning engineers.\n\n3. **Planning Engineer at Ittefaq Group** (2020 - 2023, Lahore, Pakistan) - Planned strategic urban development, collaborated with site teams, coordinated material transportation, and utilized advanced project management tools.",
    projects: "Navigate to the Projects section to see Hammad's featured work including infrastructure projects, sewage treatment plants, and urban development projects across Saudi Arabia and Pakistan.",
    contact: "You can reach Hammad at:\n📧 Email: Hammad381010@gmail.com\n📱 Mobile: +966 55 330 4107\n📍 Location: Jeddah, Saudi Arabia\n💼 LinkedIn: linkedin.com/in/hammad-ul-hassan-b01b5533b\n📸 Instagram: @mr.hammado4",
    resume: "Hammad is a Planning Engineer with over 5 years of experience specializing in Project Schedule Management, Cost & Resource Loaded Baseline Master Schedules, Program Updates & Recovery Plans, Earned Value Analysis, and Visual Reporting. He holds a Transferable Iqama and is actively seeking new opportunities.",
    about: "Hammad is Engr. Hammad Ul Hassan, a Planning Engineer with 5+ years of experience, currently working in Saudi Arabia with a multinational company. He has completed 100+ projects across 3 companies with 15+ areas of expertise including Project Schedule Management, Earned Value Analysis, Cost Management, and Forecasting.",
    certifications: "Hammad's core expertise areas include: Recovery & Revise Schedule, Queries & Connections, Earned Value Analysis, Resource & Cost Management, and Forecasting & Performance Analysis. Navigate to the Skills section for complete details.",
    education: "Hammad holds a **Bachelor of Science in Civil Engineering** from University of Management and Technology (UMT), Lahore (2019-2023) with Grade A. He also completed F.S.C Pre-Engineering from Superior College (2017-2019).",
    nudhum: "Hammad is currently working as a Planning Engineer at Nudhum in Jeddah, Saudi Arabia (Apr 2025 - Present). This is a full-time, on-site position with a multinational company.",
    arail: "At Arail Construction & Industrial Co. Ltd. (2023 - Mar 2025), Hammad worked on the AL-Kharj-STP Phase III project in Riyadh. His responsibilities included tracking activities, preparing EOT claims, developing comprehensive progress reports, and coordinating with subcontractor planning engineers.",
    ittefaq: "At Ittefaq Group (2020 - 2023) in Lahore, Pakistan, Hammad planned strategic urban development, collaborated with site teams, coordinated material transportation, and utilized advanced project management software.",
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
    let botResponse = "I'm here to help! You can ask me about Hammad's skills, experience, projects, education, certifications, or how to contact him.";

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
            <p className="text-sm text-background/80">Ask me anything about Hammad</p>
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
