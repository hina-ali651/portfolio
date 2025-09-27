import type { LucideIcon } from 'lucide-react';
import { Code, Bot, Webhook, LayoutTemplate, Network, Briefcase } from 'lucide-react';

export const personalInfo = {
  name: "Hina Ali",
  tagline: "Automating Workflows with n8n",
  aboutMe: "I am an n8n automation expert who helps businesses and individuals automate workflows, integrate APIs, connect tools, and build smart AI agents. I specialize in creating scalable automations, connecting different platforms, and building intelligent solutions using n8n, AI, and MCP (Model Context Protocol).",
  email: "alihaniya259@gmail.com",
  linkedin: "https://www.linkedin.com/in/hina-ali-7958a435b",
  github: "https://github.com/",
};

type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
}

export const services: Service[] = [
  {
    title: "API Integration",
    icon: Code,
    description: "Seamlessly connect and sync data across your favorite applications and services."
  },
  {
    title: "LLM Integration",
    icon: Bot,
    description: "Leverage the power of Large Language Models to build intelligent, conversational experiences."
  },
  {
    title: "Webhooks",
    icon: Webhook,
    description: "Create real-time automations triggered by events from any platform."
  },
  {
    title: "Frontend with Firebase",
    icon: LayoutTemplate,
    description: "Build beautiful and functional user interfaces for your custom automations."
  },
  {
    title: "AI Agents",
    icon: Bot,
    description: "Develop smart agents that can perform complex tasks and interact with users."
  },
  {
    title: "MCP Setups",
    icon: Network,
    description: "Connect tools like Claude Desktop with a custom Model Context Protocol server."
  },
  {
    title: "Business Automations",
    icon: Briefcase,
    description: "Streamline your business processes, from data entry to customer communication."
  }
];

type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  imagePlaceholderId: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  videoUrl?: string;
  posterUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  challenges: string[];
  solutions: string[];
  impact: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "portfolio-mcp",
    title: "MCP Workflow Project",
    description: "Connected three tools (Send Email, Google Calendar, and Claude Desktop) using a custom MCP server.",
    imagePlaceholderId: "portfolio-mcp",
    longDescription: "A sophisticated automation project that bridges the gap between Claude Desktop and external services through a custom Model Context Protocol (MCP) server. This project demonstrates advanced API integration and real-time data synchronization capabilities.",
    technologies: ["n8n", "Node.js", "TypeScript", "MCP Protocol", "Claude Desktop", "Google Calendar API", "Email API"],
    features: [
      "Real-time calendar synchronization",
      "Automated email notifications",
      "Claude Desktop integration",
      "Custom MCP server implementation",
      "Error handling and retry logic",
      "Secure API authentication"
    ],
    videoUrl: "/mcp.mp4",
    posterUrl: "/mcps.png",
    githubUrl: "https://github.com/hina-ali/mcp-workflow",
    liveUrl: "https://mcp-demo.example.com",
    challenges: [
      "Implementing custom MCP protocol",
      "Handling real-time data synchronization",
      "Managing API rate limits",
      "Ensuring data security and privacy"
    ],
    solutions: [
      "Created custom MCP server with TypeScript",
      "Implemented WebSocket connections for real-time updates",
      "Added intelligent rate limiting and queuing",
      "Implemented OAuth 2.0 and JWT authentication"
    ],
    impact: "Reduced manual data entry by 90% and improved team coordination efficiency by 75%"
  },
  {
    id: "portfolio-whatsapp",
    title: "WhatsApp + Google Sheets Integration",
    description: "Automated workflow for a business to handle communication and data entry seamlessly.",
    imagePlaceholderId: "portfolio-whatsapp",
    longDescription: "A comprehensive business automation solution that connects WhatsApp Business API with Google Sheets, enabling seamless customer communication and data management for small to medium businesses.",
    technologies: ["n8n", "WhatsApp Business API", "Google Sheets API", "JavaScript", "Webhooks", "REST APIs"],
    features: [
      "Automated WhatsApp message processing",
      "Real-time Google Sheets updates",
      "Customer data management",
      "Automated response system",
      "Data validation and formatting",
      "Multi-language support"
    ],
    videoUrl: "/whatssapp.mp4",
    posterUrl: "/mcp2.png",
    githubUrl: "https://github.com/hina-ali/whatsapp-sheets",
    liveUrl: "https://whatsapp-automation.example.com",
    challenges: [
      "Handling WhatsApp webhook events",
      "Managing Google Sheets API limits",
      "Processing different message types",
      "Ensuring data consistency"
    ],
    solutions: [
      "Implemented robust webhook handling",
      "Created intelligent API queuing system",
      "Built message type detection and routing",
      "Added data validation and error recovery"
    ],
    impact: "Increased customer response time by 80% and reduced data entry errors by 95%"
  },
  {
    id: "portfolio-ai-agent",
    title: "AI Agent with Firebase Frontend",
    description: "Built an intelligent AI agent with a frontend powered by Firebase.",
    imagePlaceholderId: "portfolio-ai-agent",
    longDescription: "An advanced AI-powered agent system with a modern web interface, featuring real-time chat capabilities, intelligent task automation, and seamless Firebase integration for scalable user management and data storage.",
    technologies: ["React", "Firebase", "OpenAI API", "Node.js", "TypeScript", "Tailwind CSS", "n8n"],
    features: [
      "Real-time chat interface",
      "AI-powered task automation",
      "User authentication and management",
      "Real-time data synchronization",
      "Custom AI model training",
      "Responsive design"
    ],
    videoUrl: "https://example.com/ai-agent-demo.mp4",
    githubUrl: "https://github.com/hina-ali/ai-agent-firebase",
    liveUrl: "https://ai-agent.example.com",
    challenges: [
      "Integrating multiple AI models",
      "Managing real-time Firebase updates",
      "Optimizing AI response times",
      "Handling complex user interactions"
    ],
    solutions: [
      "Implemented modular AI model architecture",
      "Created efficient Firebase listeners",
      "Added response caching and optimization",
      "Built intuitive user interaction flows"
    ],
    impact: "Improved user engagement by 150% and reduced support tickets by 60%"
  }
];

type Testimonial = {
  name: string;
  company: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Placeholder Client 1",
    company: "Tech Solutions Inc.",
    quote: "Hina's automation expertise transformed our workflow, saving us countless hours. A true professional and a pleasure to work with."
  },
  {
    name: "Placeholder Client 2",
    company: "Innovate AI",
    quote: "The AI agent Hina built for us exceeded all expectations. It's like having a new, super-efficient team member."
  },
  {
    name: "Placeholder Client 3",
    company: "Creative Co.",
    quote: "Working with Hina was a game-changer. The integration she built is flawless and has streamlined our entire process."
  }
];
