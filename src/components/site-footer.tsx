import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon">
            <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href={`mailto:${personalInfo.email}`}>
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
