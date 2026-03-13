"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background product images with low opacity */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 -right-20 w-[500px] h-[500px]"
        >
          <Image
            src="/images/laptop.jpg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-10 -left-10 w-[350px] h-[350px]"
        >
          <Image
            src="/images/smartwatch.jpg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px]"
        >
          <Image
            src="/images/phone.jpg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Small stylish logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-[var(--font-poppins)] text-2xl md:text-3xl font-light tracking-[0.3em] text-foreground/80">
              aynix
            </h1>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="font-[var(--font-poppins)] text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-tight">
              Technology
              <br />
              <span className="text-[#00d4ff]">Refined</span>
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed font-light"
          >
            Premium devices crafted for the modern lifestyle. 
            Where innovation meets elegance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <motion.a
              href="#products"
              className="group px-8 py-4 bg-[#00d4ff] text-foreground rounded-full font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#00d4ff]/30"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                Explore Products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>

            <motion.a
              href="#about"
              className="group px-8 py-4 border border-foreground/20 text-foreground rounded-full font-medium text-base transition-all duration-300 hover:border-[#ff7f50] hover:text-[#ff7f50]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-[#00d4ff] rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
