import BlurryBackground from "@/components/BlurryBackground"
import { login } from "./actions"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
import LoginForm from "@/components/LoginForm"

export const metadata = {
  title: "Login",
  description: "Admin login for Honzoraptor"
}

async function LoginPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (data?.user) {
    redirect('/admin')
  }

  return (
    <header className="login-header nav-space-top-p">
      <BlurryBackground className="nav-space-top-m" />
      <LoginForm login={login} />
    </header>
  )
}

export default LoginPage