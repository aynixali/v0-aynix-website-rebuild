"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Watch, Laptop, Smartphone } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "AyWatch Pro",
    category: "Smartwatches",
    description: "Next-generation wearable technology with advanced health monitoring and seamless connectivity.",
    icon: Watch,
    image: "/images/smartwatch.jpg",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    name: "AyBook Ultra",
    category: "Laptops",
    description: "Powerful computing redefined. Ultra-thin design meets uncompromising performance.",
    icon: Laptop,
    image: "/images/laptop.jpg",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 3,
    name: "AyPhone X",
    category: "Phones",
    description: "The future of mobile communication. Revolutionary display, camera, and AI capabilities.",
    icon: Smartphone,
    image: "/images/phone.jpg",
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    setRotateX(-mouseY / 20)
    setRotateY(mouseX / 20)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  const Icon = product.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative glass rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500">
        {/* Image container */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 z-20">
            <div className="p-3 glass rounded-xl glow-cyan-sm">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              {product.category}
            </span>
            <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-foreground">
              {product.name}
            </h3>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-primary font-medium group/btn"
          >
            Learn More
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </div>

        {/* Neon border effect */}
        <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

export function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="products" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-primary font-medium uppercase tracking-wider">Our Products</span>
          <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Technology Redefined
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our lineup of next-generation devices designed to elevate your digital experience.
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
