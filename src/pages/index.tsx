import King from '@/shared/pieces/King'
import { Side } from '@/models/Piece'
import Queen from '@/shared/pieces/Queen'
import Rock from '@/shared/pieces/Rock'
import Bishop from '@/shared/pieces/Bishop'
import Knight from '@/shared/pieces/Knight'
import Pawn from '@/shared/pieces/Pawn'

export default function Home() {
  return (
    <div>
      <King side={Side.black} />
      <Queen side={Side.black} />
      <Rock side={Side.black} />
      <Bishop side={Side.black} />
      <Knight side={Side.black} />
      <Pawn side={Side.black} />
    </div>
  )
}
