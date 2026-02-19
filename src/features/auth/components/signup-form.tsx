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
import { Input } from "@/components/ui/input"
import { Link } from "@tanstack/react-router"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { registration, loginWithGoogle } from "@/features/auth/api"
import { useGoogleLogin } from "@react-oauth/google"

import { useRouter } from "@tanstack/react-router"

const UserEmailRegistrationSchema = z.object({
  email: z.email().nonempty(),
  password1: z.string().min(8).nonempty(),
  password2: z.string().min(8).nonempty(),
})

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter()
  const {register, handleSubmit} = useForm({resolver: zodResolver(UserEmailRegistrationSchema)})
 
  const onSubmit= async (data: z.infer<typeof UserEmailRegistrationSchema>) => 
    {await registration(data);
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
    <Card {...props} className="bg-zinc-900/50 backdrop-blur-2xl border-zinc-800 shadow-2xl">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
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
                {...register("email")}
                placeholder="m@example.com"
                required
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required {...register("password1")} />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input id="confirm-password" type="password" required {...register("password2")} />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <Button variant="outline" type="button" onClick={() => socialSubmit()}>
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link to="/sign-in">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
