"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

// 🔹 Types (TS support ke liye, JS me ignore ho jayega)
const ChartConfig = {}

// 🔹 Context
const ChartContext = React.createContext(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within <ChartContainer />")
  }
  return context
}

// 🔹 Container (IMPORTANT: yahi CSS vars set karega)
const ChartContainer = ({ config, children, className }) => {
  const style = Object.entries(config || {}).reduce((acc, [key, value]) => {
    acc[`--color-${key}`] = value.color
    return acc
  }, {})

  return (
    <ChartContext.Provider value={{ config }}>
      <div className={className} style={style}>
        {children}
      </div>
    </ChartContext.Provider>
  )
}

// 🔹 Tooltip Wrapper
const ChartTooltip = RechartsPrimitive.Tooltip

// 🔹 Tooltip Content
const ChartTooltipContent = ({ active, payload }) => {
  const { config } = useChart()

  if (!active || !payload?.length) return null

  return (
    <div className="rounded-md border bg-background p-2 shadow-sm">
      {payload.map((item, index) => {
        const key = item.dataKey
        const conf = config[key]

        return (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: conf?.color }}
            />
            <span>{conf?.label}:</span>
            <span className="font-medium">{item.value}</span>
          </div>
        )
      })}
    </div>
  )
}

// 🔹 Legend Wrapper
const ChartLegend = RechartsPrimitive.Legend

// 🔹 Legend Content
const ChartLegendContent = ({ payload }) => {
  const { config } = useChart()

  if (!payload) return null

  return (
    <div className="flex gap-4 text-sm">
      {payload.map((item) => {
        const key = item.dataKey
        const conf = config[key]

        return (
          <div key={key} className="flex items-center gap-1">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: conf?.color }}
            />
            <span>{conf?.label}</span>
          </div>
        )
      })}
    </div>
  )
}

// 🔹 Export
export {
    ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
}