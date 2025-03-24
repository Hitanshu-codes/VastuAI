"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Eye, Pencil, Share2, Trash2, Plus } from "lucide-react"

export default function DashboardPage() {
  const [savedDesigns, setSavedDesigns] = useState([
    {
      id: 1,
      name: "Modern Family Home",
      date: "March 15, 2025",
      thumbnail: "/placeholder.svg?height=200&width=300",
      status: "Completed",
    },
    {
      id: 2,
      name: "Minimalist Villa",
      date: "March 10, 2025",
      thumbnail: "/placeholder.svg?height=200&width=300",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Traditional Bungalow",
      date: "March 5, 2025",
      thumbnail: "/placeholder.svg?height=200&width=300",
      status: "Draft",
    },
  ])

  const [consultations, setConsultations] = useState([
    {
      id: 1,
      architect: "Priya Sharma",
      date: "March 25, 2025",
      time: "10:00 AM",
      status: "Scheduled",
      project: "Modern Family Home",
    },
    {
      id: 2,
      architect: "Rahul Patel",
      date: "April 2, 2025",
      time: "2:30 PM",
      status: "Pending",
      project: "Minimalist Villa",
    },
  ])

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>

      <Tabs defaultValue="designs" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="designs">My Designs</TabsTrigger>
          <TabsTrigger value="consultations">Consultations</TabsTrigger>
        </TabsList>

        <TabsContent value="designs" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedDesigns.map((design) => (
              <Card key={design.id} className="overflow-hidden">
                <div className="relative h-40 bg-muted">
                  <img
                    src={design.thumbnail || "/placeholder.svg"}
                    alt={design.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{design.name}</CardTitle>
                    <Badge
                      variant={
                        design.status === "Completed"
                          ? "default"
                          : design.status === "In Progress"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {design.status}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3" /> {design.date}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" /> View
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}

            <Card className="flex flex-col items-center justify-center h-full min-h-[250px] border-dashed">
              <CardContent className="flex flex-col items-center justify-center pt-6">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Plus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Create New Design</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Start designing your new Vastu-compliant home
                </p>
                <Button asChild>
                  <a href="/design">Start Designing</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="consultations" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultations.map((consultation) => (
              <Card key={consultation.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>Consultation with {consultation.architect}</CardTitle>
                    <Badge variant={consultation.status === "Scheduled" ? "default" : "outline"}>
                      {consultation.status}
                    </Badge>
                  </div>
                  <CardDescription>For project: {consultation.project}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {consultation.date} at {consultation.time}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                  <Button size="sm">Join Meeting</Button>
                </CardFooter>
              </Card>
            ))}

            <Card className="flex flex-col items-center justify-center h-full min-h-[200px] border-dashed">
              <CardContent className="flex flex-col items-center justify-center pt-6">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <CalendarIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Schedule Consultation</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Connect with an architect or Vastu expert
                </p>
                <Button>Book Appointment</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

