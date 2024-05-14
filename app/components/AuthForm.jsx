'use client'

import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/navigation";

function AuthForm({ sendDataToParent }) {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const router = useRouter()

  const popNotification=(message, type)=>{
    sendDataToParent(message, type)
  }

  async function handleLogin(e) {
    e.preventDefault();
    setIsSigningIn(true)
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })
    const supaData = {error, data};
    const username = supaData?.data?.user?.email;
    if(!error){
      popNotification("Welcome back, "+username,"success")
        router.push('/photos')
    }
     else{
      popNotification("Wrong credentials!","failure")
      setIsSigningIn(false)
    }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const {data, error} = await supabase.auth.signUp({
        email,
        password
    })
    console.log({data, error});
    if(!error){
      setIsSigningUp(true)
      popNotification("Congratulations, "+email + " welcome to PicUp!","success")
    }
    else{
      const response = JSON.parse(JSON.stringify(error)).message
      popNotification(response,"failure")
    }
  }
  let signInMessage = isNewUser
    ? isSigningIn
      ? "Signing Up..."
      : "Sign Up"
    : isSigningIn
    ? "Signing In..."
    : "Sign In";

    const signUpMessage = <p className="text-center text-white">Email sent! Check your email to confirm signing up.</p>;

  return (
    <form onSubmit={isNewUser ? handleSignUp : handleLogin} className=" space-y-8 ">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
                placeholder="Password"
            />
            <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
        {signInMessage}
      </button>
      <p
      className="text-center text-white">
        {
            isNewUser ?( <>Already have an account? {'  '} 
            <button
              type="button"
              onClick={() => setIsNewUser(false)}
              className="text-indigo-400 hover:text-indigo-600"
              >Sign In</button>
            </>)
            : (<>Don't have an account? {'  '}
            <button
              type="button"
              onClick={() => setIsNewUser(true)}
              className="text-indigo-400 hover:text-indigo-600"
              >Sign Up</button>
            </>)
        }
      </p>
      {isSigningUp && signUpMessage}
    </form>
  );
}

export default AuthForm;
