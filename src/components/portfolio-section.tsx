import Image from 'next/image';
import { portfolioProjects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
                className="overflow-hidden bg-card/50 backdrop-blur-sm border-secondary/30 group transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20"
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
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="mt-2">{project.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
