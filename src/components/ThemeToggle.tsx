"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "light" ? (
        <FaMoon size={18} />
      ) : (
        <FaSun size={18} />
      )}
    </button>
  )
}
