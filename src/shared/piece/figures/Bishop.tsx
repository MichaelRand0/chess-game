import { IFigure } from "@/models/Piece"
import React from "react"

const Bishop = (props: IFigure) => {
  const { size, colorTheme } = props
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 69 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.09091 62.9243C13.9736 60.9549 27.6173 63.7973 34.5 58.8636C41.3827 63.7973 55.0264 60.9549 61.9091 62.9243C61.9091 62.9243 65.2591 64.0206 68 66.9849C66.6194 68.9543 64.65 68.9949 61.9091 68C55.0264 66.0306 41.3827 68.934 34.5 65.9697C27.6173 68.934 13.9736 66.0306 7.09091 68C4.35 68.9949 2.38061 68.9543 1 66.9849C3.74091 64.0206 7.09091 62.9243 7.09091 62.9243Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.2727 54.8031C24.3485 59.8788 44.6515 59.8788 49.7273 54.8031C50.7424 51.7576 49.7273 50.7425 49.7273 50.7425C49.7273 45.6667 44.6515 42.6212 44.6515 42.6212C55.8182 39.5758 56.8333 19.2728 34.5 11.1516C12.1667 19.2728 13.1818 39.5758 24.3485 42.6212C24.3485 42.6212 19.2727 45.6667 19.2727 50.7425C19.2727 50.7425 18.2576 51.7576 19.2727 54.8031Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.5758 6.07576C39.5758 7.42193 39.041 8.71297 38.0891 9.66486C37.1372 10.6168 35.8462 11.1515 34.5 11.1515C33.1538 11.1515 31.8628 10.6168 30.9109 9.66486C29.959 8.71297 29.4242 7.42193 29.4242 6.07576C29.4242 4.72958 29.959 3.43854 30.9109 2.48666C31.8628 1.53477 33.1538 1 34.5 1C35.8462 1 37.1372 1.53477 38.0891 2.48666C39.041 3.43854 39.5758 4.72958 39.5758 6.07576Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          d="M24.3485 42.6212H44.6515M19.2727 50.7424H49.7273M34.5 21.303V31.4545M29.4243 26.3787H39.5758"
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  )
}

export default Bishop
