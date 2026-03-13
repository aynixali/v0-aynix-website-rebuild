"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Cpu, Palette, Rocket } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push the boundaries of what's possible, transforming visionary ideas into revolutionary products.",
  },
  {
    icon: Cpu,
    title: "Future Technology",
    description: "Leveraging cutting-edge advancements to create devices that anticipate tomorrow's needs today.",
  },
  {
    icon: Palette,
    title: "Design Excellence",
    description: "Every curve, every pixel is meticulously crafted for both aesthetic beauty and functional perfection.",
  },
  {
    icon: Rocket,
    title: "Next Generation",
    description: "Building the devices that will define the next era of human-technology interaction.",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative glass rounded-2xl p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-500">
        <div className="space-y-4">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 glow-cyan-sm"
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h3 className="font-[var(--font-orbitron)] text-xl font-bold text-foreground">
            {feature.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary font-medium uppercase tracking-wider">About Aynix</span>
              <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Shaping the Future of Technology
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                At Aynix, we believe technology should be an extension of human potential. 
                Our mission is to create devices that seamlessly integrate into your life, 
                enhancing every moment with intelligent design and powerful functionality.
              </p>
              <p>
                Founded on the principles of innovation and excellence, we are committed 
                to pushing the boundaries of consumer technology. Every product we create 
                is a testament to our dedication to quality, sustainability, and the pursuit 
                of technological perfection.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-8"
            >
              <div className="text-center">
                <div className="font-[var(--font-orbitron)] text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Patents Filed</div>
              </div>
              <div className="text-center">
                <div className="font-[var(--font-orbitron)] text-4xl font-bold text-primary">10M+</div>
                <div className="text-sm text-muted-foreground">Users Worldwide</div>
              </div>
              <div className="text-center">
                <div className="font-[var(--font-orbitron)] text-4xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
