"use client"

import { User, Code, BookUser } from "lucide-react"
import {
  FadeInItem,
  MotionWrapper,
  PulseAnimation,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
} from "@/components/motion-wrapper"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w mx-auto">
        <MotionWrapper>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                <BookUser className="w-4 h-4 inline-block mr-2" />
                About ME
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About ME</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am a student who likes to learn programming languages and also internet networking. 
                I am from bali and studied at smkn 3 singaraja at school, 
                with my chosen major of telecommunication network. 
                With a background in programming and network expertise, I combine creativity with technical expertise to produce products that meet user needs and benefit everyone.
              </p>
            </div>
          </div>
        </MotionWrapper>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <SlideInLeft>
          <StaggerContainer className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
              <FadeInItem>
                  <motion.li
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Experience</h3>
                      <p className="text-muted-foreground">2+ years of experience in learning programming languages</p>
                    </div>
                  </motion.li>
              </FadeInItem>
              <FadeInItem>
                  <motion.li
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Education</h3>
                      <p className="text-muted-foreground">Network Engineer</p>
                    </div>
                  </motion.li>
              </FadeInItem>
                </ul>
            </StaggerContainer>
          </SlideInLeft>

          <SlideInRight>
            <PulseAnimation>
              <div className="flex justify-center">
                <img
                  src="/img/xvann_logo.png?height=400&width=400"
                  alt="About Me"
                  width={400}
                  height={400}
                  className="aspect-square rounded-lg object-cover"
                />
              </div>
            </PulseAnimation>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
