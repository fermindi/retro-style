'use client';

import * as React from 'react';

interface CodeBlockProps {
  children: string;
  language?: string;
}

export function CodeBlock({ children, language = 'tsx' }: CodeBlockProps) {
  return (
    <pre className="bg-muted border border-border p-4 overflow-x-auto text-sm">
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}
