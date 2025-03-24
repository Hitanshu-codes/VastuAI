import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

