"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, ArrowRight } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex p-4 rounded-2xl bg-[#00d4ff]/10"
          >
            <Mail className="w-8 h-8 text-[#00d4ff]" />
          </motion.div>
          
          <div className="space-y-4">
            <h2 className="font-[var(--font-poppins)] text-4xl md:text-5xl font-semibold text-foreground">
              Get in Touch
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <motion.a
            href="mailto:aynixofficial@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ff7f50] text-white rounded-full font-medium shadow-lg shadow-[#ff7f50]/20 hover:shadow-xl hover:shadow-[#ff7f50]/30 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5" />
            aynixofficial@gmail.com
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-muted-foreground"
          >
            We typically respond within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
