import Image from 'next/image'
import { Inter } from 'next/font/google'
import King from '@/shared/pieces/King'
import { Side } from '@/models/Piece'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <King side={Side.white} />
    </div>
  )
}
