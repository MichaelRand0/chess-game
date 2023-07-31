import Sidebar from '@/modules/sidebar/Sidebar'
import Table from '@/shared/table/Table'
import React from 'react'

type Props = {}

const Game = (props: Props) => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Table />
      <Sidebar className='ml-5' />
    </div>
  )
}

export default Game