'use client';

import { trackPerformance } from '@/lib/analytics';
import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    trackPerformance();
  }, []);

  return null;
}
