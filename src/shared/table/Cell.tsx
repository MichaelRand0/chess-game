import { ICell } from '@/models/Cell'
import React from 'react'

const Cell = (props: ICell) => {
  const {size, color, upIndex, downIndex} = props
  return (
    <div className='relative' style={{width: size, height: size, backgroundColor: color.bg}}>
      <div style={{color: color?.index}} className='absolute top-[2px] left-[5px] font-semibold text-lg'>{upIndex}</div>
      <div style={{color: color?.index}} className='absolute bottom-[2px] right-[5px] font-semibold text-lg'>{downIndex}</div>
    </div>
  )
}

export default Cell