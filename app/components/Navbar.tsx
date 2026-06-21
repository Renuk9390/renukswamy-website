"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { CloseIcon, MenuIcon } from "./Icons"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/demo", label: "Demo" },
  { href: "/teaching", label: "Teaching" },
  { href: "/publications", label: "Publications" },
  { href: "/consulting", label: "Consulting" },
  { href: "/collaborate", label: "Collaborate" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink font-display text-sm font-semibold text-accent">
            RC
          </span>
          <span className="hidden font-display text-base font-semibold tracking-tight text-ink sm:block">
            Renukswamy Chikkamath
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-5 xl:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium whitespace-nowrap transition-colors hover:text-ink ${
                  active ? "text-ink" : "text-slate"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="hidden xl:block">
          <a
            href="mailto:renukswamy.chikkamath@hm.edu"
            className="whitespace-nowrap rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-ink"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink xl:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-paper px-6 py-4 xl:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium ${
                    active ? "text-ink" : "text-slate"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href="mailto:renukswamy.chikkamath@hm.edu"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex w-fit items-center rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
