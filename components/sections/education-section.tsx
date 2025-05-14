"use client"

import { BoneIcon as Mortarboard, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  MotionWrapper, 
  StaggerContainer, 
  FadeInItem,
  SlideInLeft 
} from "@/components/motion-wrapper"
import { motion } from "framer-motion"

export function EducationSection() {
  const educationHistory = [
    {
      level: "Sekolah Dasar (SD)",
      school: "SD Negeri 1 Banyuning",
      yearStart: "2005",
      yearEnd: "2020",
      description:
        "Completed primary education with good academic performance and active in extracurricular activities.",
      image: "/school/sdn1banyuning.jpg?height=200&width=200",
    },
    {
      level: "Sekolah Menengah Pertama (SMP)",
      school: "SMP Negeri 5 Singaraja",
      yearStart: "2020",
      yearEnd: "2023",
      description: "Active in student organizations and self-directed.",
      image: "/school/smpn5singaraja.jpg?height=200&width=200",
    },
    {
      level: "Sekolah Menengah Kejuruan (SMK)",
      school: "SMK Negeri 3 Singaraja",
      yearStart: "2023",
      yearEnd: "now",
      description:
        "Majored in communication network engineering with a focus on computer and network subjects. Became the president of the computer club.",
      image: "/school/smkn3singaraja.jpg?height=200&width=200",
    },
  ]

  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
                Education
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education History</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The formal education journey I have taken.
              </p>
            </div>
          </div>
        </MotionWrapper>

        <div className="mx-auto max-w-5xl py-12">
          <StaggerContainer className="space-y-8">
            {educationHistory.map((education, index) => (
              <FadeInItem key={index}>
                <div className="relative">
                  {/* Timeline connector with animation */}
                  {index < educationHistory.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="absolute left-8 top-16 w-0.5 bg-border"
                      aria-hidden="true"
                    />
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="relative overflow-hidden border-none bg-background shadow-md">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <motion.div 
                            className="relative flex-shrink-0 md:w-64"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <img
                              src={education.image || "/placeholder.svg"}
                              alt={education.school}
                              className="h-48 w-full object-cover md:h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                              <div className="text-white">
                                <motion.p 
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                  className="font-medium"
                                >
                                  {education.level}
                                </motion.p>
                              </div>
                            </div>
                          </motion.div>
                          <div className="p-6 flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                              <motion.h3 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl font-bold"
                              >
                                {education.school}
                              </motion.h3>
                              <motion.div 
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex items-center text-muted-foreground"
                              >
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>
                                  {education.yearStart} - {education.yearEnd}
                                </span>
                              </motion.div>
                            </div>
                            <motion.p 
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                              className="text-muted-foreground"
                            >
                              {education.description}
                            </motion.p>
                            <motion.div 
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              className="mt-4 flex items-center"
                            >
                              <Mortarboard className="mr-2 h-5 w-5 text-primary" />
                              <span className="font-medium">Graduated {education.yearEnd}</span>
                            </motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
