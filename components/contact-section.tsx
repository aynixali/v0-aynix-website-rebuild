"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, ArrowRight } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 md:py-36">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex p-4 rounded-2xl bg-secondary border border-border"
          >
            <Mail className="w-6 h-6 text-primary" />
          </motion.div>
          
          <div className="space-y-5">
            <h2 className="font-[var(--font-space)] text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Get in Touch
            </h2>
            
            <p className="text-muted-foreground text-xl">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <motion.a
            href="mailto:aynixofficial@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full text-lg font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] group"
          >
            <Mail className="w-5 h-5" />
            aynixofficial@gmail.com
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            We typically respond within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
