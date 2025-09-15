"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"        // adds class="light" or "dark" on <html>
      defaultTheme="dark"    // use dark theme by default
      enableSystem             // allow system preference
      disableTransitionOnChange // smoother theme switch
    >
      {children}
    </ThemeProvider>
  )
}
