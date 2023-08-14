import { IFigure } from "@/models/Piece"
import React from "react"

const Queen = (props: IFigure) => {
  const { size, colorTheme } = props
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 88 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5789 47.3158C32.2631 43.8421 61.2105 43.8421 75.1052 47.3158L80.8947 18.3684L63.5263 45L62.8316 12.3474L50.7895 43.8421L43.8421 10.2632L36.8947 43.8421L24.8526 12.3474L24.1579 45L6.78946 18.3684L12.5789 47.3158Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12.5789 47.3158C12.5789 51.9474 16.0526 51.9474 18.3684 56.5789C20.6842 60.0526 20.6842 58.8947 19.5263 64.6842C16.0526 67 17.2105 70.4737 17.2105 70.4737C13.7368 73.9474 17.2105 76.2631 17.2105 76.2631C32.2632 78.5789 55.4211 78.5789 70.4737 76.2631C70.4737 76.2631 73.9474 73.9474 70.4737 70.4737C70.4737 70.4737 71.6316 67 68.1579 64.6842C67 58.8947 67 60.0526 69.3158 56.5789C71.6316 51.9474 75.1053 51.9474 75.1053 47.3158C55.4211 43.8421 32.2632 43.8421 12.5789 47.3158Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M18.3684 56.5789C26.4737 54.2632 61.2105 54.2632 69.3158 56.5789"
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M19.5263 64.6842C33.421 62.3684 54.2631 62.3684 68.1579 64.6842"
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5.63158 19.5263C8.18953 19.5263 10.2632 17.4527 10.2632 14.8948C10.2632 12.3368 8.18953 10.2632 5.63158 10.2632C3.07363 10.2632 1 12.3368 1 14.8948C1 17.4527 3.07363 19.5263 5.63158 19.5263Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M24.1579 12.579C26.7158 12.579 28.7895 10.5053 28.7895 7.94737C28.7895 5.38942 26.7158 3.3158 24.1579 3.3158C21.5999 3.3158 19.5263 5.38942 19.5263 7.94737C19.5263 10.5053 21.5999 12.579 24.1579 12.579Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M43.8421 10.2632C46.4 10.2632 48.4737 8.18953 48.4737 5.63158C48.4737 3.07363 46.4 1 43.8421 1C41.2841 1 39.2105 3.07363 39.2105 5.63158C39.2105 8.18953 41.2841 10.2632 43.8421 10.2632Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M63.5263 12.579C66.0843 12.579 68.1579 10.5053 68.1579 7.94737C68.1579 5.38942 66.0843 3.3158 63.5263 3.3158C60.9684 3.3158 58.8947 5.38942 58.8947 7.94737C58.8947 10.5053 60.9684 12.579 63.5263 12.579Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M82.0526 19.5263C84.6106 19.5263 86.6842 17.4527 86.6842 14.8948C86.6842 12.3368 84.6106 10.2632 82.0526 10.2632C79.4947 10.2632 77.4211 12.3368 77.4211 14.8948C77.4211 17.4527 79.4947 19.5263 82.0526 19.5263Z"
          fill={colorTheme.fill}
          stroke={colorTheme.stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default Queen
