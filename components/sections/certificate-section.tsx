"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Link from "next/link"
import { useState, useRef } from "react"
import { 
  MotionWrapper, 
  StaggerContainer, 
  FadeInItem, 
  ScaleInItem,
  PulseAnimation 
} from "@/components/motion-wrapper"

export function CertificateSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const certificates = [
    {
      id: "tab1",
      title: "Backend Javascript Fundamentals",
      issuer: "Dicoding Indonesia Academy",
      date: "18 May 2025",
      category: "Web Development",
      description: "Completed comprehensive training in web development fundamentals including: Backend JavaScript.",
      imageUrl: "/certificates/backend-javascript.png",
      pdfUrl: "/certificates/backend-javascript.pdf"
    },
    {
      id: "tab2",
      title: "Pemograman Javascript",
      issuer: "Dicoding Indonesia Academy",
      date: "13 May 2025",
      category: "Programming",
      description: "Successful completion of the basic javascript programming course.",
      imageUrl: "/certificates/pemograman-javascript.png",
      pdfUrl: "/certificates/pemograman-javascript.pdf"
    }
  ]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const [direction, setDirection] = useState(0)

  const nextCertificate = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }

  const prevCertificate = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  return (
    <section 
      id="certificates" 
      ref={sectionRef}
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container px-4 md:px-6 max-w mx-auto">
        <MotionWrapper>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                <Award className="w-4 h-4 inline-block mr-2" />
                My Certificates
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Certifications</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Achievements and certifications I've earned throughout my learning journey.
              </p>
            </div>
          </div>
        </MotionWrapper>

        <motion.div 
          className="mx-auto max-w-5xl py-12"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Navigation Buttons */}
            <StaggerContainer delay={0.2}>
              <FadeInItem>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:scale-110 transition-transform"
                  onClick={prevCertificate}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </FadeInItem>
              <FadeInItem>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                  onClick={nextCertificate}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </FadeInItem>
            </StaggerContainer>

            {/* Certificate Slider */}
            <div className="overflow-hidden">
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                >
                  <ScaleInItem>
                    <Card className="overflow-hidden transform-gpu hover:scale-[1.02] transition-transform duration-300">
                      <CardContent className="p-6 flex flex-col">
                        {/* Certificate Image */}
                        <PulseAnimation>
                          <motion.div 
                            className="relative group w-full mb-6"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                          >
                            <Link href={certificates[currentIndex].pdfUrl} target="_blank">
                              <div className="relative">
                                <img
                                  src={certificates[currentIndex].imageUrl}
                                  alt={certificates[currentIndex].title}
                                  width={800}
                                  height={500}
                                  className="w-full rounded-lg object-cover aspect-[16/9]"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                                  <div className="text-white flex items-center gap-2">
                                    <FileText className="w-6 h-6" />
                                    <span>View Certificate</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        </PulseAnimation>

                        {/* Certificate Details */}
                        <StaggerContainer 
                          className="space-y-4 text-center"
                          delay={0.3}
                          staggerChildren={0.15}
                        >
                          <FadeInItem>
                            <h3 className="text-2xl font-bold mb-2">
                              {certificates[currentIndex].title}
                            </h3>
                            <p className="text-primary font-medium">
                              {certificates[currentIndex].issuer}
                            </p>
                          </FadeInItem>

                          <FadeInItem>
                            <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
                              <span>{certificates[currentIndex].date}</span>
                              <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1">
                                {certificates[currentIndex].category}
                              </span>
                            </div>
                          </FadeInItem>

                          <FadeInItem>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                              {certificates[currentIndex].description}
                            </p>
                          </FadeInItem>

                          <FadeInItem>
                            <Button asChild variant="outline">
                              <Link href={certificates[currentIndex].pdfUrl} target="_blank">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Open Certificate
                              </Link>
                            </Button>
                          </FadeInItem>
                        </StaggerContainer>
                      </CardContent>
                    </Card>
                  </ScaleInItem>
                </motion.div>
              </AnimatePresence>

              {/* Certificate Indicators */}
              <motion.div 
                className="flex justify-center gap-2 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {certificates.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-4" : "bg-primary/20"
                    }`}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
