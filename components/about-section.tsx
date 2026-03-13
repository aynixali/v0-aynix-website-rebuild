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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group text-center p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
        className="inline-flex p-4 rounded-2xl bg-secondary border border-border mb-5"
      >
        <Icon className="w-7 h-7 text-primary" />
      </motion.div>
      
      <h3 className="font-[var(--font-space)] text-xl font-bold text-foreground mb-3">
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
    <section id="about" ref={sectionRef} className="relative py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-20 space-y-6"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </span>
            <h2 className="font-[var(--font-space)] text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Technology with Purpose
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-xl leading-relaxed">
              At Aynix, we believe technology should enhance life, not complicate it. 
              Our products combine premium materials, thoughtful engineering, and clean design.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
