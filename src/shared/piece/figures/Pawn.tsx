import { IFigure } from "@/models/Piece"
import React from "react"

const Pawn = (props: IFigure) => {
  const { size, colorTheme } = props
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 22"
        fill={colorTheme.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_5)">
          <path
            d="M0.559167 19.25H12.8058C12.9713 19.25 13.115 19.3888 13.115 19.5719V20.7062C13.115 20.8893 12.9713 21.0281 12.8058 21.0281H0.559167C0.393686 21.0281 0.25 20.8893 0.25 20.7062V19.5719C0.25 19.3888 0.393686 19.25 0.559167 19.25Z"
            fill={colorTheme.fill}
            stroke={colorTheme.stroke}
            stroke-width="0.5"
          />
          <path
            d="M2.61726 17.9706C2.88763 17.6676 3.24269 17.2006 3.5959 16.5342C4.30397 15.1981 5 13.0691 5 9.86748V9.61748H4.75H3.2925H3.29246C3.25344 9.61748 3.21467 9.60955 3.17835 9.59399C3.14202 9.57842 3.1087 9.55545 3.0805 9.52613C3.05229 9.49679 3.02978 9.4617 3.01456 9.42274C2.99933 9.38378 2.99178 9.34193 2.99247 9.29968L2.9925 9.29968V9.2956V8.16123H2.99253L2.99247 8.15715C2.99178 8.1149 2.99933 8.07305 3.01456 8.03409C3.02978 7.99513 3.05229 7.96004 3.0805 7.9307C3.1087 7.90138 3.14202 7.87841 3.17835 7.86284C3.21467 7.84728 3.25344 7.83935 3.29246 7.83935H3.2925H5.12583L5.23427 7.36409C4.48505 7.00342 3.87711 6.39184 3.51176 5.62897C3.14638 4.86601 3.0459 3.99803 3.22727 3.16838C3.40864 2.33879 3.86071 1.59824 4.50769 1.06816C5.15455 0.538177 5.9578 0.25 6.785 0.25C7.6122 0.25 8.41545 0.538177 9.06231 1.06816C9.70929 1.59824 10.1614 2.33879 10.3427 3.16838C10.5241 3.99803 10.4236 4.86601 10.0582 5.62897C9.69289 6.39184 9.08495 7.00342 8.33573 7.36409L8.44417 7.83935H10.2775H10.2775C10.3166 7.83935 10.3553 7.84728 10.3916 7.86284C10.428 7.87841 10.4613 7.90138 10.4895 7.9307C10.5177 7.96004 10.5402 7.99513 10.5554 8.03409C10.5707 8.07305 10.5782 8.1149 10.5775 8.15715L10.5775 8.15715V8.16123V9.2956H10.5775L10.5775 9.29968C10.5782 9.34193 10.5707 9.38378 10.5554 9.42274C10.5402 9.4617 10.5177 9.49679 10.4895 9.52613C10.4613 9.55545 10.428 9.57842 10.3916 9.59399C10.3553 9.60955 10.3166 9.61748 10.2775 9.61748H10.2775H8.86583H8.61583V9.86748C8.61583 13.0697 9.32128 15.1991 10.0389 16.5354C10.3964 17.201 10.7557 17.6677 11.0295 17.9706H2.61726Z"
            fill={colorTheme.fill}
            stroke={colorTheme.stroke}
            stroke-width="0.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_5">
            <rect width="13.365" height="21.2781" fill={colorTheme.fill} />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Pawn