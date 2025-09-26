"use client";

import { useState } from 'react';
import { Cog, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getStyleSuggestions } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export function StyleChecker() {
  const [suggestions, setSuggestions] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckStyle = async () => {
    setIsLoading(true);
    setError('');
    setSuggestions('');
    try {
      const result = await getStyleSuggestions();
      if (result.startsWith('Failed')) {
          setError(result);
      } else {
          setSuggestions(result);
      }
    } catch (e: any) {
        setError(e.message || 'An unknown error occurred.');
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full bg-secondary/80 text-secondary-foreground backdrop-blur-sm hover:bg-secondary"
          aria-label="Check Website Style with AI"
        >
          <Cog className="h-6 w-6 animate-spin-slow" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-background/80 backdrop-blur-md border-primary/20">
        <DialogHeader>
          <DialogTitle>AI-Powered Style Check</DialogTitle>
          <DialogDescription>
            Analyze this site&apos;s content and style against the design brief to get improvement suggestions from Gemini.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Button onClick={handleCheckStyle} disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Analyze Style
          </Button>
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {suggestions && (
            <ScrollArea className="h-72 w-full rounded-md border border-border p-4">
              <pre className="whitespace-pre-wrap text-sm font-body">{suggestions}</pre>
            </ScrollArea>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
