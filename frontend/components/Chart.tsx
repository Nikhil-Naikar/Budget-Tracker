"use client"

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
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { Button, Flex, Heading } from "@chakra-ui/react"
import QuickAddForm from "./forms/QuickAddForm"
import { useEffect, useState } from "react"
import LoaderSpinner from "./LoaderSpinner"

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
  const [loading, setLoading] = useState(true);

   // Simulate data loading
   useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false); // Set loading to false after data is "loaded"
    }, 1000); // Adjust timeout as needed
  }, []);

  return (
    <Card className="flex flex-col sm:w-auto md:w-[500px] border border-dark_brown h-[350px]">
      <Flex direction={"column"} alignItems="center" padding={3}>
        <Heading fontSize={20} className="text-light_brown">August 2024</Heading>
      </Flex>
      
      {loading ? (
        <LoaderSpinner />
      ) : (
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
      )
      }

      <CardFooter className="flex-col gap-2 text-md text-light_brown">
        <Flex direction={"column"} alignItems="center" padding={3}>
          <Heading fontSize={20} className="text-light_brown">Budget Left: $246</Heading>
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default Chart;