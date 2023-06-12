import { ICell } from '@/models/Cell'
import React from 'react'
import { Side } from '@/models/Piece'
import Piece from '../piece/Piece'

const Cell = (props: ICell) => {
  const {id, index, piece, colors, size} = props
  return (
    <div className='relative flex items-center justify-center' style={{width: size, height: size, backgroundColor: colors.bg}}>
      {piece && <Piece side={piece.side} name={piece.name} size={piece.size} />}
      {/* <div className='text-[red] font-bold'>{id}</div> */}
      <div style={{color: colors?.index}} className='absolute top-[2px] left-[5px] font-semibold text-sm lg:text-lg'>{index?.top}</div>
      <div style={{color: colors?.index}} className='absolute bottom-[2px] right-[5px] font-semibold text-sm lg:text-lg'>{index?.bottom}</div>
    </div>
  )
}

export default Cell