'use client';

import { PageLayout, ComponentPreview, CodeBlock } from '@/components';
import { Badge, Card, CardContent, Separator } from '@fermindi/retro-ui';

export default function BadgePage() {
  return (
    <PageLayout
      title="Badge"
      description="Small status indicators and labels"
    >
      <section className="space-y-8">
        {/* Preview */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          <ComponentPreview className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </ComponentPreview>
        </div>

        <Separator />

        {/* Variants */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Variants</h2>
          <CodeBlock>{`<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}</CodeBlock>
        </div>

        <Separator />

        {/* Sizes */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Sizes</h2>
          <ComponentPreview className="flex items-center gap-2">
            <Badge size="sm">Small</Badge>
            <Badge size="default">Default</Badge>
            <Badge size="lg">Large</Badge>
          </ComponentPreview>
          <CodeBlock>{`<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>
<Badge size="lg">Large</Badge>`}</CodeBlock>
        </div>

        <Separator />

        {/* Use Cases */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Use Cases</h2>
          <div className="space-y-4">
            <ComponentPreview>
              <div className="flex items-center gap-2">
                <span>Status:</span>
                <Badge variant="primary">Active</Badge>
              </div>
            </ComponentPreview>
            <ComponentPreview>
              <div className="flex items-center gap-2">
                <span>Version</span>
                <Badge variant="outline">v0.1.0</Badge>
              </div>
            </ComponentPreview>
            <ComponentPreview>
              <div className="flex items-center gap-2">
                <span>Notifications</span>
                <Badge variant="destructive">3</Badge>
              </div>
            </ComponentPreview>
          </div>
        </div>

        <Separator />

        {/* API Reference */}
        <div>
          <h2 className="text-lg font-semibold mb-4">API Reference</h2>
          <Card>
            <CardContent className="pt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2">Prop</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Default</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-2">variant</td>
                    <td className="py-2">
                      <code className="text-xs">default | primary | secondary | outline | destructive</code>
                    </td>
                    <td className="py-2">default</td>
                  </tr>
                  <tr>
                    <td className="py-2">size</td>
                    <td className="py-2">
                      <code className="text-xs">sm | default | lg</code>
                    </td>
                    <td className="py-2">default</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}
