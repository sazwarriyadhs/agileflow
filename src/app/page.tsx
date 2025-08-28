import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Layers,
  LayoutGrid,
  ClipboardList,
  Wand2,
  Users,
  BarChart2,
  TrendingDown,
} from 'lucide-react';
import { Logo } from '@/components/icons';

const features = [
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: 'Product Backlog',
    description: 'Manage a product backlog, creating and organizing user stories.',
  },
  {
    icon: <ClipboardList className="h-8 w-8 text-primary" />,
    title: 'Sprint Planning',
    description: 'Plan sprints with drag-and-drop prioritization and task estimation.',
  },
  {
    icon: <LayoutGrid className="h-8 w-8 text-primary" />,
    title: 'Kanban Board',
    description: 'Visualize workflow using a customizable Kanban board with swimlanes.',
  },
  {
    icon: <Wand2 className="h-8 w-8 text-primary" />,
    title: 'Daily Notes Assistant',
    description: 'AI tool suggests daily notes from your backlog and sprint data.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Retrospectives',
    description: 'Capture retrospectives and action items collaboratively.',
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: 'Velocity Chart',
    description: 'Provide simple charts visualizing team velocity over time.',
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-primary" />,
    title: 'Burndown Chart',
    description: 'Track progress of effort using Burndown charts for monitoring.',
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary">AgileFlow</h1>
        </div>
        <nav>
          <Button asChild variant="ghost">
            <Link href="/dashboard">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="text-center py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 font-headline">
              Streamline Your Scrum Workflow
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
              AgileFlow is an opinionated, production-ready starter for a Scrum Master tool, designed to bring clarity and efficiency to your agile process.
            </p>
            <Button size="lg" asChild>
              <Link href="/dashboard">Start Your Free Trial</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="py-20 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">All-in-One Agile Toolkit</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-2">
                From backlog to burndown, everything you need for successful sprints.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-background/80 backdrop-blur-sm shadow-lg border-2 border-transparent hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {feature.icon}
                      <CardTitle className="font-headline">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AgileFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
