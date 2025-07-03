"use client"

import * as React from "react"
import Link from "next/link"
import { SignOutButton, useAuth } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { LocaleSwitcher } from "./LocaleSwitcher"
import { useTranslations, useLocale } from "next-intl"

export function NavBar() {
  const { isSignedIn } = useAuth()
  const t = useTranslations("NavBar")
  const locale = useLocale()

  return (
    <nav className="flex items-center justify-between py-4 px-6 w-full">
      {/* Left: Logo Placeholder */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-lg text-gray-700">
          DC
        </div>
        <span className="font-semibold text-xl">DeckCreate</span>
      </div>

      {/* Right: Auth Buttons */}
      <div className="flex items-center gap-2">
        <LocaleSwitcher />
        {isSignedIn ? (
          <>
            <Link
              href={`/${locale}/dashboard`}
              className="px-4 py-2 rounded bg-black text-white font-medium hover:bg-gray-700 transition"
            >
              {t('create_slides')}
            </Link>
            <Link
              href={`/${locale}/dashboard`}
              className="px-4 py-2 rounded text-black font-medium hover:bg-gray-100 transition"
            >
              {t('account')}
            </Link>
            <SignOutButton>
              <Button variant="outline" className="px-4 py-2">
                {t('sign_out')}
              </Button>
            </SignOutButton>
          </>
        ) : (
          <>
            <Link
              href={`/${locale}/sign-in`}
              className="px-4 py-2 rounded bg-black text-white font-medium hover:bg-gray-700 transition"
            >
              {t('sign_in')}
            </Link>
            <Link
              href={`/${locale}/create-account`}
              className="px-4 py-2 rounded border border-black text-black font-medium hover:bg-gray-50 transition"
            >
              {t('create_account')}
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}