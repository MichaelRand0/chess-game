import Sidebar from '@/modules/sidebar/Sidebar'
import Table from '@/shared/table/Table'

export default function Home() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <Table />
      <Sidebar className='ml-5' />
    </main>
  )
}
