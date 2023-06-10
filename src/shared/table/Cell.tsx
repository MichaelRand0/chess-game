import { ICell } from '@/models/Cell'
import React from 'react'
import { Side } from '@/models/Piece'
import Piece from '../piece/Piece'

const Cell = (props: ICell) => {
  const {id, index, piece, colors, size} = props
  return (
    <div className='relative flex items-center justify-center' style={{width: size.cellSize, height: size.cellSize, backgroundColor: colors.bg}}>
      <Piece side={Side.white} name={piece} size={size.pieceSize} />
      <div style={{color: colors?.index}} className='absolute top-[2px] left-[5px] font-semibold text-sm lg:text-lg'>{index?.top}</div>
      <div style={{color: colors?.index}} className='absolute bottom-[2px] right-[5px] font-semibold text-sm lg:text-lg'>{index?.bottom}</div>
    </div>
  )
}

export default Cell