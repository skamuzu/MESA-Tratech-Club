import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { GraduationCap } from 'lucide-react'
import { LoginForm } from '@/components/login-form'

export const Route = createFileRoute('/(auth)/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="dark min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.12] grid-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md space-y-8">
        {/* Back to home button */}
        <div className="flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="text-white gap-2 cursor-pointer">
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
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-muted-foreground">
              Sign in to continue your learning journey
            </p>
          </div>
        </div>
        <LoginForm/>
        </div>
        </div>
}
