"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "An interactive bar chart"

const chartData = [
  { date: "2024-08-01", expenses: 178, income: 0 },
  { date: "2024-08-02", expenses: 470, income: 0 },
  { date: "2024-08-03", expenses: 103, income: 0 },
  { date: "2024-08-04", expenses: 439, income: 0 },
  { date: "2024-08-05", expenses: 88, income: 0 },
  { date: "2024-08-06", expenses: 294, income: 0 },
  { date: "2024-08-07", expenses: 323, income: 0 },
  { date: "2024-08-08", expenses: 385, income: 315 }, // First biweekly income
  { date: "2024-08-09", expenses: 438, income: 0 },
  { date: "2024-08-10", expenses: 155, income: 0 },
  { date: "2024-08-11", expenses: 92, income: 0 },
  { date: "2024-08-12", expenses: 492, income: 0 },
  { date: "2024-08-13", expenses: 81, income: 0 },
  { date: "2024-08-14", expenses: 426, income: 0 },
  { date: "2024-08-15", expenses: 307, income: 0 },
  { date: "2024-08-16", expenses: 371, income: 315 }, // Second biweekly income
  { date: "2024-08-17", expenses: 475, income: 0 },
  { date: "2024-08-18", expenses: 107, income: 0 },
  { date: "2024-08-19", expenses: 341, income: 0 },
  { date: "2024-08-20", expenses: 408, income: 0 },
  { date: "2024-08-21", expenses: 169, income: 0 },
  { date: "2024-08-22", expenses: 317, income: 0 },
  { date: "2024-08-23", expenses: 480, income: 315 }, // Third biweekly income
  { date: "2024-08-24", expenses: 132, income: 0 },
  { date: "2024-08-25", expenses: 141, income: 0 },
  { date: "2024-08-26", expenses: 434, income: 0 },
  { date: "2024-08-27", expenses: 448, income: 0 },
  { date: "2024-08-28", expenses: 149, income: 0 },
  { date: "2024-08-29", expenses: 103, income: 0 },
  { date: "2024-08-30", expenses: 446, income: 315 }, // Fourth biweekly income
];



const chartConfig = {
  views: {
    label: "Amount",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-1))",
  },
  income: {
    label: "Income",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Graph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("expenses")

  const total = React.useMemo(
    () => ({
      expenses: chartData.reduce((acc, curr) => acc + curr.expenses, 0),
      income: chartData.reduce((acc, curr) => acc + curr.income, 0),
    }),
    []
  )

  return (
    <Card className="border border-dark_brown sm:w-[300px] md:w-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row h-[70px]">
        <div className="flex">
          {["expenses", "income"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Graph;
