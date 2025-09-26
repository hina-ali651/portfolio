import Link from 'next/link';
import { Button } from './ui/button';
import { ContactModal } from './contact-modal';

export function SiteHeader() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-background/60 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          Hina Ali
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ContactModal
            trigger={
              <Button>
                Contact
              </Button>
            }
          />
        </div>
      </div>
    </header>
  );
}
