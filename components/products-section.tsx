"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Watch, Laptop, Smartphone, ArrowRight } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "AyWatch Pro",
    category: "Smartwatch",
    description: "Health monitoring meets elegant design. Track your wellness journey with precision.",
    icon: Watch,
    image: "/images/smartwatch.jpg",
    accent: "#00d4ff",
  },
  {
    id: 2,
    name: "AyBook Ultra",
    category: "Laptop",
    description: "Powerful performance in an ultra-thin profile. Work without limits.",
    icon: Laptop,
    image: "/images/laptop.jpg",
    accent: "#ff7f50",
  },
  {
    id: 3,
    name: "AyPhone X",
    category: "Smartphone",
    description: "Next-generation mobile experience. Capture, create, connect.",
    icon: Smartphone,
    image: "/images/phone.jpg",
    accent: "#00d4ff",
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const Icon = product.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
      >
        {/* Image container */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-b from-muted/30 to-muted/10">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Icon badge */}
          <div className="absolute top-4 right-4">
            <div 
              className="p-3 rounded-xl bg-card/90 backdrop-blur-sm shadow-sm"
              style={{ color: product.accent }}
            >
              <Icon className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <span 
              className="text-sm font-medium uppercase tracking-wider"
              style={{ color: product.accent }}
            >
              {product.category}
            </span>
            <h3 className="font-[var(--font-poppins)] text-xl font-semibold text-foreground">
              {product.name}
            </h3>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-sm">
            {product.description}
          </p>

          <motion.button
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-sm font-medium group/btn"
            style={{ color: product.accent }}
          >
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="products" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-[#00d4ff] font-medium text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-[var(--font-poppins)] text-4xl md:text-5xl font-semibold text-foreground">
            Designed for You
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Premium technology that seamlessly integrates into your daily life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
