'use client';

interface LoadingSkeletonProps {
  className?: string;
  lines?: number;
}

export default function LoadingSkeleton({ className = '', lines = 3 }: LoadingSkeletonProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-muted/20 rounded mb-2 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="card p-6 animate-pulse">
      <div className="h-6 bg-muted/20 rounded mb-4 w-2/3" />
      <div className="space-y-2">
        <div className="h-4 bg-muted/20 rounded w-full" />
        <div className="h-4 bg-muted/20 rounded w-5/6" />
        <div className="h-4 bg-muted/20 rounded w-4/6" />
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="flex items-center space-x-4 animate-pulse">
      <div className="h-16 w-16 bg-muted/20 rounded-full" />
      <div className="space-y-2">
        <div className="h-4 bg-muted/20 rounded w-32" />
        <div className="h-3 bg-muted/20 rounded w-24" />
      </div>
    </div>
  );
}
