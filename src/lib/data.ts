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
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "portfolio-mcp",
    title: "MCP Workflow Project",
    description: "Connected three tools (Send Email, Google Calendar, and Claude Desktop) using a custom MCP server.",
    imagePlaceholderId: "portfolio-mcp"
  },
  {
    id: "portfolio-whatsapp",
    title: "WhatsApp + Google Sheets Integration",
    description: "Automated workflow for a business to handle communication and data entry seamlessly.",
    imagePlaceholderId: "portfolio-whatsapp"
  },
  {
    id: "portfolio-ai-agent",
    title: "AI Agent with Firebase Frontend",
    description: "Built an intelligent AI agent with a frontend powered by Firebase.",
    imagePlaceholderId: "portfolio-ai-agent"
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
