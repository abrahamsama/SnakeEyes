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
    <div className={styles.bgWrap}>
      <Image
        alt="Background"
        src="/homepage.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
  )
}
