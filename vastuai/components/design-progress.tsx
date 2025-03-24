"use client"

import { Progress } from "@/components/ui/progress"
import { Loader2 } from "lucide-react"

export default function DesignProgress({ progress }: { progress: number }) {
  const steps = [
    "Analyzing plot dimensions and requirements...",
    "Applying Vastu principles to floor plan...",
    "Optimizing room placements and orientations...",
    "Generating elevation designs...",
    "Finalizing Vastu compliance score...",
    "Preparing 3D visualization...",
    "Completing design generation...",
  ]

  // Calculate which step to show based on progress
  const currentStepIndex = Math.min(Math.floor((progress / 100) * steps.length), steps.length - 1)

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
      </div>

      <h3 className="text-xl font-semibold mb-2">Generating Your Designs</h3>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        Our AI is creating multiple Vastu-compliant designs based on your requirements
      </p>

      <div className="w-full max-w-md mb-4">
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
          <span>0%</span>
          <span>{progress}%</span>
          <span>100%</span>
        </div>
      </div>

      <div className="mt-8 w-full max-w-md">
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center gap-3 ${index > currentStepIndex ? "opacity-40" : ""}`}>
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  index < currentStepIndex
                    ? "bg-primary text-primary-foreground"
                    : index === currentStepIndex
                      ? "border-2 border-primary"
                      : "border-2 border-muted"
                }`}
              >
                {index < currentStepIndex && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
              <span className={`text-sm ${index === currentStepIndex ? "font-medium" : ""}`}>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

