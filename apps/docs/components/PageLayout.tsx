import Link from 'next/link';
import { Separator } from '@fermindi/retro-ui';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border p-6 min-h-screen fixed">
          <Link href="/" className="font-bold text-lg mb-8 block hover:underline">
            Retro Style
          </Link>

          <nav className="space-y-6">
            <div>
              <h3 className="font-semibold text-sm mb-2 text-muted-foreground">
                FOUNDATIONS
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/foundations/colors"
                    className="block py-1 hover:underline"
                  >
                    Colors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/foundations/typography"
                    className="block py-1 hover:underline"
                  >
                    Typography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/foundations/spacing"
                    className="block py-1 hover:underline"
                  >
                    Spacing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2 text-muted-foreground">
                COMPONENTS
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/components/button"
                    className="block py-1 hover:underline"
                  >
                    Button
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/input"
                    className="block py-1 hover:underline"
                  >
                    Input
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/card"
                    className="block py-1 hover:underline"
                  >
                    Card
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/badge"
                    className="block py-1 hover:underline"
                  >
                    Badge
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/checkbox"
                    className="block py-1 hover:underline"
                  >
                    Checkbox
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/select"
                    className="block py-1 hover:underline"
                  >
                    Select
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/dialog"
                    className="block py-1 hover:underline"
                  >
                    Dialog
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 ml-64 p-8 max-w-3xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            {description && (
              <p className="text-muted-foreground text-lg">{description}</p>
            )}
          </header>

          <Separator className="my-6" />

          {children}
        </main>
      </div>
    </div>
  );
}
