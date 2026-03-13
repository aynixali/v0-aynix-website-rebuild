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
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      className="group text-center p-5"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="inline-flex p-3 rounded-lg bg-muted mb-3"
      >
        <Icon className="w-5 h-5 text-foreground/70" />
      </motion.div>
      
      <h3 className="font-[var(--font-poppins)] text-sm font-semibold text-foreground mb-1.5">
        {feature.title}
      </h3>
      
      <p className="text-muted-foreground text-xs leading-relaxed">
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
            className="text-center mb-14 space-y-5"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              About
            </span>
            <h2 className="font-[var(--font-poppins)] text-3xl md:text-4xl font-semibold text-foreground">
              Technology with purpose
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
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
            className="flex flex-wrap justify-center gap-12 md:gap-16 pt-10 border-t border-border"
          >
            <div className="text-center">
              <div className="font-[var(--font-poppins)] text-3xl font-semibold text-foreground">50+</div>
              <div className="text-xs text-muted-foreground mt-1">Patents</div>
            </div>
            <div className="text-center">
              <div className="font-[var(--font-poppins)] text-3xl font-semibold text-foreground">10M+</div>
              <div className="text-xs text-muted-foreground mt-1">Users</div>
            </div>
            <div className="text-center">
              <div className="font-[var(--font-poppins)] text-3xl font-semibold text-foreground">99%</div>
              <div className="text-xs text-muted-foreground mt-1">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
