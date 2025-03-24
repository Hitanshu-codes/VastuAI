import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-0" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Design Your Vastu-Compliant Dream Home?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of homeowners who have transformed their living spaces with VastuAI's intelligent design
              platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/design" className="flex items-center">
                  Start Designing Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/marketplace">Explore Marketplace</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

