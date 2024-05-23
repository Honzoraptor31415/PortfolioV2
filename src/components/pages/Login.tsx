"use client"

import { supabase } from "@/utils/supabase/client"
import { useState } from "react";
import { useEffect } from "react";
import BlurryBackground from "@/components/BlurryBackground";
import { redirect } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    console.log(data, error)

    if (!error) {
      redirect("/new")
    } else {
      setErrorElem("User cridentials don't match")
    }
  }

  function setErrorElem(error: string) {
    setEmail("")
    setPassword("")
    setError(error)
    setTimeout(() => {
      setError("")
    }, 2000)
  }

  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      console.log(user)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <header className="login-header">
      <BlurryBackground />
      <form onSubmit={(e) => {
        e.preventDefault()
        signInWithEmail()
      }} className="login-form" id="form">
        <h3>Login</h3>
        {error &&
          <p className="login-error">{error}</p>}
        <input type="email" id="email" placeholder="Email" onChange={(e) => { }} value={email} />
        <input type="password" id="password" placeholder="Password" onChange={(e) => {

        }} value={password} />
        <div className="form-btn-border">
          <input type="submit" id="submit" value="Login" />
        </div>
      </form>
    </header>
  )
}

export default Login