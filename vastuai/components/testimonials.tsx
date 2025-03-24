import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Homeowner, Delhi",
      content:
        "VastuAI helped me design my dream home that perfectly balances modern aesthetics with traditional Vastu principles. The 3D visualization made it easy to understand the space.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Priya Patel",
      role: "Interior Designer",
      content:
        "As a professional designer, I'm impressed by the accuracy and attention to Vastu details. The AI suggestions are innovative and save me hours of planning time.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Amit Verma",
      role: "Real Estate Developer",
      content:
        "We've integrated VastuAI into our development process. Our clients love the ability to visualize and customize their homes before construction begins.",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from homeowners, architects, and developers who have transformed their design process with VastuAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pt-4 border-t">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-muted">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

