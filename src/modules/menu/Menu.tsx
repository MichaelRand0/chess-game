import bots from '@/bot/bots'
import { useBot } from '@/hooks/bot'
import { useConfig } from '@/hooks/config'
import ButtonMain from '@/shared/buttons/ButtonMain'
import { Select, Option } from '@material-tailwind/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type Props = {}

const Menu = (props: Props) => {
  const {size} = useConfig()
  const {bot, setBot} = useBot()
  const router = useRouter()
  return (
    <div className='bg-green rounded-sm px-7 py-5 flex items-center justify-center flex-col' style={{width: '100%', maxWidth: size.cell * 8, height: size.cell * 8}}>
      <ButtonMain onClick={() => router.push('/game')} variant='light'>Играть</ButtonMain>
      <div className='w-[200px] mt-6'>
      <Select value={bot} success color='amber' label="Выбрать бота">
        {Object.entries(bots).map(item => {
          return (
            <Option onClick={() => {
              console.log('Object.entries(item)', item)
              setBot(item[0])
            }} color='amber'>{item[0]}</Option>
          )
        })}
      </Select>
      </div>
    </div>
  )
}

export default Menu