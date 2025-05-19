"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react" // Removed unused imports
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Portfolio", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar styling
      setScrolled(window.scrollY > 20)

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      let current = ""

      sections.forEach((section) => {
        // Cast section to HTMLElement
        const element = section as HTMLElement
        const sectionTop = element.offsetTop
        const sectionHeight = element.clientHeight
        const scrollY = window.scrollY
        
        // Improved scroll detection logic
        if (scrollY >= sectionTop - window.innerHeight * 0.3 && 
            scrollY < sectionTop + sectionHeight) {
          current = element.getAttribute("id") || ""
        }
      })

      if (current) {
        setActiveSection(current)
      }
    }

    // Add passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    // Initial check for active section
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      const offsetTop = element.offsetTop
      const navbarHeight = 80 // Define as constant

      window.scrollTo({
        top: offsetTop - navbarHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur transition-all duration-200",
        scrolled ? "bg-background/95 supports-[backdrop-filter]:bg-background/60" : "bg-background",
      )}
    >
      <div className="container flex h-16 items-center justify-between margin-x-auto px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <img
            src="/img/xvann_logo.png"
            alt="Xvannn07 Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span>Xvannn07</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-md" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.href.replace("#", "") ? "text-primary font-semibold" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-sm font-medium py-2 px-4 rounded-md transition-colors",
                activeSection === item.href.replace("#", "")
                  ? "bg-primary/10 text-primary font-semibold"
                  : "hover:bg-muted",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
