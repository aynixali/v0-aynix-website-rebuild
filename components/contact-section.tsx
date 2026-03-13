"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, ArrowRight } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex p-3 rounded-lg bg-muted"
          >
            <Mail className="w-5 h-5 text-foreground/70" />
          </motion.div>
          
          <div className="space-y-4">
            <h2 className="font-[var(--font-poppins)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Get in Touch
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <motion.a
            href="mailto:aynixofficial@gmail.com"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full text-base font-semibold transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl group"
          >
            <Mail className="w-5 h-5" />
            aynixofficial@gmail.com
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xs text-muted-foreground"
          >
            We typically respond within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
