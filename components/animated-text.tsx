"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  texts: string[]
  className?: string
}

export function AnimatedText({ texts, className = "" }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentIndex]

        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1))

          if (currentText === fullText) {
            // Wait a bit before starting to delete
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentIndex((currentIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 150,
    ) // Faster when deleting

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <motion.span
        className="text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {currentText}
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        className="ml-1 inline-block w-1 h-8 bg-primary"
      />
    </div>
  )
}
