'use client';

import { useState } from 'react';
import { PageLayout, ComponentPreview, CodeBlock } from '@/components';
import { Checkbox, Label, Card, CardContent, Separator } from '@fermindi/retro-ui';

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <PageLayout
      title="Checkbox"
      description="Toggleable checkbox input for forms"
    >
      <section className="space-y-8">
        {/* Preview */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          <ComponentPreview className="flex items-center space-x-2">
            <Checkbox id="preview" />
            <Label htmlFor="preview">Accept terms and conditions</Label>
          </ComponentPreview>
        </div>

        <Separator />

        {/* Basic Usage */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Basic Usage</h2>
          <CodeBlock>{`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>`}</CodeBlock>
        </div>

        <Separator />

        {/* Controlled */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Controlled</h2>
          <ComponentPreview className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="controlled"
                checked={checked}
                onCheckedChange={(value) => setChecked(value === true)}
              />
              <Label htmlFor="controlled">
                Controlled checkbox: {checked ? 'Checked' : 'Unchecked'}
              </Label>
            </div>
          </ComponentPreview>
          <CodeBlock>{`const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
/>`}</CodeBlock>
        </div>

        <Separator />

        {/* Disabled */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Disabled</h2>
          <ComponentPreview className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled" className="opacity-50">Disabled unchecked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-checked" disabled checked />
              <Label htmlFor="disabled-checked" className="opacity-50">Disabled checked</Label>
            </div>
          </ComponentPreview>
          <CodeBlock>{`<Checkbox disabled />
<Checkbox disabled checked />`}</CodeBlock>
        </div>

        <Separator />

        {/* Form Example */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Form Example</h2>
          <ComponentPreview>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="option1" />
                <Label htmlFor="option1">Email notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="option2" />
                <Label htmlFor="option2">SMS notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="option3" />
                <Label htmlFor="option3">Push notifications</Label>
              </div>
            </div>
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
                    <td className="py-2">checked</td>
                    <td className="py-2">
                      <code className="text-xs">boolean</code>
                    </td>
                    <td className="py-2">-</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2">onCheckedChange</td>
                    <td className="py-2">
                      <code className="text-xs">(checked: boolean) =&gt; void</code>
                    </td>
                    <td className="py-2">-</td>
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
