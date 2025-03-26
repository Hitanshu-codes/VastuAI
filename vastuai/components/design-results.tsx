"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Download, Eye, Share2, ThumbsUp, ArrowRight } from "lucide-react"

interface Room {
  area: string
  direction: string
}

interface Design {
  id: number
  name: string
  thumbnail: string
  floorPlan?: string
  score: number
  features: string[]
  rooms?: Record<string, Room>
}

export default function DesignResults({ designs }: { designs: Design[] }) {
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null)
  const [activeDesignId, setActiveDesignId] = useState<number | null>(null)

  const handleSelectDesign = (id: number) => {
    setSelectedDesign(id)
  }

  const handleViewDetails = (id: number) => {
    setActiveDesignId(id === activeDesignId ? null : id)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your AI-Generated Designs</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Tabs defaultValue="vastu-score">
            <TabsList>
              <TabsTrigger value="vastu-score">Vastu Score</TabsTrigger>
              <TabsTrigger value="space">Space Efficiency</TabsTrigger>
              <TabsTrigger value="cost">Cost Efficiency</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {designs.map((design) => (
          <Card
            key={design.id}
            className={`overflow-hidden transition-all ${selectedDesign === design.id ? "ring-2 ring-primary" : ""}`}
          >
            <div className="relative aspect-video bg-muted">
              <img
                src={design.thumbnail || "/placeholder.svg"}
                alt={design.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm">
                Vastu Score: {design.score}%
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{design.name}</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-2">
                {design.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="mt-3 w-full flex justify-between items-center"
                onClick={() => handleViewDetails(design.id)}
              >
                <span>View Details</span>
                <ArrowRight
                  className={`h-4 w-4 transition-transform ${activeDesignId === design.id ? "rotate-90" : ""}`}
                />
              </Button>

              {activeDesignId === design.id && design.rooms && (
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-medium mb-3">Floor Plan</h4>
                  <div className="bg-muted rounded-md overflow-hidden mb-4">
                    <img
                      src={design.floorPlan || "/placeholder.svg"}
                      alt={`${design.name} Floor Plan`}
                      className="w-full h-auto"
                    />
                  </div>

                  <h4 className="font-medium mb-2">Room Details</h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(design.rooms).map(([room, details]) => (
                      <div key={room} className="flex justify-between">
                        <span className="capitalize">{room.replace(/([A-Z])/g, " $1").trim()}:</span>
                        <span className="text-muted-foreground">
                          {details.area} ({details.direction})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button
                variant={selectedDesign === design.id ? "default" : "outline"}
                onClick={() => handleSelectDesign(design.id)}
                className="flex items-center gap-2"
              >
                {selectedDesign === design.id ? (
                  <>
                    <ThumbsUp className="h-4 w-4" /> Selected
                  </>
                ) : (
                  "Select Design"
                )}
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={`/visualize/${design.id}`}>
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View Design</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-between items-center pt-6 border-t">
        <Button variant="outline">Generate More Designs</Button>
        <div className="flex gap-3">
          <Button variant="outline" disabled={!selectedDesign}>
            <Download className="h-4 w-4 mr-2" /> Download
          </Button>
          <Button variant="outline" disabled={!selectedDesign}>
            <Share2 className="h-4 w-4 mr-2" /> Share
          </Button>
          <Button disabled={!selectedDesign} asChild>
            {selectedDesign ? (
              <Link href={`/visualize/${selectedDesign}`}>
                <Eye className="h-4 w-4 mr-2" /> View in 3D
              </Link>
            ) : (
              <span>
                <Eye className="h-4 w-4 mr-2" /> View in 3D
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

