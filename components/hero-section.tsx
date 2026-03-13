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
          {/* Big bold AYNIX logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-[var(--font-poppins)] text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight text-foreground">
              AYNIX
            </h1>
          </motion.div>

          {/* Modern tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-2"
          >
            <h2 className="font-[var(--font-poppins)] text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80 tracking-wide">
              The Future of Tech
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed"
          >
            Premium devices designed with intention. Simple, powerful, beautiful.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6"
          >
            <motion.a
              href="#products"
              className="group px-10 py-4 bg-foreground text-background rounded-full font-semibold text-base transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="flex items-center gap-2">
                Explore Products
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>

            <motion.a
              href="#about"
              className="group px-10 py-4 border-2 border-foreground/20 text-foreground rounded-full font-semibold text-base transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
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
