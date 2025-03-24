"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  const benefits = [
    "AI-powered Vastu-compliant designs",
    "Real-time 3D visualization",
    "Expert consultation marketplace",
    "Automatic blueprint generation",
  ]

  return (
    <div className="relative overflow-hidden bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background z-0" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              AI-Powered <span className="text-primary">Vastu-Compliant</span> Home Design
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Design your dream home with our AI that respects Vastu principles. Get instant designs, 3D visualizations,
              and connect with professionals to bring your vision to life.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="group"
                asChild
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link href="/design">
                  Start Designing
                  <ArrowRight
                    className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                  />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/marketplace">Explore Marketplace</Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/50 z-10 rounded-lg" />
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="VastuAI Home Design"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

