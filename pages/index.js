import Image from 'next/image'
import { Inter } from 'next/font/google'
import Left from '@/components/Left'
import Right from '@/components/Right'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col h-full	overflow-hidden '>
      <div>
        <Navbar />
      </div>
      <div className='flex h-full p-5 gap-5'>
        <Left />
        <Right />
      </div>
    </div>
  )
}
