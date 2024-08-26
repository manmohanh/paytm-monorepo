"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const Appbar = () => {
  const session = useSession()
  return (
    <div className="flex justify-between border-b-2 p-4">
      <p className="text-2xl">Paytm</p>
      {
        JSON.stringify({session})
      }
      <button
        className="bg-black text-white p-2 rounded-md"
        onClick={() => {
          signIn();
        }}
      >
        Sign In
      </button>
      
    </div>
  );
};
