"use client"

import { useState, useEffect } from "react"

interface TerminalProps {
  commands: string[]
  typingSpeed?: number
  className?: string
}

export default function Terminal({ commands, typingSpeed = 50, className = "" }: TerminalProps) {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandIndex, setCommandIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (commandIndex >= commands.length) return

    const interval = setInterval(() => {
      if (charIndex < commands[commandIndex].length) {
        setCurrentCommand((prev) => prev + commands[commandIndex][charIndex])
        setCharIndex((prev) => prev + 1)
      } else {
        setDisplayedCommands((prev) => [...prev, currentCommand])
        setCurrentCommand("")
        setCharIndex(0)
        setCommandIndex((prev) => prev + 1)
      }
    }, typingSpeed)

    return () => clearInterval(interval)
  }, [commandIndex, charIndex, commands, typingSpeed])

  return (
    <div className={`terminal ${className}`}>
      <div className="terminal-header">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-xs text-gray-400">bash</div>
      </div>
      <div className="terminal-body">
        {displayedCommands.map((cmd, index) => (
          <div key={index} className="terminal-prompt">
            {cmd}
          </div>
        ))}
        {currentCommand && (
          <div className="terminal-prompt">
            {currentCommand}
            <span className="terminal-cursor"></span>
          </div>
        )}
      </div>
    </div>
  )
}
