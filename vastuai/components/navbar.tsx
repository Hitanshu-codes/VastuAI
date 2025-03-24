"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { Home, Menu, X, User, LogIn } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Design", path: "/design" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Dashboard", path: "/dashboard" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="md:hidden" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>

          <Link href="/" className="flex items-center gap-2">
            <Home className="h-5 w-5 text-primary" />
            <span className="font-bold text-xl">VastuAI</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.path) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/dashboard" className="flex w-full">
                  My Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/profile" className="flex w-full">
                  Profile Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/logout" className="flex w-full">
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild>
            <Link href="/design">Start Designing</Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-2 py-1.5 text-sm font-medium rounded-md ${
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            <Link
              href="/login"
              className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="h-4 w-4" /> Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

