import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ArrowLeft, GraduationCap, Sparkles } from 'lucide-react'
import { SignupForm } from '@/components/signup-form'

export const Route = createFileRoute('/(auth)/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <div className="dark min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.12] grid-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md space-y-8">
        {/* Back to home button */}
        <div className="flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Logo and title */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 flex items-center justify-center animate-pulse">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-3xl font-bold text-white">Get Started</h1>
              <Sparkles className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-muted-foreground">
              Create your free account and start learning today
            </p>
          </div>

          {/* Benefits badges */}
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              100% Free
            </div>
            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
              No Credit Card
            </div>
            <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium">
              Instant Access
            </div>
          </div>
        </div>
        <SignupForm/>
        </div>
        </div>

}
