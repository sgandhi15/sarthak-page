"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { usePortfolio } from "@/components/providers"

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function SearchBar({ onSearch, placeholder = "Search..." }: SearchBarProps) {
  const { setCursorType } = usePortfolio()
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    // Debounce search to avoid too many updates
    const timer = setTimeout(() => {
      onSearch(query)
    }, 300)

    return () => clearTimeout(timer)
  }, [query, onSearch])

  const handleClear = () => {
    setQuery("")
    onSearch("")
  }

  return (
    <div
      className={`relative w-full max-w-md mx-auto mb-8 transition-all duration-300 ${
        isFocused ? "ring-1 ring-green-400" : ""
      }`}
    >
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full p-3 pl-10 pr-10 bg-[#1A1A1A] border border-[#333] text-gray-200 font-space text-sm focus:outline-none focus:border-green-400"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => {
          setIsFocused(true)
          setCursorType("hover")
        }}
        onBlur={() => {
          setIsFocused(false)
          setCursorType("default")
        }}
      />
      {query && (
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-green-400"
          onClick={handleClear}
          onMouseEnter={() => setCursorType("hover")}
          onMouseLeave={() => setCursorType("default")}
        >
          <X className="w-5 h-5" />
        </button>
      )}
      <div className="absolute -top-2 left-3 bg-[#121212] px-2 z-10">
        <span className="text-[10px] text-gray-500 font-space">
          <span className="code-comment">// fuzzy_search.query</span>
        </span>
      </div>
    </div>
  )
}
