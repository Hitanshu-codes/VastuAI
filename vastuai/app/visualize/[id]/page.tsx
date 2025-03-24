"use client"

import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Share2, CuboidIcon as Cube, Layers, Ruler, Thermometer, Droplet, Zap } from "lucide-react"

export default function VisualizePage({ params }: { params: { id: string } }) {
  const [designData, setDesignData] = useState({
    id: params.id,
    name: "Modern Vastu Home",
    description: "A contemporary 3-bedroom home designed with Vastu principles for optimal energy flow and harmony.",
    vastuScore: 92,
    features: [
      { name: "North-facing entrance", icon: Cube },
      { name: "East-facing kitchen", icon: Thermometer },
      { name: "Southwest master bedroom", icon: Layers },
      { name: "Optimal room proportions", icon: Ruler },
      { name: "Natural ventilation", icon: Droplet },
      { name: "Energy-efficient layout", icon: Zap },
    ],
    dimensions: {
      length: "60 feet",
      width: "40 feet",
      height: "20 feet",
      totalArea: "2400 sq ft",
    },
    sustainability: {
      energyEfficiency: "A+",
      waterConservation: "A",
      naturalLighting: "A+",
      ventilation: "A",
    },
  })

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-muted rounded-lg overflow-hidden h-[500px]">
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Model />
              <OrbitControls />
              <Environment preset="apartment" />
            </Canvas>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" /> Download
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" /> Share
              </Button>
            </div>
            <Button size="sm">Request Modifications</Button>
          </div>
        </div>

        <div className="lg:w-1/3">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{designData.name}</CardTitle>
                  <CardDescription>Design #{designData.id}</CardDescription>
                </div>
                <Badge className="text-lg px-3 py-1">Vastu Score: {designData.vastuScore}%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{designData.description}</p>

              <Tabs defaultValue="features">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
                  <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="mt-4">
                  <div className="grid grid-cols-2 gap-3">
                    {designData.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <feature.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="dimensions" className="mt-4">
                  <div className="grid grid-cols-2 gap-y-3">
                    <div className="text-sm font-medium">Length:</div>
                    <div className="text-sm">{designData.dimensions.length}</div>

                    <div className="text-sm font-medium">Width:</div>
                    <div className="text-sm">{designData.dimensions.width}</div>

                    <div className="text-sm font-medium">Height:</div>
                    <div className="text-sm">{designData.dimensions.height}</div>

                    <div className="text-sm font-medium">Total Area:</div>
                    <div className="text-sm">{designData.dimensions.totalArea}</div>
                  </div>
                </TabsContent>

                <TabsContent value="sustainability" className="mt-4">
                  <div className="grid grid-cols-2 gap-y-3">
                    <div className="text-sm font-medium">Energy Efficiency:</div>
                    <div className="text-sm">
                      <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                        {designData.sustainability.energyEfficiency}
                      </Badge>
                    </div>

                    <div className="text-sm font-medium">Water Conservation:</div>
                    <div className="text-sm">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                        {designData.sustainability.waterConservation}
                      </Badge>
                    </div>

                    <div className="text-sm font-medium">Natural Lighting:</div>
                    <div className="text-sm">
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
                        {designData.sustainability.naturalLighting}
                      </Badge>
                    </div>

                    <div className="text-sm font-medium">Ventilation:</div>
                    <div className="text-sm">
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                        {designData.sustainability.ventilation}
                      </Badge>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 flex flex-col gap-3">
                <Button className="w-full">Generate Blueprints</Button>
                <Button variant="outline" className="w-full">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function Model() {
  // Using a sample 3D model for demonstration
  const { scene } = useGLTF("/assets/3d/duck.glb")

  return <primitive object={scene} scale={2} position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]} />
}

