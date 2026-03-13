"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Soft background product images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute top-32 right-[10%] w-[400px] h-[400px]"
        >
          <Image
            src="/images/laptop.jpg"
            alt=""
            fill
            className="object-contain grayscale"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute bottom-20 left-[5%] w-[280px] h-[280px]"
        >
          <Image
            src="/images/smartwatch.jpg"
            alt=""
            fill
            className="object-contain grayscale"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="absolute top-1/3 left-[20%] w-[220px] h-[220px]"
        >
          <Image
            src="/images/phone.jpg"
            alt=""
            fill
            className="object-contain grayscale"
          />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Small stylish logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-[var(--font-poppins)] text-lg md:text-xl font-light tracking-[0.4em] uppercase text-foreground/60">
              aynix
            </h1>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="font-[var(--font-poppins)] text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight text-balance">
              Technology that
              <br />
              fits your life
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed"
          >
            Premium devices designed with intention. Simple, powerful, beautiful.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.a
              href="#products"
              className="group px-8 py-3.5 bg-foreground text-background rounded-full font-medium text-sm transition-all duration-300 hover:bg-foreground/90"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                View Products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </motion.a>

            <motion.a
              href="#about"
              className="group px-8 py-3.5 border border-border text-foreground rounded-full font-medium text-sm transition-all duration-300 hover:border-foreground/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Story
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-9 rounded-full border border-border flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-foreground/40 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
