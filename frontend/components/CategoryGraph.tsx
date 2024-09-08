"use client"

import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Flex, Heading } from "@chakra-ui/react"

export const description = "A stacked bar chart with a legend"

const chartData = [
  { category: "Groceries", spent: 450, budget_left: 300 },
  { category: "Transportation", spent: 380, budget_left: 420 },
  { category: "Shopping", spent: 520, budget_left: 120 },
  { category: "Entertainment", spent: 140, budget_left: 550 },
  { category: "Utilities", spent: 600, budget_left: 350 },
  { category: "Eating Out", spent: 600, budget_left: 400 },
]

const chartConfig = {
    spent: {
    label: "Spent",
    color: "hsl(var(--chart-1))",
  },
  budget_left: {
    label: "Budget Left",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function CategoryGraph() {
  return (
    <Card className="border border-dark_brown h-full w-full">
      <Flex direction={"column"} alignItems="center" padding={3}>
        <Heading fontSize={20} className="text-light_brown">Catgeories Overview</Heading>
      </Flex>
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return value
              }}
            />
            <Bar
              dataKey="spent"
              stackId="a"
              fill="var(--color-spent)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="budget_left"
              stackId="a"
              fill="var(--color-budget_left)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[180px]"
                  formatter={(value, name, item, index) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                        style={
                          {
                            "--color-bg": `var(--color-${name})`,
                          } as React.CSSProperties
                        }
                      />
                      {chartConfig[name as keyof typeof chartConfig]?.label ||
                        name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-foreground">
                          USD
                        </span>
                      </div>
                      {/* Add this after the last item */}
                      {index === 1 && (
                        <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                          {item.payload.category} Limit
                          <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                            {item.payload.spent + item.payload.budget_left}
                            <span className="font-normal text-muted-foreground">
                              USD
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                />
              }
              cursor={false}
              // defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default CategoryGraph;
