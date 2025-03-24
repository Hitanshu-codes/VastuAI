"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DesignForm from "@/components/design-form"
import DesignResults from "@/components/design-results"
import DesignProgress from "@/components/design-progress"

export default function DesignPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [designs, setDesigns] = useState<any[]>([])

  const handleSubmit = (formData: any) => {
    setIsGenerating(true)
    setProgress(0)
    setDesigns([])

    // Simulate AI design generation with progress updates
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 10
        if (newProgress >= 100) {
          clearInterval(interval)
          setIsGenerating(false)

          // Mock generated designs
          setDesigns([
            {
              id: 1,
              name: "Modern Vastu Design",
              thumbnail: "/placeholder.svg?height=300&width=400",
              score: 92,
              features: ["North-facing entrance", "Optimal room placement", "Natural lighting"],
            },
            {
              id: 2,
              name: "Contemporary Vastu Layout",
              thumbnail: "/placeholder.svg?height=300&width=400",
              score: 88,
              features: ["East-facing kitchen", "Southwest master bedroom", "Open floor plan"],
            },
            {
              id: 3,
              name: "Minimalist Vastu Home",
              thumbnail: "/placeholder.svg?height=300&width=400",
              score: 85,
              features: ["Balanced elements", "Energy-efficient", "Clutter-free spaces"],
            },
          ])
        }
        return newProgress
      })
    }, 500)

    return () => clearInterval(interval)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Design Your Vastu-Compliant Home</h1>

      <Tabs defaultValue="input" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="input">Input Parameters</TabsTrigger>
          <TabsTrigger value="results" disabled={designs.length === 0}>
            View Designs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="input" className="mt-6">
          {isGenerating ? <DesignProgress progress={progress} /> : <DesignForm onSubmit={handleSubmit} />}
        </TabsContent>

        <TabsContent value="results" className="mt-6">
          <DesignResults designs={designs} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

