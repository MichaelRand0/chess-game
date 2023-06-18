import { HighLightTypes, ICell } from '@/models/Cell'
import React from 'react'
import Piece from '../piece/Piece'

interface Props extends ICell {
  highlightType?: HighLightTypes
}

const Cell = (props: Props) => {
  const {id, index, piece, colors, size, highlightType = null, onClick} = props
  return (
    <div onClick={() => onClick({...props})} className='relative flex items-center justify-center' style={{width: size, height: size, backgroundColor: highlightType === HighLightTypes.SELECTED || highlightType === HighLightTypes.ATTACK ? colors?.hover : colors?.bg}}>
      <div className='z-10'>
        {piece && <Piece {...piece} />}
      </div>
      {/* <div className='text-[red] font-bold'>{id}</div> */}
      {highlightType === HighLightTypes.ATTACK && <div className='absolute' style={{width: size, height: size, borderRadius: size / 2.5, backgroundColor: colors.bg}}></div>}
      {piece ? '' : <div style={{width: size / 3.5, height: size / 3.5, backgroundColor: highlightType === HighLightTypes.MOVE ? colors?.hover : ''}} className='absolute rounded-full'></div>}
      <div style={{color: colors?.index}} className='absolute top-[2px] left-[5px] font-semibold text-sm lg:text-lg'>{index?.top}</div>
      <div style={{color: colors?.index}} className='absolute bottom-[2px] right-[5px] font-semibold text-sm lg:text-lg'>{index?.bottom}</div>
    </div>
  )
}

export default Cell