import React from "react"
import ButtonMain from "../buttons/ButtonMain"
import { useModal } from "@/hooks/modal"
import { useGame } from "@/hooks/game"

const Checkmate = () => {
  const {setCurrentModal} = useModal()
  const {restartGame, result} = useGame()
  return (
    <div className="bg-[white] rounded-sm p-5 flex flex-col items-center">
      <h2 className="text-green text-3xl font-bold mb-3 text-center">
        {result.message}
      </h2>
      <h3 className='text-green text-xl font-medium border-b-2 border-b-green mb-6'>{result.reason}</h3>
      <div>
        <ButtonMain onClick={() => restartGame()} className="mr-3">Начать заново</ButtonMain>
        <ButtonMain onClick={() => setCurrentModal(null)} variant="light">Обзор</ButtonMain>
      </div>
    </div>
  )
}

export default Checkmate
