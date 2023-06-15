import { IFigure } from "@/models/Piece"
import React from "react"

const Rock = (props: IFigure) => {
  const { size, colorTheme } = props
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 30 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4_12)">
          <path
            d="M28.0818 3.12244V0.25H25.6928H23.3038V1.39453V2.78906V3.03906H23.0538H20.6472H18.2407H17.9907V2.78906V1.39453V0.25H15H12.0093V1.39453V2.78906V3.03906H11.7593H9.35278H6.94622H6.69622V2.78906V1.39453V0.25H4.3072H1.91819L1.91819 3.12244L1.91819 3.12266L1.92081 6.12335L4.0885 7.7574L6.35559 9.46638L6.45511 9.5414V9.66602V16.5702V16.5703L6.45784 23.4745L6.45788 23.5737L6.38995 23.6459L4.44841 25.7102L4.44829 25.7103L2.57712 27.7027L2.57452 29.5914L2.57452 29.5918L2.57452 31.582V31.832H2.32452H1.16226H0.25V33.291V34.75H15H29.75V33.291V31.832H28.8377H27.6755H27.4255V31.582V29.6054V29.6051L27.4229 27.73L25.5517 25.7377L25.5516 25.7376L23.6101 23.6732L23.5421 23.601L23.5422 23.5018L23.5476 16.5865V16.5864L23.5558 9.66846L23.556 9.5442L23.6551 9.46929L25.9166 7.76043L25.9167 7.76031L28.0792 6.12365L28.0818 3.12266V3.12244Z"
            fill={colorTheme.fill}
            stroke={colorTheme.stroke}
            strokeWidth="1"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_12">
            <rect width="30" height="35" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Rock
