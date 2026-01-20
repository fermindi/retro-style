import { PageLayout } from '@/components';
import { Card, CardContent, CardHeader, CardTitle } from '@fermindi/retro-ui';

const fontSizes = [
  { name: 'xs', value: '0.75rem', px: '12px' },
  { name: 'sm', value: '0.875rem', px: '14px' },
  { name: 'base', value: '1rem', px: '16px' },
  { name: 'lg', value: '1.125rem', px: '18px' },
  { name: 'xl', value: '1.25rem', px: '20px' },
  { name: '2xl', value: '1.5rem', px: '24px' },
  { name: '3xl', value: '1.875rem', px: '30px' },
  { name: '4xl', value: '2.25rem', px: '36px' },
];

export default function TypographyPage() {
  return (
    <PageLayout
      title="Typography"
      description="Monospace-first typography for that authentic retro feel"
    >
      <section className="space-y-8">
        {/* Philosophy */}
        <Card>
          <CardHeader>
            <CardTitle>Design Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              Typography in Retro Style prioritizes readability while maintaining
              the aesthetic of early computing. Monospace fonts are used as the
              primary typeface to evoke terminal interfaces and early word
              processors.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Courier New as the primary monospace font</li>
              <li>No font smoothing for authentic pixel rendering</li>
              <li>Comfortable line heights for extended reading</li>
              <li>System fonts as fallback for sans-serif needs</li>
            </ul>
          </CardContent>
        </Card>

        {/* Font Families */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Font Families</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground mb-2">mono (primary)</p>
                <p className="text-2xl" style={{ fontFamily: 'Courier New, Courier, monospace' }}>
                  The quick brown fox jumps over the lazy dog
                </p>
                <code className="text-xs bg-muted px-2 py-1 mt-2 inline-block">
                  font-family: Courier New, Courier, monospace
                </code>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground mb-2">sans (fallback)</p>
                <p className="text-2xl" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  The quick brown fox jumps over the lazy dog
                </p>
                <code className="text-xs bg-muted px-2 py-1 mt-2 inline-block">
                  font-family: system-ui, sans-serif
                </code>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Font Sizes */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Font Sizes</h2>
          <div className="space-y-3">
            {fontSizes.map((size) => (
              <div
                key={size.name}
                className="flex items-center gap-4 p-3 border border-border"
              >
                <code className="w-12 text-xs bg-muted px-2 py-1 text-center">
                  {size.name}
                </code>
                <span
                  className="flex-1"
                  style={{ fontSize: size.value }}
                >
                  The quick brown fox
                </span>
                <span className="text-xs text-muted-foreground w-24 text-right">
                  {size.value} ({size.px})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 overflow-x-auto text-xs">
              <code>{`/* CSS */
.heading {
  font-family: var(--typography-fontFamily-mono);
  font-size: var(--typography-fontSize-2xl);
}

/* Tailwind */
<h1 className="font-mono text-2xl">Heading</h1>
<p className="font-mono text-base">Body text</p>`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </PageLayout>
  );
}
