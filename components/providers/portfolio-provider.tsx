"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface PortfolioContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  cursorType: "default" | "hover";
  setCursorType: (type: "default" | "hover") => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorType, setCursorType] = useState<"default" | "hover">("default");
  const [mounted, setMounted] = useState(false);

  // Handle initial mount
  useEffect(() => {
    setMounted(true);
    // Always show loading animation on new session
    setIsLoading(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <PortfolioContext.Provider
      value={{
        isLoading,
        setIsLoading,
        cursorType,
        setCursorType,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
