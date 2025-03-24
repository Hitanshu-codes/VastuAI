import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Input Your Requirements",
      description: "Enter your plot dimensions, budget, room preferences, and Vastu priorities.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      number: "02",
      title: "AI Generates Designs",
      description: "Our AI creates multiple Vastu-compliant design options based on your inputs.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      number: "03",
      title: "Visualize in 3D",
      description: "Explore your designs in immersive 3D and make real-time adjustments.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      number: "04",
      title: "Finalize & Download",
      description: "Get detailed blueprints and connect with professionals to bring your design to life.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to construction-ready designs in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative mb-6 rounded-lg overflow-hidden aspect-video bg-muted">
                <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm flex-1">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/design" className="flex items-center">
              Start Your Design Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

