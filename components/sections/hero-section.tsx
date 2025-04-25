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
    <section id="hero" className="relative w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-muted">
      <ParticlesBackground />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <SlideInLeft>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                >
                  Hello, I'm <span className="text-primary">Khrisna</span>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-4"
                  >
                    <AnimatedText
                      texts={["Web Developer", "Frontend Developer", "Full Stack Developer", "Network Engineering"]}
                      className="text-2xl sm:text-4xl"
                    />
                  </motion.div>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="max-w-[600px] text-muted-foreground md:text-xl mt-6"
                >
                  Web Developer & Networking.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <Link 
                  href="#about" 
                  className="flex items-center scroll-smooth"
                  onClick={(e) => scrollToSection(e, '#about')}
                >
                  <Button size="lg" className="group hover:scale-105 transition-transform duration-300">
                    About ME
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <FloatingAnimation>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-full border border-primary/10 bg-primary/5 p-2">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0" 
                  />
                  <motion.img
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    src="/img/profil.png"
                    alt="Profile"
                    width={400}
                    height={400}
                    className="aspect-square rounded-full object-cover"
                  />
                </div>
              </div>
            </FloatingAnimation>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
