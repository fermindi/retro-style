'use client';

import { PageLayout, ComponentPreview, CodeBlock } from '@/components';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  Label,
  Card,
  CardContent,
  Separator,
} from '@fermindi/retro-ui';

export default function SelectPage() {
  return (
    <PageLayout
      title="Select"
      description="Dropdown select component for choosing from options"
    >
      <section className="space-y-8">
        {/* Preview */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          <ComponentPreview className="max-w-xs">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </ComponentPreview>
        </div>

        <Separator />

        {/* Basic Usage */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Basic Usage</h2>
          <CodeBlock>{`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`}</CodeBlock>
        </div>

        <Separator />

        {/* With Label */}
        <div>
          <h2 className="text-lg font-semibold mb-4">With Label</h2>
          <ComponentPreview className="max-w-xs space-y-2">
            <Label>Country</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="br">Brazil</SelectItem>
                <SelectItem value="jp">Japan</SelectItem>
              </SelectContent>
            </Select>
          </ComponentPreview>
        </div>

        <Separator />

        {/* With Groups */}
        <div>
          <h2 className="text-lg font-semibold mb-4">With Groups</h2>
          <ComponentPreview className="max-w-xs">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Vegetables</SelectLabel>
                  <SelectItem value="carrot">Carrot</SelectItem>
                  <SelectItem value="potato">Potato</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </ComponentPreview>
          <CodeBlock>{`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}</CodeBlock>
        </div>

        <Separator />

        {/* Disabled */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Disabled</h2>
          <ComponentPreview className="max-w-xs">
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
              </SelectContent>
            </Select>
          </ComponentPreview>
        </div>

        <Separator />

        {/* Components */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Select Components</h2>
          <Card>
            <CardContent className="pt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2">Component</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-2"><code>Select</code></td>
                    <td className="py-2">Root component</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>SelectTrigger</code></td>
                    <td className="py-2">The button that opens the select</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>SelectValue</code></td>
                    <td className="py-2">Displays the selected value</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>SelectContent</code></td>
                    <td className="py-2">The dropdown content</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>SelectItem</code></td>
                    <td className="py-2">Individual option</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>SelectGroup</code></td>
                    <td className="py-2">Groups related items</td>
                  </tr>
                  <tr>
                    <td className="py-2"><code>SelectLabel</code></td>
                    <td className="py-2">Label for a group</td>
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
