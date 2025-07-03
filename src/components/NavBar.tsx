"use client"

import * as React from "react"
import Link from "next/link"
import { SignOutButton, useAuth } from "@clerk/nextjs"
import { Button } from "./ui/button"

export function NavBar() {
  const { isSignedIn } = useAuth()

  return (
    <nav className="flex items-center justify-between py-4 px-6 w-full">
      {/* Left: Logo Placeholder */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-lg text-gray-700">
          DC
        </div>
        <span className="font-semibold text-xl">DeckCreate</span>
      </div>
      {/* Center: Home Link */}
      <div className="flex-1 flex justify-center">
        <Link href="/" className="font-medium text-gray-700 hover:underline">
          Home
        </Link>
      </div>
      {/* Right: Auth Buttons */}
      <div className="flex items-center gap-2">
        {isSignedIn ? (
          <>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded bg-black text-white font-medium hover:bg-gray-700 transition"
            >
              Dashboard
            </Link>
            <Button><SignOutButton /></Button>
            
          </>
        ) : (
          <>
            <Link
              href="/sign-in"
              className="px-4 py-2 rounded bg-black text-white font-medium hover:bg-gray-700 transition"
            >
              Sign In
            </Link>
            <Link
              href="/create-account"
              className="px-4 py-2 rounded border border-black text-black font-medium hover:bg-gray-50 transition"
            >
              Create Account
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}