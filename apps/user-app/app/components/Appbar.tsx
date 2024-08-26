"use client";
import { signIn, signOut } from "next-auth/react";

export const Appbar = () => {
  return (
    <div className="flex justify-between border-b-2 p-4">
      <p className="text-2xl">Paytm</p>
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
