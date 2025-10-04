// lib/analytics.ts
'use client';

// Google Analytics 4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Performance monitoring
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType(
          'navigation',
        )[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');

        const metrics = {
          // Core Web Vitals
          lcp: 0, // Largest Contentful Paint
          fid: 0, // First Input Delay
          cls: 0, // Cumulative Layout Shift

          // Other metrics
          fcp: 0, // First Contentful Paint
          ttfb: navigation.responseStart - navigation.requestStart, // Time to First Byte
          dom_load: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          page_load: navigation.loadEventEnd - navigation.fetchStart,
        };

        // Get FCP
        const fcpEntry = paint.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          metrics.fcp = fcpEntry.startTime;
        }

        // Track performance metrics
        event({
          action: 'performance_metrics',
          category: 'Performance',
          label: 'Page Load',
          value: Math.round(metrics.page_load),
        });

        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', metrics);
        }
      }, 0);
    });
  }
};

// Track user interactions
export const trackInteraction = (element: string, action: string) => {
  event({
    action: action,
    category: 'User Interaction',
    label: element,
  });
};

// Track project views
export const trackProjectView = (projectName: string) => {
  event({
    action: 'view_project',
    category: 'Portfolio',
    label: projectName,
  });
};

// Track contact form submissions
export const trackContactForm = (method: string) => {
  event({
    action: 'contact_form_submit',
    category: 'Contact',
    label: method,
  });
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  event({
    action: 'social_media_click',
    category: 'Social',
    label: platform,
  });
};

// Track resume downloads
export const trackResumeDownload = () => {
  event({
    action: 'resume_download',
    category: 'Portfolio',
    label: 'Resume',
  });
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
