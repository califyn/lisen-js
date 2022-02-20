import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import process from './api/func.js'

import bland from '../public/white.webp'
import micOn from '../public/mic.svg'
import micOff from '../public/mic-off.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lisen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id="toggle">
            <Image src={micOff} id='toggle-img'/>
        </div>       
 
        {
            process()
        }
      </main>
    </div>
  )
}
