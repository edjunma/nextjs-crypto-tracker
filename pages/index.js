import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar type='text' placeholder='Search'/>
    </div>
  )
}
