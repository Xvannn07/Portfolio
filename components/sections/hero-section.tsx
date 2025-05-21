"use client"

import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles"
import { AnimatedText } from "@/components/animated-text"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FloatingAnimation, 
  SlideInLeft, 
  SlideInRight 
} from "@/components/motion-wrapper"

export function HeroSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted">
      
      {/* Running Text Background - Top */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="running-text-container flex whitespace-nowrap animate-slide-left">
          {[...Array(20)].map((_, i) => (
            <div key={`top-${i}`} className="flex-none mx-4 text-8xl font-bold">
              WEB DEVELOPER • FRONTEND • BACKEND • NETWORKING •
            </div>
          ))}
        </div>
        
        {/* Running Text Background - Bottom */}
        <div className="running-text-container flex whitespace-nowrap animate-slide-right mt-[50vh]">
          {[...Array(20)].map((_, i) => (
            <div key={`bottom-${i}`} className="flex-none mx-4 text-8xl font-bold">
              REACT • NEXT.JS • TYPESCRIPT • TAILWIND •
            </div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 max-w mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <FloatingAnimation>
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 animate-spin-slow" />
                <div className="relative aspect-square overflow-hidden rounded-full border-2 border-primary/20 bg-primary/5 p-2">
                  <motion.img
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    src="/img/profil.png"
                    alt="Profile"
                    width={400}
                    height={400}
                    className="aspect-square rounded-full object-cover"
                  />
                </div>
              </div>
            </FloatingAnimation>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Hello, I'm <span className="text-primary">Khrisna</span>
            </h1>
            <div className="mb-6">
              <AnimatedText
                texts={["Web Developer", "Frontend Developer", "Full Stack Developer", "Network Engineering"]}
                className="text-2xl md:text-4xl text-muted-foreground"
              />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionate about creating beautiful and functional web experiences
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-4 justify-center"
            >
              <Link 
                href="#about" 
                onClick={(e) => scrollToSection(e, '#about')}
              >
                <Button size="lg" className="group hover:scale-105 transition-transform duration-300">
                  About Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#projects">
                <Button size="lg" variant="outline" className="group hover:scale-105 transition-transform duration-300">
                  View Projects
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
