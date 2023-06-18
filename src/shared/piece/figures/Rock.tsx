import { IFigure } from "@/models/Piece"
import React from "react"

const Rock = (props: IFigure) => {
  const { size, colorTheme } = props
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 71 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 77.6667H70V70H1V77.6667Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.66667 70V59.7778H62.3333V70H8.66667Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.11111 13.7778V1H16.3333V6.11111H29.1111V1H41.8889V6.11111H54.6667V1H64.8889V13.7778"
          fill={colorTheme.fill}
        />
        <path
          d="M6.11111 13.7778V1H16.3333V6.11111H29.1111V1H41.8889V6.11111H54.6667V1H64.8889V13.7778"
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M64.8889 13.7778L57.2222 21.4444H13.7778L6.11111 13.7778"
          fill={colorTheme.fill}
        />
        <path
          d="M64.8889 13.7778L57.2222 21.4444H13.7778L6.11111 13.7778"
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M57.2222 21.4445V53.3889H13.7778V21.4445"
          fill={colorTheme.fill}
        />
        <path
          d="M57.2222 21.4445V53.3889H13.7778V21.4445"
          stroke={colorTheme.stroke}
          stroke-width="1.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M57.2222 53.3889L61.0556 59.7778H9.94444L13.7778 53.3889"
          fill={colorTheme.fill}
        />
        <path
          d="M57.2222 53.3889L61.0556 59.7778H9.94444L13.7778 53.3889"
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.11111 13.7778H64.8889"
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  )
}

export default Rock
