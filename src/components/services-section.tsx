import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Crafting intelligent solutions to streamline your workflows.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card/50 backdrop-blur-sm border-secondary/30 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
