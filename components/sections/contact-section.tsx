"use client"

import { Button } from "@/components/ui/button"
import { Mail, Github, Instagram, CircleUser, ExternalLink } from "lucide-react"
import Link from "next/link"
import { MotionWrapper, SlideInLeft, SlideInRight } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

export function ContactSection() {
  const platforms = [
    {
      index: 0,
      name: "Github",
      icon: <Github className="h-5 w-5 text-primary" />,
      link: "https://github.com/xvannn07",
    },
    {
      index: 1,
      name: "Instagram",
      icon: <Instagram className="h-5 w-5 text-primary" />,
      link: "https://instagram.com/xvannn07",
    },
    {
      index: 2,
      name: "Lynk",
      icon: <ExternalLink className="h-5 w-5 text-primary" />,
      link: "https://lynk.id/xvannn",
    }
  ]

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w mx-auto">
        <MotionWrapper>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Kontak
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact ME</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in working together? Feel free to contact me.
              </p>
            </div>
          </div>
        </MotionWrapper>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <SlideInLeft>
            <div className="flex flex-col gap-4">
              {/* Contact Info - Email */}
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-muted-foreground">xvannn07@example.com</p>
                </div>
              </motion.div>

              {/* Contact Info - Phone */}
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CircleUser className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Contact</h3>
                  <p className="text-muted-foreground">+6281775489662</p>
                </div>
              </motion.div>

              {/* Social Media Links */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {platforms.map((social) => (
                    <motion.div 
                      key={`motion-${social.index}`}
                      whileHover={{ y: -5 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon" className="rounded-full">
                          <span className="sr-only">{social.name}</span>
                          {social.icon}
                        </Button>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SlideInLeft>

          {/* Contact Form */}
          <SlideInRight>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <form className="grid gap-4">
                {/* Name Input */}
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="name"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Input Your Name"
                  />
                </div>

                {/* Email Input */}
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Input Your Email"
                  />
                </div>

                {/* Message Input */}
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Input Your Message"
                  />
                </div>

                {/* Submit Button */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
