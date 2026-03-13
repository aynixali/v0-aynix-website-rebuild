"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Watch, Laptop, Smartphone, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "AyWatch Pro",
    category: "Smartwatch",
    description: "Health monitoring meets elegant design. Track your wellness with precision.",
    icon: Watch,
    image: "/images/smartwatch.jpg",
  },
  {
    id: 2,
    name: "AyBook Ultra",
    category: "Laptop",
    description: "Powerful performance in an ultra-thin profile. Work without limits.",
    icon: Laptop,
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "AyPhone X",
    category: "Smartphone",
    description: "Next-generation mobile experience. Capture, create, connect.",
    icon: Smartphone,
    image: "/images/phone.jpg",
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const Icon = product.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative bg-card rounded-xl overflow-hidden border border-border hover:border-foreground/20 transition-colors duration-300"
      >
        {/* Image container */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {product.category}
              </span>
              <h3 className="font-[var(--font-poppins)] text-lg font-semibold text-foreground">
                {product.name}
              </h3>
            </div>
            <div className="p-2 rounded-lg bg-muted">
              <Icon className="w-4 h-4 text-foreground/70" />
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {product.description}
          </p>

          <motion.button
            whileHover={{ x: 2 }}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground group/btn"
          >
            Learn More
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
    <section id="products" ref={sectionRef} className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Products
          </span>
          <h2 className="font-[var(--font-poppins)] text-3xl md:text-4xl font-semibold text-foreground">
            Built for you
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            Technology that integrates seamlessly into your daily routine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
