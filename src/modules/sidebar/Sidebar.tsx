import { useConfig } from "@/hooks/config"
import { useGame } from "@/hooks/game"
import { usePlayer } from "@/hooks/player"
import { Side } from "@/models/Piece"
import ButtonMain from "@/shared/buttons/ButtonMain"
import React from "react"

interface Props extends React.ComponentProps<"div"> {}

const Sidebar = (props: Props) => {
  const { className } = props
  const { size } = useConfig()
  const { playingSide } = usePlayer()
  const { stopGame } = useGame()

  const surrender = () => {
    stopGame({
      type: "Lose",
      reason: "surrender",
    })
  }

  return (
    <div
      className={`bg-dark p-5 rounded-sm flex flex-col justify-between items-center ${className}`}
      style={{ height: size.cell * 8, width: "100%", maxWidth: size.cell * 3 }}
    >
      <div>
        <h2
          className={`text-${
            playingSide === Side.white ? "cream" : "green"
          } text-2xl border-b-2 border-b-${
            playingSide === Side.white ? "cream" : "green"
          } text-center`}
        >
          {playingSide === Side.white
            ? "Ход белых"
            : playingSide === Side.black
            ? "Ход черных"
            : "Игра окончена"}
        </h2>
      </div>
      <div className="mt-10">
        <ButtonMain onClick={surrender}>Сдаться</ButtonMain>
      </div>
    </div>
  )
}

export default Sidebar
