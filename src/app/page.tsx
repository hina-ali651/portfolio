import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ServicesSection } from '@/components/services-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { SiteFooter } from '@/components/site-footer';
import { StyleChecker } from '@/components/style-checker';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
      <StyleChecker />
    </div>
  );
}
