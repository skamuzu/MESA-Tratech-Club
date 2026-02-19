import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { Input } from "@/components/ui/input"
import { Link } from "@tanstack/react-router"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { login, loginWithGoogle } from "@/features/auth/api"
import { useGoogleLogin } from "@react-oauth/google"
import { useRouter } from "@tanstack/react-router"


const UserEmailLoginSchema = z.object({
  email: z.email().nonempty(),
  password: z.string().min(8).nonempty()
})

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()
  const {register, handleSubmit, formState: {isLoading}} = useForm({resolver: zodResolver(UserEmailLoginSchema)})

  const onSubmit = async (data: z.infer<typeof UserEmailLoginSchema>) => {
    await login(data)
    router.navigate({to: "/courses"})
    
  }
  
  const socialSubmit = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async codeResponse => {
      const tokens = await loginWithGoogle(codeResponse);
      console.log(tokens);
      router.navigate({to: "/courses"})

    },
    onError: errorResponse => console.log(errorResponse)
  })
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-zinc-900/50 backdrop-blur-2xl border-zinc-800 shadow-2xl">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" {...register("password")} required />
              </Field>
              <Field>
                <Button type="submit" disabled={isLoading}>{isLoading && <Spinner/>}Login</Button>
                <Button variant="outline" type="button" onClick={() => socialSubmit()}>
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link to="/sign-up">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
