"use client"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center h-screen">

      <div className="flex flex-col">
        <label htmlFor="">Email</label>
        <input type="text" className='border-2' placeholder='Email' />
      </div>

      <div className="flex flex-col">
        <label htmlFor="">Password</label>
        <input className='border-2' type="password" placeholder='Password' />
      </div>

      <button onClick={async() => {
        const res = await signIn("credentials",{
          email: "hmanmohan1@gmail.com",
          password: "1234567@",
          redirect: false,
        })
        console.log(res)
        router.push("/")
      }} className='border-2 mt-6'>Sign In</button>

    </div>
  )
}
