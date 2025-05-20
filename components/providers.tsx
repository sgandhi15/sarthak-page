"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type PortfolioContextType = {
  isLoading: boolean
  setIsLoading: (value: boolean) => void
  cursorType: string
  setCursorType: (value: string) => void
}

const PortfolioContext = createContext<PortfolioContextType>({
  isLoading: true,
  setIsLoading: () => {},
  cursorType: "default",
  setCursorType: () => {},
})

export const usePortfolio = () => useContext(PortfolioContext)

export function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [cursorType, setCursorType] = useState("default")

  useEffect(() => {
    // Check if loading has been shown before
    const hasLoadingBeenShown = localStorage.getItem("loadingShown")

    if (hasLoadingBeenShown === "true") {
      // Skip loading animation if already shown
      setIsLoading(false)
    } else {
      // Force loading to be true initially
      setIsLoading(true)
      // The loading screen component will handle setting isLoading to false
      // when the progress reaches 100%
    }
  }, [])

  return (
    <PortfolioContext.Provider value={{ isLoading, setIsLoading, cursorType, setCursorType }}>
      {children}
    </PortfolioContext.Provider>
  )
}
