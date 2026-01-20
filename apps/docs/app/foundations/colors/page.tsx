import { PageLayout } from '@/components';
import { Card, CardContent, CardHeader, CardTitle } from '@fermindi/retro-ui';

const primitiveColors = [
  { name: 'beige-50', value: 'hsl(40 15% 96%)' },
  { name: 'beige-100', value: 'hsl(40 15% 92%)' },
  { name: 'beige-200', value: 'hsl(38 20% 85%)' },
  { name: 'beige-300', value: 'hsl(36 18% 78%)' },
  { name: 'gray-300', value: 'hsl(0 0% 75%)' },
  { name: 'gray-400', value: 'hsl(0 0% 65%)' },
  { name: 'gray-500', value: 'hsl(0 0% 55%)' },
  { name: 'gray-600', value: 'hsl(0 0% 45%)' },
  { name: 'gray-700', value: 'hsl(0 0% 35%)' },
  { name: 'gray-800', value: 'hsl(0 0% 25%)' },
];

const semanticColors = [
  { name: 'background', cssVar: '--colors-semantic-background', description: 'Page background' },
  { name: 'foreground', cssVar: '--colors-semantic-foreground', description: 'Primary text' },
  { name: 'border', cssVar: '--colors-semantic-border', description: 'Default borders' },
  { name: 'input', cssVar: '--colors-semantic-input', description: 'Input backgrounds' },
  { name: 'muted', cssVar: '--colors-semantic-muted', description: 'Muted backgrounds' },
  { name: 'muted-foreground', cssVar: '--colors-semantic-muted-foreground', description: 'Muted text' },
  { name: 'accent', cssVar: '--colors-semantic-accent', description: 'Primary actions' },
  { name: 'accent-foreground', cssVar: '--colors-semantic-accent-foreground', description: 'Text on accent' },
  { name: 'card', cssVar: '--colors-semantic-card', description: 'Card backgrounds' },
  { name: 'destructive', cssVar: '--colors-semantic-destructive', description: 'Error states' },
];

export default function ColorsPage() {
  return (
    <PageLayout
      title="Colors"
      description="The retro color palette inspired by vintage computing hardware"
    >
      <section className="space-y-8">
        {/* Philosophy */}
        <Card>
          <CardHeader>
            <CardTitle>Design Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              Our color palette is designed to evoke the warm, nostalgic feel of
              classic computing hardware. Think beige terminals, mechanical
              keyboards, and CRT monitors.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Warm beige backgrounds instead of harsh whites</li>
              <li>Soft gray text for reduced eye strain</li>
              <li>No pure black - always softened grays</li>
              <li>Subtle, muted accents that don&apos;t distract</li>
            </ul>
          </CardContent>
        </Card>

        {/* Primitive Colors */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Primitive Colors</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Raw color values that form the foundation of the palette.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {primitiveColors.map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className="h-16 border border-border"
                  style={{ backgroundColor: color.value }}
                />
                <div className="text-xs">
                  <p className="font-medium">{color.name}</p>
                  <p className="text-muted-foreground">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Semantic Colors */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Semantic Colors</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Purpose-driven color tokens that reference primitive values.
          </p>
          <div className="space-y-3">
            {semanticColors.map((color) => (
              <div
                key={color.name}
                className="flex items-center gap-4 p-3 border border-border"
              >
                <div
                  className="w-12 h-12 border border-border shrink-0"
                  style={{ backgroundColor: `var(${color.cssVar})` }}
                />
                <div className="flex-1">
                  <p className="font-medium">{color.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {color.description}
                  </p>
                </div>
                <code className="text-xs bg-muted px-2 py-1">
                  {color.cssVar}
                </code>
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
.my-element {
  background: var(--colors-semantic-background);
  color: var(--colors-semantic-foreground);
  border: 1px solid var(--colors-semantic-border);
}

/* Tailwind */
<div className="bg-background text-foreground border-border" />`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </PageLayout>
  );
}
