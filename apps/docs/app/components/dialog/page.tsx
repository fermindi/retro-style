'use client';

import { PageLayout, ComponentPreview, CodeBlock } from '@/components';
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Input,
  Label,
  Card,
  CardContent,
  Separator,
} from '@fermindi/retro-ui';

export default function DialogPage() {
  return (
    <PageLayout
      title="Dialog"
      description="Modal dialog component for important interactions"
    >
      <section className="space-y-8">
        {/* Preview */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          <ComponentPreview>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>
                    This is a description of the dialog content.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm">Dialog content goes here.</p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="ghost">Cancel</Button>
                  </DialogClose>
                  <Button variant="primary">Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentPreview>
        </div>

        <Separator />

        {/* Basic Usage */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Basic Usage</h2>
          <CodeBlock>{`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <div className="py-4">
      Content here
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">Cancel</Button>
      </DialogClose>
      <Button variant="primary">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}</CodeBlock>
        </div>

        <Separator />

        {/* Form Dialog */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Form Dialog</h2>
          <ComponentPreview>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Edit Profile</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="ghost">Cancel</Button>
                  </DialogClose>
                  <Button variant="primary">Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentPreview>
        </div>

        <Separator />

        {/* Destructive Dialog */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Destructive Dialog</h2>
          <ComponentPreview>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="ghost">Cancel</Button>
                  </DialogClose>
                  <Button variant="destructive">Delete Account</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentPreview>
        </div>

        <Separator />

        {/* Components */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Dialog Components</h2>
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
                    <td className="py-2"><code>Dialog</code></td>
                    <td className="py-2">Root component</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>DialogTrigger</code></td>
                    <td className="py-2">Element that opens the dialog</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>DialogContent</code></td>
                    <td className="py-2">The modal content container</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>DialogHeader</code></td>
                    <td className="py-2">Header section</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>DialogTitle</code></td>
                    <td className="py-2">Dialog title</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>DialogDescription</code></td>
                    <td className="py-2">Dialog description</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2"><code>DialogFooter</code></td>
                    <td className="py-2">Footer with actions</td>
                  </tr>
                  <tr>
                    <td className="py-2"><code>DialogClose</code></td>
                    <td className="py-2">Closes the dialog</td>
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
