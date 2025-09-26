import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What My Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Success stories from businesses I&apos;ve helped.
          </p>
        </div>
        <div className="mt-16">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-secondary/30">
                      <CardContent className="flex h-full flex-col justify-between p-6">
                        <blockquote className="text-lg italic">&quot;{testimonial.quote}&quot;</blockquote>
                        <footer className="mt-4 text-right">
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </footer>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
