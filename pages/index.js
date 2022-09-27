import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Head>
        <title>Elektra</title>
        <meta name="description" content="Elektra app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
