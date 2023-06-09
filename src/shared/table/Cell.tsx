import { ICell } from '@/models/Cell'
import React from 'react'

const Cell = (props: ICell) => {
  const {id, index, piece, colors, size} = props
  return (
    <div className='relative' style={{width: size, height: size, backgroundColor: colors.bg}}>
      <div style={{color: colors?.index}} className='absolute top-[2px] left-[5px] font-semibold text-sm lg:text-lg'>{index?.top}</div>
      <div style={{color: colors?.index}} className='absolute bottom-[2px] right-[5px] font-semibold text-sm lg:text-lg'>{index?.bottom}</div>
    </div>
  )
}

export default Cell