import { IFigure } from "@/models/Piece"
import React from "react"

const Knight = (props: IFigure) => {
  const { size, colorTheme } = props
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35 7.375C57.3125 9.5 70.0625 24.375 69 69H20.125C20.125 49.875 41.375 55.1875 37.125 24.375"
          fill={colorTheme.fill}
        />
        <path
          d="M35 7.375C57.3125 9.5 70.0625 24.375 69 69H20.125C20.125 49.875 41.375 55.1875 37.125 24.375"
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.25 24.375C40.0575 30.5587 27.4563 40.0362 22.25 43.5C15.875 47.75 16.2575 52.7225 11.625 52C9.41075 50.0025 14.6213 45.54 11.625 45.625C9.50001 45.625 12.0288 48.2387 9.50001 49.875C7.37501 49.875 0.99363 52 1 41.375C1 37.125 13.75 15.875 13.75 15.875C13.75 15.875 17.7663 11.8375 18 8.4375C16.4488 6.32525 16.9375 4.1875 16.9375 2.0625C19.0625 -0.0624999 23.3125 7.375 23.3125 7.375H27.5625C27.5625 7.375 29.22 3.142 32.875 1C35 1 35 7.375 35 7.375"
          fill={colorTheme.fill}
        />
        <path
          d="M39.25 24.375C40.0575 30.5587 27.4563 40.0362 22.25 43.5C15.875 47.75 16.2575 52.7225 11.625 52C9.41075 50.0025 14.6213 45.54 11.625 45.625C9.50001 45.625 12.0288 48.2387 9.50001 49.875C7.37501 49.875 0.99363 52 1 41.375C1 37.125 13.75 15.875 13.75 15.875C13.75 15.875 17.7663 11.8375 18 8.4375C16.4488 6.32525 16.9375 4.1875 16.9375 2.0625C19.0625 -0.0624999 23.3125 7.375 23.3125 7.375H27.5625C27.5625 7.375 29.22 3.142 32.875 1C35 1 35 7.375 35 7.375"
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.4375 40.3125C8.4375 40.5943 8.32556 40.8645 8.1263 41.0638C7.92704 41.2631 7.65679 41.375 7.375 41.375C7.09321 41.375 6.82296 41.2631 6.6237 41.0638C6.42444 40.8645 6.3125 40.5943 6.3125 40.3125C6.3125 40.0307 6.42444 39.7605 6.6237 39.5612C6.82296 39.3619 7.09321 39.25 7.375 39.25C7.65679 39.25 7.92704 39.3619 8.1263 39.5612C8.32556 39.7605 8.4375 40.0307 8.4375 40.3125Z"
          fill={colorTheme.stroke}
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.9826 19.5937C19.5599 20.3258 19.0576 20.972 18.5862 21.39C18.1147 21.8081 17.7128 21.9638 17.4687 21.8229C17.2247 21.682 17.1586 21.256 17.2849 20.6387C17.4112 20.0214 17.7197 19.2633 18.1424 18.5312C18.5651 17.7992 19.0674 17.153 19.5388 16.735C20.0103 16.3169 20.4122 16.1612 20.6562 16.3021C20.9003 16.443 20.9664 16.869 20.8401 17.4863C20.7137 18.1036 20.4053 18.8617 19.9826 19.5937Z"
          fill={colorTheme.stroke}
          stroke={colorTheme.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  )
}

export default Knight
