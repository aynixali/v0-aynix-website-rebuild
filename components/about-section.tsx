"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Cpu, Palette, Rocket } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries with forward-thinking technology.",
    color: "#00d4ff",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Beauty in every detail, function in every form.",
    color: "#ff7f50",
  },
  {
    icon: Cpu,
    title: "Performance",
    description: "Powerful technology that keeps up with you.",
    color: "#00d4ff",
  },
  {
    icon: Rocket,
    title: "Future",
    description: "Building devices for tomorrow, available today.",
    color: "#ff7f50",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group text-center p-6"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="inline-flex p-4 rounded-2xl mb-4"
        style={{ backgroundColor: `${feature.color}15` }}
      >
        <Icon className="w-7 h-7" style={{ color: feature.color }} />
      </motion.div>
      
      <h3 className="font-[var(--font-poppins)] text-lg font-semibold text-foreground mb-2">
        {feature.title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed">
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-6"
          >
            <span className="text-[#ff7f50] font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-[var(--font-poppins)] text-4xl md:text-5xl font-semibold text-foreground">
              Technology with Purpose
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              At Aynix, we believe technology should enhance your life, not complicate it. 
              Our products are designed with intention - combining premium materials, 
              thoughtful engineering, and clean aesthetics.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-12 md:gap-20 pt-8 border-t border-border"
          >
            <div className="text-center">
              <div className="font-[var(--font-poppins)] text-4xl font-semibold text-[#00d4ff]">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Patents</div>
            </div>
            <div className="text-center">
              <div className="font-[var(--font-poppins)] text-4xl font-semibold text-[#ff7f50]">10M+</div>
              <div className="text-sm text-muted-foreground mt-1">Users</div>
            </div>
            <div className="text-center">
              <div className="font-[var(--font-poppins)] text-4xl font-semibold text-[#00d4ff]">99%</div>
              <div className="text-sm text-muted-foreground mt-1">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
