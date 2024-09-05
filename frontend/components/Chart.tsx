"use client"

import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { Button } from "@chakra-ui/react"
import QuickAddForm from "./forms/QuickAddForm"

export const description = "A radial chart with a custom shape"

const chartData = [
  { browser: "safari", visitors: 1260, fill: "var(--color-safari)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Chart() {
  const totalBudget = 3500;

  return (
    <Card className="flex flex-col sm:w-sm md:w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Hello Stephanie</CardTitle>
        <CardDescription>Nice! You are still below the budget</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={(3100/totalBudget) * 360}
            innerRadius={80}
            outerRadius={140}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          ${chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          USD spent
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
            Budget Left: $20
        </div>
        <Sheet>
          <SheetTrigger className="bg-light_brown text-white rounded-full h-auto w-auto px-4 py-2 hover:border-2 hover:border-white">Quick Add</SheetTrigger>
          <SheetContent className=" h-[45vh] flex flex-col items-center bg-cream" side={"top"}>
            <SheetHeader className="flex flex-col items-center justify-center">
              <SheetTitle>Quick Add</SheetTitle>
              <SheetDescription>
                Please select if amount is expense or income
              </SheetDescription>
            </SheetHeader>
            <QuickAddForm/>
            <SheetFooter>
              <SheetClose className="flex gap-5">
                <Button 
                  bg="light_brown" 
                  color="white" 
                  _hover={{ 
                    border: "2px solid", 
                    borderColor: "white" 
                  }} 
                  border="2px solid transparent" // Ensure default border is transparent
                >
                  Submit
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>


      </CardFooter>
    </Card>
  )
}

export default Chart;