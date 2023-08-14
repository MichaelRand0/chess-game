import { IFigure } from "@/models/Piece"
import React from "react"

const King = (props: IFigure) => {
  const { size, colorTheme } = props
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 14.2174V1M34.1308 5.69533H45.8692"
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40 45.6057C40 45.6057 50.5645 27.9982 47.043 20.9552C47.043 20.9552 44.6953 15.086 40 15.086C35.3047 15.086 32.957 20.9552 32.957 20.9552C29.4355 27.9982 40 45.6057 40 45.6057Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5233 73.7776C29.4355 81.9945 50.5645 81.9945 63.4767 73.7776V57.344C63.4767 57.344 84.6056 46.7795 77.5626 32.6935C68.172 17.4337 45.8692 24.4767 40 42.0841C34.1308 24.4767 11.828 17.4337 2.43735 32.6935C-4.60565 46.7795 16.5233 57.344 16.5233 57.344V73.7776Z"
          fill={colorTheme.fill}
        />
        <path
          d="M40 42.0841C45.8692 24.4767 68.172 17.4337 77.5626 32.6935C84.6056 46.7795 63.4767 57.344 63.4767 57.344V73.7776C50.5645 81.9945 29.4355 81.9945 16.5233 73.7776V57.344C16.5233 57.344 -4.60565 46.7795 2.43735 32.6935C11.828 17.4337 34.1308 24.4767 40 42.0841ZM40 42.0841V50.301"
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5233 57.344C29.4355 50.301 50.5645 50.301 63.4767 57.344M16.5233 65.5608C29.4355 58.5178 50.5645 58.5178 63.4767 65.5608M16.5233 73.7776C29.4355 66.7346 50.5645 66.7346 63.4767 73.7776"
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default King
