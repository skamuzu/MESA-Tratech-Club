import { createFileRoute } from '@tanstack/react-router'
import HomeFeatures from '../-components/HomeFeatures'
import HomeHero from '../-components/HomeHero'
import { Trophy,ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'


export const Route = createFileRoute('/(home)/_home/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <HomeHero/>
    <HomeFeatures/>
    <section className="py-16 md:py-24 lg:py-32 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-sm font-medium">
            <Trophy className="w-4 h-4" />
            Start Your Journey
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white px-4">
            Ready to Level Up Your Engineering Skills?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Join thousands of aspiring mechanical engineers learning the skills
            that matter. It's completely free and always will be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-lg rounded-xl"
            >
              <Link to="/courses">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-lg rounded-xl border-zinc-700 text-white hover:bg-zinc-900"
              >
              <Link to="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </section>
  </>
}
