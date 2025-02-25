import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer id="footer" className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">GoalPlanner</h3>
            <p className="text-neutral-400">Transform your goals into achievable plans with smart time management.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-neutral-400 hover:text-white transition duration-300">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition duration-300">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition duration-300">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-white transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-white transition duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Features</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition duration-300">
                  Goal Planning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition duration-300">
                  Break Suggestions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition duration-300">
                  Task Rescheduling
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition duration-300">
                  Priority Management
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-neutral-400">Subscribe to our newsletter for tips and updates.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="bg-neutral-800 border-neutral-700" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400">&copy; 2024 GoalPlanner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

