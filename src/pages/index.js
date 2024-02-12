// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PackingList from './components/props_item'
import Holder from './components/square'

export default function Home() {
  return (
    <div className={styles.main}>
        <Holder />
    </div>
  )
}
