"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileText, Award, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function CertificateSection() {
  const certificates = [
    {
      id: "tab1",
      title: "Backend Javascript",
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
      issuer: "Cisco Networking Academy",
      date: "13 May 2025",
      category: "Programming",
      description: "Successful completion of the basic javascript programming course.",
      imageUrl: "/certificates/pemograman-javascript.png",
      pdfUrl: "/certificates/pemograman-javascript.pdf"
    }
  ]

  return (
    <section id="certificates" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 max-w mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
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
        </motion.div>

        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {certificates.map((cert) => (
                <TabsTrigger key={cert.id} value={cert.id}>
                  {cert.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {certificates.map((cert) => (
              <TabsContent 
                key={cert.id} 
                value={cert.id} 
                className="p-6 bg-background rounded-lg mt-6"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="relative group w-full md:w-1/2">
                    <Link href={cert.pdfUrl} target="_blank">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="relative"
                      >
                        <motion.img
                          src={cert.imageUrl}
                          alt={cert.title}
                          width={600}
                          height={400}
                          className="rounded-lg shadow-lg w-full"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <div className="text-white flex items-center gap-2">
                            <FileText className="w-6 h-6" />
                            <span>View Certificate</span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold">{cert.title}</h3>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{cert.date}</span>
                        <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1">
                          {cert.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{cert.description}</p>
                      <Button asChild variant="outline" className="mt-4">
                        <Link href={cert.pdfUrl} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open Certificate
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
