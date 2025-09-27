'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

const openWindow = (url: string | undefined) => {
  if (url) {
    const newWindow = (globalThis as any).open;
    if (newWindow) {
      newWindow(url, '_blank');
    }
  }
};
import { portfolioProjects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Play, Code, Zap, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { BackgroundAnimation } from '@/components/background-animation';
import { TypingAnimation } from '@/components/typing-animation';

export default function PortfolioDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const foundProject = portfolioProjects.find(p => p.id === params.id);
      if (foundProject) {
        setProject(foundProject);
      }
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => router.push('/')} className="glowing-btn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundAnimation />
      
      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Button 
          onClick={() => router.push('/')} 
          variant="ghost" 
          className="mb-8 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        {/* Project Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 mb-6">
            <TypingAnimation 
              text={project.title} 
              speed={100} 
              delay={500}
            />
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            <TypingAnimation 
              text={project.longDescription} 
              speed={50} 
              delay={2000}
            />
          </p>
        </div>

        {/* Action Buttons
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {project.githubUrl && (
            <Button 
              onClick={() => {
                openWindow(project.githubUrl);
              }}
              className="glowing-btn"
            >
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
          )} */}
          {/* {project.liveUrl && (
            <Button 
              onClick={() => {
                openWindow(project.liveUrl);
              }}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-background"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          )}
          {project.videoUrl && (
            <Button 
              onClick={() => {
                openWindow(project.videoUrl);
              }}
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-background"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          )}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Technologies */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Code className="mr-2 h-5 w-5" />
                Technologies Used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Zap className="mr-2 h-5 w-5" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <TrendingUp className="mr-2 h-5 w-5" />
                Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.impact}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Challenges */}
          <Card className="bg-card/50 backdrop-blur-sm border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:shadow-lg hover:shadow-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center text-destructive">
                <Target className="mr-2 h-5 w-5" />
                Challenges Faced
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-neutral-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Solutions */}
          <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center text-accent">
                <Lightbulb className="mr-2 h-5 w-5" />
                Solutions Implemented
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.solutions.map((solution: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-neutral-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Video Section */}
        {project.videoUrl && (
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Play className="mr-2 h-5 w-5" />
                Project Demo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster={project.posterUrl}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Back to Portfolio Button */}
        <div className="text-center">
          <Button 
            onClick={() => router.push('/')} 
            size="lg" 
            className="glowing-btn"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
