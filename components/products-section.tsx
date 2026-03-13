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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
      >
        {/* Image container */}
        <div className="relative h-72 overflow-hidden bg-secondary">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 space-y-5">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {product.category}
              </span>
              <h3 className="font-[var(--font-space)] text-2xl font-bold text-foreground">
                {product.name}
              </h3>
            </div>
            <div className="p-3 rounded-xl bg-secondary border border-border">
              <Icon className="w-5 h-5 text-primary" />
            </div>
          </div>
          
          <p className="text-muted-foreground text-base leading-relaxed">
            {product.description}
          </p>

          <motion.button
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-base font-semibold text-primary group/btn"
          >
            Learn More
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
    <section id="products" ref={sectionRef} className="relative py-28 md:py-36">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-6"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Products
          </span>
          <h2 className="font-[var(--font-space)] text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Built for You
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-xl">
            Technology that integrates seamlessly into your daily routine.
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
