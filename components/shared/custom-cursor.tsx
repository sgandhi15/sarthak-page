"use client"

import { useEffect, useState } from "react"
import { usePortfolio } from "@/components/providers"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const { cursorType } = usePortfolio()

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updatePosition)

    return () => window.removeEventListener("mousemove", updatePosition)
  }, [])

  return (
    <div
      className={`custom-cursor ${cursorType}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: cursorType === "hover" ? "rgb(129, 230, 151)" : "white",
      }}
    />
  )
}
