'use client';

import { PageLayout, ComponentPreview, CodeBlock } from '@/components';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Label,
  Separator,
} from '@fermindi/retro-ui';

export default function CardPage() {
  return (
    <PageLayout
      title="Card"
      description="Container component for grouping related content"
    >
      <section className="space-y-8">
        {/* Preview */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          <ComponentPreview>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  This is a description of the card content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Card content goes here. You can add any elements inside.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="primary">Action</Button>
              </CardFooter>
            </Card>
          </ComponentPreview>
        </div>

        <Separator />

        {/* Basic Usage */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Basic Usage</h2>
          <CodeBlock>{`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}</CodeBlock>
        </div>

        <Separator />

        {/* Form Card */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Form Card</h2>
          <ComponentPreview>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Enter your credentials to continue
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter username" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost">Cancel</Button>
                <Button variant="primary">Login</Button>
              </CardFooter>
            </Card>
          </ComponentPreview>
        </div>

        <Separator />

        {/* Simple Card */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Simple Card (Content Only)</h2>
          <ComponentPreview>
            <Card className="max-w-sm">
              <CardContent className="pt-4">
                <p className="text-sm">
                  A simple card with just content, no header or footer.
                </p>
              </CardContent>
            </Card>
          </ComponentPreview>
          <CodeBlock>{`<Card>
  <CardContent className="pt-4">
    <p>Simple content card</p>
  </CardContent>
</Card>`}</CodeBlock>
        </div>

        <Separator />

        {/* Components */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Card Components</h2>
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
                    <td className="py-2"><code>Card</code></td>
                    <td className="py-2">Root container</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>CardHeader</code></td>
                    <td className="py-2">Header section with bottom border</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>CardTitle</code></td>
                    <td className="py-2">Title text (h3)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>CardDescription</code></td>
                    <td className="py-2">Subtitle/description text</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>CardContent</code></td>
                    <td className="py-2">Main content area</td>
                  </tr>
                  <tr>
                    <td className="py-2"><code>CardFooter</code></td>
                    <td className="py-2">Footer section with top border</td>
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
