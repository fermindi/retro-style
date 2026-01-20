'use client';

import * as React from 'react';

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
}

export function ComponentPreview({ children, className = '' }: ComponentPreviewProps) {
  return (
    <div
      className={`border border-border bg-background p-6 ${className}`}
    >
      {children}
    </div>
  );
}
