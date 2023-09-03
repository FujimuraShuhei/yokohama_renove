import Image from 'next/image'
import { Zen_Kaku_Gothic_New } from 'next/font/google'
import Header from '@/compornent/Header/Header'
import MainVisual from '@/compornent/MainVisual/MainVisual'

const Zenkaku_new400 =Zen_Kaku_Gothic_New({
 weight: '400',
 preload: false,
})

export default function Home() {
  return (
    <main className={Zenkaku_new400.className}>
      <Header />
      <MainVisual />
    </main>
  )
}
