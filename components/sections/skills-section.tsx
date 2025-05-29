"use client"

import { 
  MotionWrapper, 
  StaggerContainer, 
  ScaleInItem,
  FadeInItem 
} from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { BookMarked, RemoveFormatting, Code, TypeOutline, Worm, Atom, CodeXml, Braces, Palette, Server, LayoutDashboard, GitBranch, Workflow } from "lucide-react"

export function SkillsSection() {
  const skills = [
    {
      index: 0,
      name: "HTML & CSS",
      icon <RemoveFormatting className="h-5 w-5 text-primary" />
    },
    {
      index: 1,
      name: "JavaScript",
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      index: 2,
      name: "TypeScript",
      icon: <TypeOutline className="h-5 w-5 text-primary" />
    },
    {
      index: 3,
      name: "Python",
      icon: <Worm className="h-5 w-5 text-primary" />
    },
    {
      index: 4,
      name: "React",
      icon: <Atom className="h-5 w-5 text-primary" />
    },
    {
      index: 5,
      name: "Next.js",
      icon: <CodeXml className="h-5 w-5 text-primary" />
    },
    {
      index: 6,
      name: "Express.js",
      icon: <Braces className="h-5 w-5 text-primary" />
    },
    {
      index: 7,
      name: "Tailwind CSS",
      icon: <Palette className="h-5 w-5 text-primary" />
    },
    {
      index: 8,
      name: "Node.js",
      icon: <Server className="h-5 w-5 text-primary" />
    },
    {
      index: 9,
      name: "UI/UX Design",
      icon: <LayoutDashboard className="h-5 w-5 text-primary" />
    },
    {
      index: 10,
      name: "Git",
      icon: <GitBranch className="h-5 w-5 text-primary" />
    },
    {
      index: 11,
      name: "API Integration",
      icon: <Workflow className="h-5 w-5 text-primary" />
    }
  ]

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 max-w mx-auto">
        <MotionWrapper>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
              >
                <BookMarked className="w-4 h-4 inline-block mr-2" />
                Skills
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                Languages & Tools
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                Here are the languages and tools I'm familiar with in modern web development.
              </motion.p>
            </div>
          </div>
        </MotionWrapper>

        <StaggerContainer className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <ScaleInItem key={skill.name}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 hover:border-primary/50 hover:shadow-md"
              >
                <FadeInItem>
                  <motion.div 
                    className="text-lg font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * skill.index }}
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.div>
                </FadeInItem>
              </motion.div>
            </ScaleInItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
