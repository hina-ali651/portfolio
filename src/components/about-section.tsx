import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-hina');

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="bg-card/50 backdrop-blur-lg border-secondary/30">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className="md:col-span-1">
                {aboutImage && (
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl shadow-secondary/20">
                    <Image
                      src={aboutImage.imageUrl}
                      alt={aboutImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={aboutImage.imageHint}
                    />
                  </div>
                )}
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {personalInfo.aboutMe}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
