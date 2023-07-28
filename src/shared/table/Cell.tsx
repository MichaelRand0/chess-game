import { HighLightTypes, ICell } from '@/models/Cell'
import React from 'react'
import Piece from '../piece/Piece'
import { Size } from '@/models/Config'

interface Props extends ICell {
  highlightType?: HighLightTypes
  onClick: Function
  size: Size
}

const Cell = (props: Props) => {
  const {index, piece, colors, size, highlightType = null, onClick} = props
  const {cell, figure} = size
  return (
    <div onClick={() => onClick({...props})} className='relative flex items-center justify-center cursor-pointer' style={{width: cell, height: cell, backgroundColor: highlightType === HighLightTypes.SELECTED || highlightType === HighLightTypes.ATTACK ? colors?.hover : highlightType === HighLightTypes.LAST_MOVE ? colors?.lastMove : colors?.bg}}>
      <div className='z-10'>
        {piece && <Piece {...piece} size={figure} />}
      </div>
      {/* <div className='text-[red] font-bold'>{id}</div> */}
      {highlightType === HighLightTypes.ATTACK && <div className='absolute' style={{width: cell, height: cell, borderRadius: cell / 2.5, backgroundColor: colors.bg}}></div>}
      {piece ? '' : <div style={{width: cell / 3.5, height: cell / 3.5, backgroundColor: highlightType === HighLightTypes.MOVE ? colors?.hover : ''}} className='absolute rounded-full'></div>}
      <div style={{color: colors?.index}} className='absolute top-[2px] left-[5px] font-semibold text-sm lg:text-lg'>{index?.top}</div>
      <div style={{color: colors?.index}} className='absolute bottom-[2px] right-[5px] font-semibold text-sm lg:text-lg'>{index?.bottom}</div>
    </div>
  )
}

export default Cell