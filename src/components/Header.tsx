"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-neutral-900 relative">
      <nav className="px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">GoalPlanner</div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-neutral-800 p-4">
            <NavLinks />
          </div>
        )}
      </nav>
    </header>
  )
}

function NavLinks() {
  return (
    <>
      <Link href="#hero" className="text-white hover:text-green-400 transition duration-300">
        Home
      </Link>
      <Link href="#features" className="text-white hover:text-green-400 transition duration-300">
        Features
      </Link>
      <Link href="#goalInput" className="text-white hover:text-green-400 transition duration-300">
        Plan Goals
      </Link>
      <Link href="#howItWorks" className="text-white hover:text-green-400 transition duration-300">
        How It Works
      </Link>
      <Link href="#testimonials" className="text-white hover:text-green-400 transition duration-300">
        Testimonials
      </Link>
      <Link href="#faq" className="text-white hover:text-green-400 transition duration-300">
        FAQ
      </Link>
    </>
  )
}

