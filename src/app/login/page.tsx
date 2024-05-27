import BlurryBackground from "@/components/BlurryBackground"
import { login } from "./actions"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

export const metadata = {
  title: "Login",
  description: "Admin login for Honzoraptor"
}

async function Login() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (data?.user) {
    redirect('/admin')
  }

  return (
    <header className="login-header">
      <BlurryBackground />
      <form className="login-form">
        <h3>Login</h3>
        <input type="email" id="email" name="email" placeholder="Email" />
        <input type="password" id="password" name="password" placeholder="Password" />
        <div className="form-btn-border">
          <button formAction={login} className="submit">Login</button>
        </div>
      </form>
    </header>
  )
}

export default Login