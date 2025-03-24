"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const formSchema = z.object({
  plotLength: z.string().min(1, { message: "Plot length is required" }),
  plotWidth: z.string().min(1, { message: "Plot width is required" }),
  budget: z.string().min(1, { message: "Budget is required" }),
  floors: z.string().min(1, { message: "Number of floors is required" }),
  bedrooms: z.string().min(1, { message: "Number of bedrooms is required" }),
  bathrooms: z.string().min(1, { message: "Number of bathrooms is required" }),
  style: z.string().min(1, { message: "Architectural style is required" }),
  vastuPriority: z.number().min(1).max(10),
  vastuElements: z.array(z.string()).optional(),
  additionalRequirements: z.string().optional(),
})

export default function DesignForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [vastuPriority, setVastuPriority] = useState(7)

  const vastuElements = [
    { id: "entrance", label: "Main Entrance" },
    { id: "kitchen", label: "Kitchen Placement" },
    { id: "bedroom", label: "Master Bedroom" },
    { id: "living", label: "Living Room" },
    { id: "study", label: "Study/Office" },
    { id: "stairs", label: "Staircase" },
    { id: "toilet", label: "Toilet Placement" },
    { id: "temple", label: "Temple/Puja Room" },
  ]

  const architecturalStyles = [
    { value: "modern", label: "Modern" },
    { value: "contemporary", label: "Contemporary" },
    { value: "minimalist", label: "Minimalist" },
    { value: "traditional", label: "Traditional" },
    { value: "indo-modern", label: "Indo-Modern Fusion" },
    { value: "colonial", label: "Colonial" },
  ]

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plotLength: "",
      plotWidth: "",
      budget: "",
      floors: "1",
      bedrooms: "3",
      bathrooms: "2",
      style: "",
      vastuPriority: 7,
      vastuElements: ["entrance", "kitchen", "bedroom"],
      additionalRequirements: "",
    },
  })

  function handleSubmit(values: z.infer<typeof formSchema>) {
    onSubmit(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Plot Dimensions & Budget</h3>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="plotLength"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plot Length (feet)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 60" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="plotWidth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plot Width (feet)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 40" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Budget (₹)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 50,00,000" {...field} />
                    </FormControl>
                    <FormDescription>Approximate budget for construction</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">House Requirements</h3>

              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="floors"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Floors</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bedrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bedrooms</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bathrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bathrooms</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="style"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Architectural Style</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {architecturalStyles.map((style) => (
                          <SelectItem key={style.value} value={style.value}>
                            {style.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Vastu Preferences</h3>

            <FormField
              control={form.control}
              name="vastuPriority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vastu Compliance Priority (1-10)</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      <Slider
                        min={1}
                        max={10}
                        step={1}
                        defaultValue={[vastuPriority]}
                        onValueChange={(value) => {
                          setVastuPriority(value[0])
                          field.onChange(value[0])
                        }}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Flexible (1)</span>
                        <span>Current: {vastuPriority}</span>
                        <span>Strict (10)</span>
                      </div>
                    </div>
                  </FormControl>
                  <FormDescription>How strictly should the design adhere to Vastu principles?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="vastuElements"
              render={() => (
                <FormItem className="mt-4">
                  <div className="mb-2">
                    <FormLabel>Vastu Elements to Prioritize</FormLabel>
                    <FormDescription>
                      Select the elements where Vastu compliance is most important to you
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {vastuElements.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="vastuElements"
                        render={({ field }) => {
                          return (
                            <FormItem key={item.id} className="flex flex-row items-start space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...(field.value || []), item.id])
                                      : field.onChange(field.value?.filter((value) => value !== item.id))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <FormField
          control={form.control}
          name="additionalRequirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Requirements</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any specific requirements or preferences for your home design..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Include details about special rooms, accessibility needs, or sustainability features
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full md:w-auto">
          Generate Vastu-Compliant Designs
        </Button>
      </form>
    </Form>
  )
}

