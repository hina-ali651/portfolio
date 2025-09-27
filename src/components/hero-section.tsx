import { Button } from './ui/button';
import { personalInfo } from '@/lib/data';
import { BackgroundAnimation } from './background-animation';
import { ContactModal } from './contact-modal';
import { TypingAnimation } from './typing-animation';

export function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
          <TypingAnimation 
            text={personalInfo.name} 
            speed={150} 
            delay={500}
          />
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-300">
          <TypingAnimation 
            text={personalInfo.tagline} 
            speed={80} 
            delay={2000}
          />
        </p>
        <div className="mt-8">
          <ContactModal
            trigger={
              <Button size="lg" className="glowing-btn">
                Hire Me
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
