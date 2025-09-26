import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ContactForm } from './contact-form';

type ContactModalProps = {
  trigger: React.ReactNode;
}

export function ContactModal({ trigger }: ContactModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[480px] bg-card/80 backdrop-blur-lg border-secondary/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Contact Me</DialogTitle>
          <DialogDescription>
            Let&apos;s build something amazing together. Fill out the form below and I&apos;ll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
