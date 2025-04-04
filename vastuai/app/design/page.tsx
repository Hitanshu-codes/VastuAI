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
              thumbnail: "/modern.jpg?height=400&width=400",
              floorPlan:
                "/modern.png?height=400&width=400",
              score: 92,
              features: ["North-facing entrance", "Optimal room placement", "Natural lighting"],
              rooms: {
                livingRoom: { area: "320 sq ft", direction: "North-East" },
                kitchen: { area: "180 sq ft", direction: "South-East" },
                masterBedroom: { area: "240 sq ft", direction: "South-West" },
                bedroom2: { area: "180 sq ft", direction: "North-West" },
                bathroom1: { area: "80 sq ft", direction: "South" },
                bathroom2: { area: "60 sq ft", direction: "West" },
                poojaRoom: { area: "50 sq ft", direction: "North-East" },
              },
            },
            {
              id: 2,
              name: "Contemporary Vastu Layout",
              thumbnail: "/contem.jpg?height=400&width=400",
              floorPlan:
                "/com.jpg?height=400&width=400",
              score: 88,
              features: ["East-facing kitchen", "Southwest master bedroom", "Open floor plan"],
              rooms: {
                livingRoom: { area: "350 sq ft", direction: "North" },
                kitchen: { area: "200 sq ft", direction: "East" },
                masterBedroom: { area: "260 sq ft", direction: "South-West" },
                bedroom2: { area: "190 sq ft", direction: "West" },
                bathroom1: { area: "85 sq ft", direction: "South" },
                bathroom2: { area: "65 sq ft", direction: "West" },
                poojaRoom: { area: "45 sq ft", direction: "North-East" },
              },
            },
            {
              id: 3,
              name: "Minimalist Vastu Home",
              thumbnail: "/minimal.jpg?height=300&width=400",
              floorPlan:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/result-oIEvYwOP7R0yURVKXXUQIwTKw3sCgc.png",
              score: 85,
              features: ["Balanced elements", "Energy-efficient", "Clutter-free spaces"],
              rooms: {
                livingRoom: { area: "300 sq ft", direction: "North" },
                kitchen: { area: "160 sq ft", direction: "East" },
                masterBedroom: { area: "220 sq ft", direction: "South-West" },
                bedroom2: { area: "170 sq ft", direction: "West" },
                bathroom1: { area: "75 sq ft", direction: "South" },
                bathroom2: { area: "55 sq ft", direction: "West" },
                poojaRoom: { area: "40 sq ft", direction: "North-East" },
              },
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

