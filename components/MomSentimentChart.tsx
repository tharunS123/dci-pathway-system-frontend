"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import type { TrendPoint } from "@/types/mom-analysis"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"

const chartConfig = {
    sentiment: {
        label: "Average Sentiment",
        color: "var(--chart-1)",
      },
  } satisfies ChartConfig

type ChartPoint = {
  label: string
  sentiment: number
}

function buildChartData(points: TrendPoint[]): ChartPoint[] {
  return points.map(([label, value]) => ({
    label,
    sentiment: typeof value === "number" ? value : Number(value ?? 0),
  }))
}

type MomSentimentChartProps = {
    points: TrendPoint[]
    title?: string
    description?: string
  }

export function MomSentimentChart({
    points,
    title = "Mom Sentiment Over Time",
    description = "Average sentiment score per check-in (–1 = very negative, +1 = very positive).",
  }: MomSentimentChartProps) {
  const chartData = React.useMemo(() => buildChartData(points), [points])

  if (!chartData.length) {
    return (
        <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Not enough trend data to render a chart yet.
          </p>
        </CardContent>
      </Card>
    )
  }



  const latestPoint = chartData[chartData.length - 1]
  const latestSentiment = latestPoint.sentiment
  const trendLabel =
    latestSentiment > 0.1
      ? "Improving"
      : latestSentiment < -0.1
      ? "Needs attention"
      : "Neutral"
  
  const trendBadgeVariant =
    latestSentiment > 0.1
      ? "default"
      : latestSentiment < -0.1
      ? "destructive"
      : "outline"

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div className="space-y-1">
          <CardTitle className="text-base font-semibold tracking-tight">
            {title}
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            {description}
          </CardDescription>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Badge variant={trendBadgeVariant} className="text-[0.7rem] font-medium px-2 py-0.5">
            {trendLabel}
          </Badge>
          <p className="text-xs text-muted-foreground">
            Latest:{" "}
            <span className="font-medium">
              {latestSentiment.toFixed(2)}
            </span>
          </p>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[260px] w-full"
        >
          <LineChart data={chartData} margin={{ left: 12, right: 12, top: 10, bottom: 8 }}>
            <CartesianGrid vertical={false} strokeDasharray="4 4" />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={24}
              className="text-xs"
            />
            {/* Keep scale consistent so stakeholders can visually compare charts */}
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[-1, 1]}
              tickFormatter={(value) => value.toFixed(1)}
              className="text-xs"
            />
            <ChartTooltip
              cursor={{ strokeDasharray: "4 4" }}
              content={
                <ChartTooltipContent
                  className="w-[180px]"
                  nameKey="sentiment"
                  labelKey="label"
                  formatter={(value) => (
                    <span className="font-medium">
                      {Number(value).toFixed(2)}
                    </span>
                  )}
                />
              }
            />
            <Line
              type="monotone"
              dataKey="sentiment"
              stroke="var(--color-sentiment)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex items-center justify-between text-[0.7rem] text-muted-foreground pt-1">
        <span>
          Trend based on{" "}
          <span className="font-medium">{chartData.length}</span>{" "}
          touchpoint{chartData.length === 1 ? "" : "s"}.
        </span>
        <span>
          Last check-in:{" "}
          <span className="font-medium">{latestPoint.label}</span>
        </span>
      </CardFooter>
    </Card>
  )
}

