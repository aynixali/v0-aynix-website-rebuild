"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span className="font-[var(--font-space)] text-2xl font-bold tracking-tight text-foreground">
              AYNIX
            </span>
            <span className="hidden sm:inline text-muted-foreground text-sm font-medium">
              Premium Technology
            </span>
          </motion.div>

          {/* Contact */}
          <motion.a
            href="mailto:aynixofficial@gmail.com"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>aynixofficial@gmail.com</span>
          </motion.a>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            {currentYear} Aynix. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
