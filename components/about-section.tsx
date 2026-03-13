"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Cpu, Palette, Rocket } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries with thoughtful technology.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Beauty in every detail, function in every form.",
  },
  {
    icon: Cpu,
    title: "Performance",
    description: "Powerful tech that keeps pace with you.",
  },
  {
    icon: Rocket,
    title: "Future",
    description: "Building tomorrow's devices, available today.",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group text-center p-6"
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.2 }}
        className="inline-flex p-4 rounded-2xl bg-muted mb-4"
      >
        <Icon className="w-6 h-6 text-foreground/80" />
      </motion.div>
      
      <h3 className="font-[var(--font-poppins)] text-lg font-bold text-foreground mb-2">
        {feature.title}
      </h3>
      
      <p className="text-muted-foreground text-base leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-6"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              About Us
            </span>
            <h2 className="font-[var(--font-poppins)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Technology with Purpose
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              At Aynix, we believe technology should enhance life, not complicate it. 
              Our products combine premium materials, thoughtful engineering, and clean design.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-14">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-16 md:gap-24 pt-12 border-t border-border"
          >
            <div className="text-center">
              <div className="font-[var(--font-poppins)] text-5xl md:text-6xl font-bold text-foreground">50+</div>
              <div className="text-base text-muted-foreground mt-2 font-medium">Patents</div>
            </div>
            <div className="text-center">
              <div className="font-[var(--font-poppins)] text-5xl md:text-6xl font-bold text-foreground">10M+</div>
              <div className="text-base text-muted-foreground mt-2 font-medium">Users</div>
            </div>
            <div className="text-center">
              <div className="font-[var(--font-poppins)] text-5xl md:text-6xl font-bold text-foreground">99%</div>
              <div className="text-base text-muted-foreground mt-2 font-medium">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
