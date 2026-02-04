import {
  Plane,
  ShieldCheck,
  Film,
  Brain,
  Server,
  BarChart3,
  Zap,
  Database,
  Map,
  Globe,
  MoonStar,
  Monitor,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Volvox - AI Research Assistant',
      category: 'Generative & Agentic AI',
      description: 'AI-based research platform for document management, RAG-powered chatbots, and context-aware insights. Users can attach documents, summarize content, and interact with persistent AI chat sessions.',
      icon: Brain,
      tags: ['LangChain', 'FAISS', 'RAG', 'Next.js', 'FastAPI', 'Gemini 2.5', 'PWA'],
      color: 'from-primary to-primary/60',
      liveUrl: "https://volvox-alpha-frontend-suit.vercel.app",
      githubUrl: "https://github.com/AmirHashmi017/Volvox-Backend"
    },
    {
      title: 'MCP Server & Agentic Workflows',
      category: 'Generative & Agentic AI',
      description: 'Multi-system AI platform automating research, intelligence analysis, and business proposals using agentic workflows. Integrates Volvox, Smart Research Answering, Innoscope, and Kickstart via MCP Server and LangGraph.',
      icon: Server,
      tags: ['Agentic AI', 'LangGraph', 'LangSmith', 'MCP Server', 'RAG', 'Python', 'FastAPI', 'Next.js'],
      color: 'from-primary to-primary/60',
      liveUrl: " https://research-mcp-frontend-suit-alpha.vercel.app",
      githubUrl: "https://github.com/AmirHashmi017/MCP-Server-And-LangGraph-Agent"
    },
    {
      title: 'AI Automation Workflows',
      category: 'AI Automation',
      description: 'Designed and implemented 9 real-world AI automation workflows using n8n, integrating LLMs, vector databases, OCR, web scraping, voice AI, and Google Workspace tools for production-scale intelligent automation.',
      icon: Zap,
      tags: ['AI Automation', 'n8n', 'LLMs', 'Web Scraping', 'Voice AI', 'Slack Bot', 'Google Workspace'],
      color: 'from-primary to-primary/60',
      githubUrl: "https://github.com/AmirHashmi017/Generative-And-Agentic-AI"
    },
    {
      title: 'Airline Tickets Dropshipping Website',
      category: 'Website',
      description: 'A Dropshipping website for airline tickets—where I utilized the MERN Stack and integrated Duffel APIs for booking, along with Stripe for payment processing.',
      icon: Plane,
      tags: ['MERN', 'REST APIs', 'SQL', 'Third Party APIs', 'Postman', 'Git'],
      color: 'from-primary to-primary/60',
      githubUrl: "https://github.com/AmirHashmi017/vercel-deployment",

    },
    {
      title: 'Network Security Website Classification ',
      category: 'Machine Learning Project',
      description: 'Developed an End-to-End Machine Learning system to predict whether a website is malicious or safe, implementing the complete ML lifecycle along with MLOps practices.',
      icon: ShieldCheck,
      tags: ['Machine Learning', 'FAST APIs', 'scikit-learn', 'EDA', 'Feature Engineering', 'AWS'],
      color: 'from-primary to-primary/60',
      githubUrl: "https://github.com/AmirHashmi017/Network-Security-Machine-Learning-Project"
    },
    {
      title: 'Movie Review Analysis Deep Learning Model ',
      category: 'Deep Learning & NLP Project',
      description: 'Built a Deep Learning model for sentiment analysis on movie reviews using RNN/LSTM architectures. Achieved high accuracy in classifying positive and negative sentiments.',
      icon: Film,
      tags: ['Deep Learning', 'TensorFlow', 'RNN', 'EDA', 'Feature Engineering', 'Streamlit'],
      color: 'from-primary to-primary/60',
      githubUrl: "https://github.com/AmirHashmi017/Movie-Review-Analysis-using-RNN",

    },
    {
      title: 'Shopping Trends Visualization ',
      category: 'Website',
      description: 'A  Data Visualization Dashboard provides interactive insights into customer behavior.',
      icon: BarChart3,
      tags: ['Python', 'Flask', 'Data Visualization', 'Pandas'],
      color: 'from-primary to-primary/60',
      githubUrl: "https://github.com/AmirHashmi017/Retail-Sales-and-Customer-Behavior-Analysis-Model-Training"
    },
    {
      title: 'Custom DBMS',
      category: 'Website',
      description: 'A DBMS built from scratch using C++ (backend) and React (frontend) with B+ Tree indexing.',
      icon: Database,
      tags: ['C++', 'React', 'DSA', 'Database'],
      color: 'from-primary to-primary/60',
      githubUrl: "https://github.com/AmirHashmi017/DBMS-From-Scratch"
    },
    {
      title: 'Campus Navigator',
      category: 'Mobile and Web App',
      description: 'Website for Campus Navigation and mobile tracking within UET Lahore using MERN Stack.',
      icon: Map,
      tags: ['MERN', 'DSA', 'Potman', 'Git'],
      color: 'from-secondary to-secondary/60',
      githubUrl: "https://github.com/AmirHashmi017/DSA-Final-Project",

    },
    {
      title: 'Skylines Web',
      category: 'Website',
      description: 'Website for Airline Management developed using C#, ASP.NET, OOP and Razor Pages.',
      icon: Globe,
      tags: ['C#', 'ASP.NET', 'OOP', 'Razor Pages'],
      color: 'from-primary to-secondary',
      githubUrl: "https://github.com/AmirHashmi017/Semester-Projects/tree/main/ASP.NET%20Project/Skylines%20Website"
    },
    {
      title: 'Quran Tunes',
      category: 'Website',
      description: 'Quran Recitation Website developed using Javascript, APIs, CSS and HTML.',
      icon: MoonStar,
      tags: ['Javascript', 'APIs', 'CSS', 'HTML'],
      color: 'from-secondary to-primary',
      githubUrl: "https://github.com/AmirHashmi017/Web-Development/tree/main/Quran%20Tunes"
    },
    {
      title: 'Hospital Management System',
      category: 'Desktop App',
      description: 'Project for Hospital Management developed using C#, ASP.NET, OOP and Windows Form.',
      icon: Monitor,
      tags: ['C#', 'ASP.NET', 'OOP', 'Windows Forms'],
      color: 'from-primary/80 to-primary/40',
      githubUrl: "https://github.com/AmirHashmi017/DataBase-Lab-Project"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary transition-all duration-300 card-hover overflow-hidden"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="h-8 w-8 text-background" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm font-semibold text-primary">
                  {project.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {project.liveUrl ? (
                  <div className="flex w-full gap-2">
                    <Button asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                        Live Project
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 bg-muted/50 hover:bg-muted text-foreground hover:text-foreground">
                      <a href={project.githubUrl ?? '#'} target="_blank" rel="noreferrer noopener">
                        GitHub Code
                      </a>
                    </Button>
                  </div>
                ) : (
                  <Button asChild className="w-full">
                    <a href={(project as any).githubUrl ?? '#'} target="_blank" rel="noreferrer noopener">
                      View GitHub Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
