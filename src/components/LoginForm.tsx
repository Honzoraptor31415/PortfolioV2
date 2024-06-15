"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface props {
  login: (data: any) => void
}

function LoginForm({ login }: props) {
  const searchParams = useSearchParams()

  console.log(searchParams.get("emailMessage"))

  useEffect(() => {
    window.history.replaceState(null, '', '/login')
  }, [])

  return (
    <form className="login-form">
      <h3>Login</h3>
      <div className="form-element">
        {searchParams.get("emailMessage") && <p className="form-error">{searchParams.get("emailMessage")}</p>}
        <input type="email" id="email" name="email" placeholder="Email" />
      </div>
      <input type="password" id="password" name="password" placeholder="Password" />
      <div className="form-btn-border">
        <button formAction={login} className="submit">Login</button>
      </div>
    </form>
  )
}

export default LoginForm