import { PageLayout } from '@/components';
import { Card, CardContent, CardHeader, CardTitle } from '@fermindi/retro-ui';

const spacingScale = [
  { name: '0', value: '0', px: '0px' },
  { name: 'px', value: '1px', px: '1px' },
  { name: '0.5', value: '0.125rem', px: '2px' },
  { name: '1', value: '0.25rem', px: '4px' },
  { name: '2', value: '0.5rem', px: '8px' },
  { name: '3', value: '0.75rem', px: '12px' },
  { name: '4', value: '1rem', px: '16px' },
  { name: '5', value: '1.25rem', px: '20px' },
  { name: '6', value: '1.5rem', px: '24px' },
  { name: '8', value: '2rem', px: '32px' },
  { name: '10', value: '2.5rem', px: '40px' },
  { name: '12', value: '3rem', px: '48px' },
];

const radiusScale = [
  { name: 'none', value: '0' },
  { name: 'sm', value: '0.125rem' },
  { name: 'default', value: '0.25rem' },
  { name: 'md', value: '0.375rem' },
  { name: 'lg', value: '0.5rem' },
  { name: 'full', value: '9999px' },
];

export default function SpacingPage() {
  return (
    <PageLayout
      title="Spacing"
      description="Consistent spacing scale for layouts and components"
    >
      <section className="space-y-8">
        {/* Spacing Scale */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Spacing Scale</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            A consistent spacing scale based on 4px increments for predictable
            layouts.
          </p>
          <div className="space-y-2">
            {spacingScale.map((space) => (
              <div
                key={space.name}
                className="flex items-center gap-4 p-2 border border-border"
              >
                <code className="w-12 text-xs bg-muted px-2 py-1 text-center">
                  {space.name}
                </code>
                <div className="flex-1 flex items-center">
                  <div
                    className="h-4 bg-accent"
                    style={{ width: space.value === '0' ? '2px' : space.value }}
                  />
                </div>
                <span className="text-xs text-muted-foreground w-32 text-right">
                  {space.value} ({space.px})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Border Radius */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Border Radius</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Minimal border radius values to maintain the boxy, retro aesthetic.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {radiusScale.map((radius) => (
              <div key={radius.name} className="text-center space-y-2">
                <div
                  className="w-16 h-16 bg-input border border-border mx-auto"
                  style={{ borderRadius: radius.value }}
                />
                <div className="text-xs">
                  <p className="font-medium">{radius.name}</p>
                  <p className="text-muted-foreground">{radius.value}</p>
                </div>
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
.card {
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  border-radius: var(--radius-default);
}

/* Tailwind */
<div className="p-4 mb-6 rounded">
  Content
</div>`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </PageLayout>
  );
}
