'use client';

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

export function TypingAnimation({ 
  text, 
  speed = 100, 
  className = '', 
  delay = 0 
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text || typeof text !== 'string') {
      console.error('Invalid text provided to TypingAnimation:', text);
      return;
    }

    setDisplayedText('');
    setIsComplete(false);

    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        
        if (currentIndex < text.length) {
          timeoutId = setTimeout(startTyping, speed);
        } else {
          setIsComplete(true);
        }
      }
    };

    if (delay > 0) {
      timeoutId = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <span className="typing-cursor text-primary">|</span>
      )}
    </span>
  );
}
