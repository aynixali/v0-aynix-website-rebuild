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
          
          <div className="space-y-3">
            <h2 className="font-[var(--font-poppins)] text-3xl md:text-4xl font-semibold text-foreground">
              Get in touch
            </h2>
            
            <p className="text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <motion.a
            href="mailto:aynixofficial@gmail.com"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium transition-all duration-300 hover:bg-foreground/90 group"
          >
            <Mail className="w-4 h-4" />
            aynixofficial@gmail.com
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
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
