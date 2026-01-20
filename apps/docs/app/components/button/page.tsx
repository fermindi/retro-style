'use client';

import { PageLayout, ComponentPreview, CodeBlock } from '@/components';
import { Button, Card, CardContent, CardHeader, CardTitle, Separator } from '@fermindi/retro-ui';

export default function ButtonPage() {
  return (
    <PageLayout
      title="Button"
      description="Interactive button component with multiple variants and sizes"
    >
      <section className="space-y-8">
        {/* Preview */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          <ComponentPreview className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </ComponentPreview>
        </div>

        <Separator />

        {/* Variants */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Variants</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">default</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ComponentPreview>
                  <Button>Default Button</Button>
                </ComponentPreview>
                <CodeBlock>{`<Button>Default Button</Button>`}</CodeBlock>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">primary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ComponentPreview>
                  <Button variant="primary">Primary Button</Button>
                </ComponentPreview>
                <CodeBlock>{`<Button variant="primary">Primary Button</Button>`}</CodeBlock>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">destructive</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ComponentPreview>
                  <Button variant="destructive">Delete</Button>
                </ComponentPreview>
                <CodeBlock>{`<Button variant="destructive">Delete</Button>`}</CodeBlock>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        {/* Sizes */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Sizes</h2>
          <ComponentPreview className="flex items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </ComponentPreview>
          <CodeBlock>{`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}</CodeBlock>
        </div>

        <Separator />

        {/* Disabled */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Disabled State</h2>
          <ComponentPreview className="flex gap-4">
            <Button disabled>Disabled</Button>
            <Button variant="primary" disabled>Disabled Primary</Button>
          </ComponentPreview>
          <CodeBlock>{`<Button disabled>Disabled</Button>`}</CodeBlock>
        </div>

        <Separator />

        {/* asChild */}
        <div>
          <h2 className="text-lg font-semibold mb-4">As Link (asChild)</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Use the <code className="bg-muted px-1">asChild</code> prop to render the button as a different element.
          </p>
          <ComponentPreview>
            <Button asChild>
              <a href="#">Link styled as button</a>
            </Button>
          </ComponentPreview>
          <CodeBlock>{`<Button asChild>
  <a href="/contact">Contact Page</a>
</Button>`}</CodeBlock>
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
                      <code className="text-xs">default | primary | secondary | ghost | link | destructive</code>
                    </td>
                    <td className="py-2">default</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2">size</td>
                    <td className="py-2">
                      <code className="text-xs">sm | default | lg | icon</code>
                    </td>
                    <td className="py-2">default</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2">asChild</td>
                    <td className="py-2">
                      <code className="text-xs">boolean</code>
                    </td>
                    <td className="py-2">false</td>
                  </tr>
                  <tr>
                    <td className="py-2">disabled</td>
                    <td className="py-2">
                      <code className="text-xs">boolean</code>
                    </td>
                    <td className="py-2">false</td>
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
