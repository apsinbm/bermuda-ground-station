'use client';

import { useEffect, useRef } from 'react';

interface TwitterEmbedProps {
  tweetUrl: string;
  className?: string;
}

declare global {
  interface Window {
    twttr: {
      widgets: {
        load: (element?: HTMLElement) => Promise<HTMLElement[]>;
      };
    };
  }
}

export function TwitterEmbed({ tweetUrl, className }: TwitterEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Convert x.com URLs to twitter.com for widget compatibility
  const normalizedUrl = tweetUrl.replace('https://x.com/', 'https://twitter.com/');

  useEffect(() => {
    const loadTwitterWidget = async () => {
      try {
        if (!window.twttr) {
          // Load Twitter widgets script if not already loaded
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Failed to load Twitter widgets script'));
            document.head.appendChild(script);
          });
        }

        // Wait a bit for the script to initialize
        await new Promise(resolve => setTimeout(resolve, 100));

        if (window.twttr && window.twttr.widgets && containerRef.current) {
          // Load widgets for this specific container
          const widgets = await window.twttr.widgets.load(containerRef.current);
          if (widgets && Array.isArray(widgets)) {
            console.log(`Loaded ${widgets.length} Twitter widgets`);
          } else {
            console.log('Twitter widgets.load() returned:', widgets);
            // Try loading all widgets instead of just this container
            const allWidgets = await window.twttr.widgets.load();
            console.log('All widgets load result:', allWidgets);
          }
        }
      } catch (error) {
        console.error('Error loading Twitter widgets:', error);
      }
    };

    loadTwitterWidget();
  }, []);

  return (
    <div className={className} ref={containerRef}>
      <blockquote 
        className="twitter-tweet" 
        data-theme="light"
        data-width="100%"
        data-conversation="none"
        data-dnt="true"
      >
        <a href={normalizedUrl}></a>
      </blockquote>
    </div>
  );
}