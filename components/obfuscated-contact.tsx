'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ObfuscatedContactProps {
  type: 'phone' | 'email';
  encodedValue: string;
  label?: string;
  showIcon?: boolean;
  className?: string;
}

// Simple encoding functions
const encode = (str: string): string => {
  return btoa(str).split('').reverse().join('');
};

const decode = (str: string): string => {
  return atob(str.split('').reverse().join(''));
};

export function ObfuscatedContact({ 
  type, 
  encodedValue, 
  label, 
  showIcon = true,
  className = ""
}: ObfuscatedContactProps) {
  const [revealed, setRevealed] = useState(false);
  const [contactValue, setContactValue] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Small delay to prevent immediate bot scraping
    const timer = setTimeout(() => {
      try {
        setContactValue(decode(encodedValue));
      } catch {
        setContactValue('Contact info unavailable');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [encodedValue]);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleClick = () => {
    if (!contactValue) return;
    
    if (type === 'phone') {
      window.location.href = `tel:${contactValue}`;
    } else if (type === 'email') {
      window.location.href = `mailto:${contactValue}`;
    }
  };

  if (!isClient) {
    return (
      <span className={className}>
        {label || (type === 'phone' ? 'Phone' : 'Email')}
      </span>
    );
  }

  if (!revealed) {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={handleReveal}
        className={`h-auto p-0 font-normal text-muted-foreground hover:text-foreground ${className}`}
      >
        {showIcon && (
          <span className="flex items-center space-x-2">
            {type === 'phone' ? (
              <Phone className="h-4 w-4" />
            ) : (
              <Mail className="h-4 w-4" />
            )}
            <span>Click to reveal {type}</span>
          </span>
        )}
        {!showIcon && `Click to reveal ${type}`}
      </Button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`text-left hover:underline focus:underline ${className}`}
      aria-label={`${type === 'phone' ? 'Call' : 'Email'} ${contactValue}`}
    >
      {showIcon && (
        <span className="flex items-center space-x-2">
          {type === 'phone' ? (
            <Phone className="h-4 w-4" />
          ) : (
            <Mail className="h-4 w-4" />
          )}
          <span>{contactValue}</span>
        </span>
      )}
      {!showIcon && contactValue}
    </button>
  );
}

// Note: Encoding should be done in the parent component to avoid
// React Server Component bundling issues