import { useEffect, useState } from "react"

export const useTable = () => {
  const [tableSize, setTableSize] = useState(5120)
  const [cellSize, setCellSize] = useState(10)
  useEffect(() => {
    setCellSize(tableSize / 64)
  }, [tableSize])

  return {
    tableSize,
    setTableSize,
    cellSize,
  }
}