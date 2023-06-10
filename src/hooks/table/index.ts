import { useEffect, useState } from "react"

export const useTable = () => {
  const [cellSize, setCellSize] = useState(0)

  useEffect(() => {
    const width = window.screen.width
    setCellSize((width * 0.45) * 0.125)
  }, [])

  return {
    cellSize,
  }
}
