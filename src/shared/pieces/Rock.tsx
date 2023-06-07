import { useTheme } from "@/hooks/theme"
import { IPiece, Side } from "@/models/Piece"
import React from "react"

const Rock = (props: IPiece) => {
  const { side } = props
  const { theme } = useTheme()
  const colorTheme = side === Side.white ? theme.white : theme.black
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="45"
        height="45"
      >
        <g
          opacity={1}
          fill={colorTheme.fill}
          fillOpacity={1}
          fillRule="evenodd"
          stroke={colorTheme.stroke}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={4}
          strokeDasharray={"none"}
          strokeOpacity={1}
          transform="translate(0,0.3)"
        >
          <path
            strokeLinecap="butt"
            d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
          />
          <path
            d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
            strokeLinecap="butt"
          />
          <path
            d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
            strokeLinecap="butt"
          />
          <path d="M 34,14 L 31,17 L 14,17 L 11,14" />
          <path
            strokeLinecap="butt"
            strokeLinejoin="miter"
            d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
          />
          <path d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
          <path
            fill="none"
            stroke={colorTheme.stroke}
            strokeLinejoin="miter"
            d="M 11,14 L 34,14"
          />
        </g>
      </svg>
    </div>
  )
}

export default Rock
