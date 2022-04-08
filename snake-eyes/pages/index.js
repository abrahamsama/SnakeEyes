import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Snake Eyes Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <img
          alt="Background"
          src="/homepage.png"
          width="100%"
          height="100%"
          quality={100}
        />
      </div>
  </div>
  )
}
