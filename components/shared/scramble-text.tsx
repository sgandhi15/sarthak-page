"use client"

import { useState, useEffect, useRef } from "react"
import { usePortfolio } from "@/components/providers"

interface ScrambleTextProps {
  text: string
  className?: string
}

export default function ScrambleText({ text, className = "" }: ScrambleTextProps) {
  const { setCursorType } = usePortfolio()
  const containerRef = useRef<HTMLSpanElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  // Generate random character
  const getRandomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/"
    return chars.charAt(Math.floor(Math.random() * chars.length))
  }

  // Handle scramble effect
  useEffect(() => {
    if (!containerRef.current || !isHovering) return

    const originalText = text
    const letters = text.split("")
    const spans = containerRef.current.querySelectorAll(".letter")

    let frames = 0
    const maxFrames = 12 // Reduced from 20 to 12 for shorter animation
    let animationFrameId: number
    let lastFrameTime = 0
    const frameDelay = 20 // Reduced from 25 to 20ms for faster animation

    const scramble = (timestamp: number) => {
      // Only update if enough time has passed
      if (timestamp - lastFrameTime < frameDelay) {
        animationFrameId = requestAnimationFrame(scramble)
        return
      }

      lastFrameTime = timestamp
      frames++

      spans.forEach((span, i) => {
        // Start with random characters for shorter time
        if (frames <= maxFrames * 0.5) {
          // Spend 50% of the time in random state (reduced from 60%)
          span.textContent = getRandomChar()
        }
        // Gradually restore original characters
        else {
          const progress = (frames - maxFrames * 0.5) / (maxFrames * 0.5)
          const shouldRestore = Math.random() < progress
          span.textContent = shouldRestore ? letters[i] : getRandomChar()
        }
      })

      if (frames < maxFrames) {
        animationFrameId = requestAnimationFrame(scramble)
      } else {
        // Reset to original text
        spans.forEach((span, i) => {
          span.textContent = letters[i]
        })
      }
    }

    animationFrameId = requestAnimationFrame(scramble)

    return () => {
      cancelAnimationFrame(animationFrameId)
      // Reset text when effect ends
      spans.forEach((span, i) => {
        span.textContent = letters[i]
      })
    }
  }, [isHovering, text])

  return (
    <span
      ref={containerRef}
      className={`inline-block ${className}`}
      onMouseEnter={() => {
        setCursorType("hover")
        setIsHovering(true)
      }}
      onMouseLeave={() => {
        setCursorType("default")
        setIsHovering(false)
      }}
    >
      {text.split("").map((letter, index) => (
        <span key={index} className="letter inline-block transition-all duration-100">
          {letter}
        </span>
      ))}
    </span>
  )
}
