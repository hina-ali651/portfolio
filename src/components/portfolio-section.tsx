'use client';

import Image from 'next/image';
import Link from 'next/link';
import { portfolioProjects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play, Code } from 'lucide-react';

declare global {
  interface Window {
    open: (url: string, target?: string) => void;
  }
}

const openWindow = (url: string | undefined) => {
  if (url) {
    const newWindow = (globalThis as any).open;
    if (newWindow) {
      newWindow(url, '_blank');
    }
  }
};

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Case Studies</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into my recent work and successes.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => {
            const image = PlaceHolderImages.find(p => p.id === project.imagePlaceholderId);
            return (
              <Card
                key={project.id}
                className="portfolio-card overflow-hidden bg-card/50 backdrop-blur-sm border-secondary/30 group transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20 hover:border-primary/40"
              >
                <CardHeader className="p-0">
                  {image && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                openWindow(project.githubUrl);
                              }}
                              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                            >
                              <Github className="h-4 w-4" />
                            </Button>
                          )}
                          {project.videoUrl && (
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                openWindow(project.videoUrl);
                              }}
                              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                            >
                              <Play className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mt-2 mb-4">
                    {project.description}
                  </CardDescription>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link href={`/portfolio/${project.id}`}>
                      <Button size="sm" className="glowing-btn flex-1">
                        <Code className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </Link>
                    {/* {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          openWindow(project.liveUrl);
                        }}
                        className="border-primary/30 text-primary hover:bg-primary hover:text-background"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )} */}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
