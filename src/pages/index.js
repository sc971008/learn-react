// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './qcomps/profile_mistake'
import TodoList from './qcomps/todos'

export default function Home() {
  return (
    <div className={styles.main}>
        <TodoList />
    </div>
  )
}
