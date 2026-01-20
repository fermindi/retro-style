import Link from 'next/link';
import {
  Button,
  Input,
  Label,
  Textarea,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Checkbox,
  Separator,
} from '@fermindi/retro-ui';

export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Retro Style</h1>
        <p className="text-muted-foreground text-lg">
          A design system inspired by classic computing hardware
        </p>
        <div className="flex gap-2 mt-4">
          <Badge>v0.1.0</Badge>
          <Badge variant="outline">React 19</Badge>
          <Badge variant="outline">Tailwind CSS</Badge>
        </div>
      </header>

      <Separator className="my-8" />

      {/* Navigation */}
      <nav className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Documentation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/foundations/colors" className="hover:underline">
            Colors
          </Link>
          <Link href="/foundations/typography" className="hover:underline">
            Typography
          </Link>
          <Link href="/foundations/spacing" className="hover:underline">
            Spacing
          </Link>
          <Link href="/components/button" className="hover:underline">
            Button
          </Link>
          <Link href="/components/input" className="hover:underline">
            Input
          </Link>
          <Link href="/components/card" className="hover:underline">
            Card
          </Link>
        </div>
      </nav>

      <Separator className="my-8" />

      {/* Components Preview */}
      <section className="space-y-8">
        <h2 className="text-xl font-semibold">Components Preview</h2>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>
              Buttons with multiple variants and sizes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Form Elements */}
        <Card>
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
            <CardDescription>Input, Textarea, Checkbox, and Label</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="user@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message..." />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Submit</Button>
          </CardFooter>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Badge</CardTitle>
            <CardDescription>Status indicators and labels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Installation</h2>
        <Card>
          <CardContent className="pt-4">
            <pre className="bg-muted p-4 overflow-x-auto text-sm">
              <code>npm install @fermindi/retro-tokens @fermindi/retro-ui</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
        <p>Built with React 19, Radix UI, and Tailwind CSS</p>
        <p className="mt-1">
          <a
            href="https://github.com/fermindi/retro-style"
            className="hover:underline"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
