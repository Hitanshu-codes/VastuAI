import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Compass, Cpu, Ruler, Home, Palette, Shield } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Compass,
      title: "Vastu-Compliant Designs",
      description: "AI algorithms that ensure your home follows Vastu principles for harmony and positive energy.",
    },
    {
      icon: Cpu,
      title: "AI-Powered Generation",
      description: "Advanced AI that creates multiple design options based on your requirements in minutes.",
    },
    {
      icon: Ruler,
      title: "Precise Measurements",
      description: "Accurate dimensions and proportions following Vastu guidelines for optimal space utilization.",
    },
    {
      icon: Home,
      title: "3D Visualization",
      description: "Immersive 3D models and walkthroughs to experience your home before construction.",
    },
    {
      icon: Palette,
      title: "Customizable Designs",
      description: "Easily modify and personalize designs while maintaining Vastu compliance.",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Automatic checks to ensure designs meet local building codes and regulations.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines ancient Vastu wisdom with cutting-edge AI technology to create harmonious living
            spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

