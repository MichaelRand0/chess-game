import { ICell } from '@/models/Cell'
import React from 'react'

const Cell = (props: ICell) => {
  const {size, color} = props
  return (
    <div style={{width: size, height: size, backgroundColor: color}}></div>
  )
}

export default Cell