"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { 
  MotionWrapper, 
  StaggerContainer, 
  FadeInItem,
  ScaleInItem 
} from "@/components/motion-wrapper"

import { motion } from "framer-motion"

export function ProjectsSection() {
  const projects = [
    {
      index: 0,
      title: "Chat AI Website",
      description: "chatgpt online platform that allows to interact with AI and also create images with the power of AI.",
      image: "/portfolio/project-chatgpt.png?height=300&width=700",
      tags: ["React", "Vuejs", "Node.js", "Tailwind CSS"],
      github: null,
      demo: "https://chatgpt.xvannn.xyz",
    },
    {
      index: 1,
      title: "Web DL",
      description: "online tools that make it possible to download media in the form of images or videos on supported platforms.",
      image: "/portfolio/project-webdl.png?height=300&width=700",
      tags: ["ExpressJs", "Tailwind CSS", "Node.js", "HTML"],
      github: "https://github.com/xvannn07/web-down",
      demo: "https://webdl.xvannn.xyz",
    },
    {
      index: 2,
      title: "Tiktok Downloader",
      description: "An online website that allows you to download media in the form of images or videos on the TikTok platform for free.",
      image: "/portfolio/project-tiktok.png?height=300&width=700",
      tags: ["ExpressJS", "Bootsrap", "Node.js", "HTML/CSS"],
      github: "https://github.com/tiktok-downloader",
      demo: "https://tiktok.xvannn.xyz",
    },
    {
      index: 3,
      title: "Template Hostpot Mikrotik",
      description: "A Mikrotik hotspot template script that allows you to change the UI on the Mikrotik hotspot so that it looks cooler and more modern.",
      image: "/portfolio/project-mikrotik.png?height=300&width=700",
      tags: ["HTML/CSS", "JavaScript", "Mikrotik"],
      github: "https://github.com/Xvannn07/templat-hostpot-mikrotik",
      demo: null,
    },
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w mx-auto">
        <MotionWrapper>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Portfolio
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Work</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some recent projects I've worked on.
              </p>
            </div>
          </div>
        </MotionWrapper>

        <StaggerContainer className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <FadeInItem key={project.index}>
              <ScaleInItem>
                <Card className="overflow-hidden group transition-all hover:shadow-lg">
                  <div className="overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="aspect-video w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold"
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-muted-foreground"
                      >
                        {project.description}
                      </motion.p>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-2"
                      >
                        {project.tags.map((tag) => (
                          <motion.div
                            key={tag}
                            whileHover={{ scale: 1.05 }}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                          >
                            {tag}
                          </motion.div>
                        ))}
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-2"
                      >
                        {project.github ? (
                          <Link 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button size="sm" variant="outline">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                              </Button>
                            </motion.div>
                          </Link>
                        ) : null}
                        {project.demo ? (
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button size="sm" variant="outline">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Demo
                              </Button>
                            </motion.div>
                          </Link>
                        ) : null}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </ScaleInItem>
            </FadeInItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
