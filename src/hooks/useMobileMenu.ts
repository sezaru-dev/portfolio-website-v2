import { useState, useEffect, useCallback, useRef } from "react"

export function useMobileMenu(breakpoint = 768) {
  const [isOpen, setIsOpen] = useState(false)
  const isOpenRef = useRef(isOpen)

  // Keep ref in sync with state
  useEffect(() => {
    isOpenRef.current = isOpen
  }, [isOpen])

  const toggleMenu = useCallback(() => {
    const next = !isOpenRef.current
    setIsOpen(next)
    document.body.classList.toggle("overflow-hidden", next)
  }, [])

  const closeMenuByNavlist = useCallback(() => {
    if (isOpenRef.current) {
      setIsOpen(false)
      document.body.classList.remove("overflow-hidden")
    }
  }, [])

  // Auto-close menu if screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= breakpoint && isOpenRef.current) {
        setIsOpen(false)
        document.body.classList.remove("overflow-hidden")
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      document.body.classList.remove("overflow-hidden")
    }
  }, [breakpoint])

  return { isOpen, toggleMenu, closeMenuByNavlist }
}
