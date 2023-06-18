import { IFigure } from "@/models/Piece"
import React from "react"

const Pawn = (props: IFigure) => {
  const { size, colorTheme } = props
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 62 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31 1C25.2348 1 20.5652 5.63639 20.5652 11.3607C20.5652 13.6659 21.3217 15.7898 22.6 17.5252C17.513 20.4262 14.0435 25.8397 14.0435 32.082C14.0435 37.34 16.4957 42.0282 20.3304 45.1105C12.5043 47.8561 1 59.4859 1 80H61C61 59.4859 49.4957 47.8561 41.6696 45.1105C45.5043 42.0282 47.9565 37.34 47.9565 32.082C47.9565 25.8397 44.487 20.4262 39.4 17.5252C40.6783 15.7898 41.4348 13.6659 41.4348 11.3607C41.4348 5.63639 36.7652 1 31 1Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  )
}

export default Pawn
