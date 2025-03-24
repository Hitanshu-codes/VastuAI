"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Search, Filter, MapPin } from "lucide-react"

export default function MarketplacePage() {
  const [professionals, setProfessionals] = useState([
    {
      id: 1,
      name: "Arjun Mehta",
      title: "Vastu Architect",
      rating: 4.9,
      reviews: 124,
      location: "Mumbai, India",
      specialties: ["Modern Vastu", "Residential", "Commercial"],
      image: "/placeholder.svg?height=100&width=100",
      hourlyRate: "₹2,500",
    },
    {
      id: 2,
      name: "Neha Gupta",
      title: "Interior Designer & Vastu Consultant",
      rating: 4.8,
      reviews: 98,
      location: "Delhi, India",
      specialties: ["Interior Design", "Vastu Compliance", "Feng Shui"],
      image: "/placeholder.svg?height=100&width=100",
      hourlyRate: "₹2,200",
    },
    {
      id: 3,
      name: "Rajesh Sharma",
      title: "Structural Engineer",
      rating: 4.7,
      reviews: 86,
      location: "Bangalore, India",
      specialties: ["Structural Design", "Earthquake Resistant", "Green Building"],
      image: "/placeholder.svg?height=100&width=100",
      hourlyRate: "₹2,800",
    },
    {
      id: 4,
      name: "Priya Patel",
      title: "Vastu Expert & Architect",
      rating: 4.9,
      reviews: 112,
      location: "Ahmedabad, India",
      specialties: ["Traditional Vastu", "Modern Adaptations", "Residential"],
      image: "/placeholder.svg?height=100&width=100",
      hourlyRate: "₹2,300",
    },
  ])

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Professional Marketplace</h1>
      <p className="text-muted-foreground mb-8">
        Connect with architects, Vastu experts, and engineers to refine your designs
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search professionals by name, specialty, or location" className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filters
        </Button>
      </div>

      <Tabs defaultValue="architects" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
          <TabsTrigger value="architects">Architects</TabsTrigger>
          <TabsTrigger value="vastu-experts">Vastu Experts</TabsTrigger>
          <TabsTrigger value="engineers">Engineers</TabsTrigger>
        </TabsList>

        <TabsContent value="architects" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals
              .filter((p) => p.title.includes("Architect"))
              .map((professional) => (
                <ProfessionalCard key={professional.id} professional={professional} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="vastu-experts" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals
              .filter((p) => p.title.includes("Vastu"))
              .map((professional) => (
                <ProfessionalCard key={professional.id} professional={professional} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="engineers" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals
              .filter((p) => p.title.includes("Engineer"))
              .map((professional) => (
                <ProfessionalCard key={professional.id} professional={professional} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProfessionalCard({ professional }: { professional: any }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 pb-0">
        <div className="flex gap-4">
          <div className="h-16 w-16 rounded-full overflow-hidden bg-muted">
            <img
              src={professional.image || "/placeholder.svg"}
              alt={professional.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <CardTitle className="text-lg">{professional.name}</CardTitle>
            <CardDescription>{professional.title}</CardDescription>
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-3 w-3 fill-primary text-primary" />
              <span className="text-sm font-medium">{professional.rating}</span>
              <span className="text-xs text-muted-foreground">({professional.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin className="h-3 w-3" /> {professional.location}
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {professional.specialties.map((specialty: string) => (
            <Badge key={specialty} variant="secondary" className="font-normal">
              {specialty}
            </Badge>
          ))}
        </div>
        <div className="text-sm font-medium">{professional.hourlyRate} per hour</div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm">
          View Profile
        </Button>
        <Button size="sm">Contact</Button>
      </CardFooter>
    </Card>
  )
}

