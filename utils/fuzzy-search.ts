// Fuzzy search implementation
export function fuzzySearch(items: any[], searchTerm: string, keys: string[]): any[] {
  if (!searchTerm || searchTerm.trim() === "") {
    return items
  }

  const term = searchTerm.toLowerCase().trim()

  return items.filter((item) => {
    return keys.some((key) => {
      const value = getNestedProperty(item, key)
      if (typeof value === "string") {
        return fuzzyMatch(value.toLowerCase(), term)
      }
      if (Array.isArray(value)) {
        return value.some((v) => typeof v === "string" && fuzzyMatch(v.toLowerCase(), term))
      }
      return false
    })
  })
}

// Helper function to get nested properties like "user.profile.name"
function getNestedProperty(obj: any, key: string): any {
  const keys = key.split(".")
  let value = obj

  for (const k of keys) {
    if (value === null || value === undefined) return undefined
    value = value[k]
  }

  return value
}

// Simple fuzzy matching algorithm
function fuzzyMatch(str: string, pattern: string): boolean {
  let patternIdx = 0
  let strIdx = 0

  while (patternIdx < pattern.length && strIdx < str.length) {
    if (pattern[patternIdx] === str[strIdx]) {
      patternIdx++
    }
    strIdx++
  }

  return patternIdx === pattern.length
}
