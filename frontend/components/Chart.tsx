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
  CardFooter,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { Button, Flex, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import LoaderSpinner from "./LoaderSpinner"

const chartData = [
  { month: "August", totalExpenses: 1260, fill: "var(--color-month)" },
]

const chartConfig = {
  totalExpenses: {
    label: "Total Expenses",
  },
  month: {
    label: "Month",
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
    <Card className="flex flex-col w-full border border-dark_brown h-full">
      <Flex direction={"column"} alignItems="center" padding={3}>
        <Heading fontSize={20} className="text-light_brown">Total Expenses</Heading>
      </Flex>
      
      {loading ? (
        <LoaderSpinner />
      ) : (
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[200px]"
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
              <RadialBar dataKey="totalExpenses" background />
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
                            ${chartData[0].totalExpenses.toLocaleString()}
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