import { useConfig } from "@/hooks/config"
import { usePlayer } from "@/hooks/player"
import { Side } from "@/models/Piece"
import React from "react"

interface Props extends React.ComponentProps<'div'> {

}

const Sidebar = (props: Props) => {
  const {className} = props
  const { size } = useConfig()
  const {playingSide} = usePlayer()

  return (
    <div
      className={`bg-dark p-5 rounded-sm flex flex-col items-center ${className}`}
      style={{ height: size.cell * 8, width: '100%', maxWidth: size.cell * 3 }}
    >
      <h2
        className={`text-${playingSide === Side.white ? 'cream' : 'green'} text-2xl border-b-2 border-b-${playingSide === Side.white ? 'cream' : 'green'} text-center`}
      >
        Ход {playingSide === Side.white ? 'белых' : 'черных'}
      </h2>
    </div>
  )
}

export default Sidebar
