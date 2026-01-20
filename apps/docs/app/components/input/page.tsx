'use client';

import { PageLayout, ComponentPreview, CodeBlock } from '@/components';
import { Input, Label, Card, CardContent, Separator } from '@fermindi/retro-ui';

export default function InputPage() {
  return (
    <PageLayout
      title="Input"
      description="Text input component for forms"
    >
      <section className="space-y-8">
        {/* Preview */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          <ComponentPreview className="max-w-sm">
            <Input type="email" placeholder="Email address" />
          </ComponentPreview>
        </div>

        <Separator />

        {/* With Label */}
        <div>
          <h2 className="text-lg font-semibold mb-4">With Label</h2>
          <ComponentPreview className="max-w-sm space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="user@example.com" />
          </ComponentPreview>
          <CodeBlock>{`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="user@example.com" />
</div>`}</CodeBlock>
        </div>

        <Separator />

        {/* Sizes */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Sizes</h2>
          <ComponentPreview className="max-w-sm space-y-4">
            <Input inputSize="sm" placeholder="Small" />
            <Input inputSize="default" placeholder="Default" />
            <Input inputSize="lg" placeholder="Large" />
          </ComponentPreview>
          <CodeBlock>{`<Input inputSize="sm" placeholder="Small" />
<Input inputSize="default" placeholder="Default" />
<Input inputSize="lg" placeholder="Large" />`}</CodeBlock>
        </div>

        <Separator />

        {/* Error State */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Error State</h2>
          <ComponentPreview className="max-w-sm space-y-2">
            <Label htmlFor="error-input">Email</Label>
            <Input
              id="error-input"
              variant="error"
              type="email"
              placeholder="invalid@email"
            />
            <p className="text-xs" style={{ color: 'var(--colors-semantic-destructive)' }}>
              Please enter a valid email address
            </p>
          </ComponentPreview>
          <CodeBlock>{`<Input variant="error" placeholder="Invalid input" />`}</CodeBlock>
        </div>

        <Separator />

        {/* Disabled */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Disabled</h2>
          <ComponentPreview className="max-w-sm">
            <Input disabled placeholder="Disabled input" />
          </ComponentPreview>
          <CodeBlock>{`<Input disabled placeholder="Disabled input" />`}</CodeBlock>
        </div>

        <Separator />

        {/* Input Types */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Input Types</h2>
          <ComponentPreview className="max-w-sm space-y-4">
            <Input type="text" placeholder="Text" />
            <Input type="password" placeholder="Password" />
            <Input type="number" placeholder="Number" />
            <Input type="date" />
          </ComponentPreview>
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
                      <code className="text-xs">default | error</code>
                    </td>
                    <td className="py-2">default</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2">inputSize</td>
                    <td className="py-2">
                      <code className="text-xs">sm | default | lg</code>
                    </td>
                    <td className="py-2">default</td>
                  </tr>
                  <tr>
                    <td className="py-2">type</td>
                    <td className="py-2">
                      <code className="text-xs">string</code>
                    </td>
                    <td className="py-2">text</td>
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
