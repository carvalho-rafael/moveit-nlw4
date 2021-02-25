import Head from 'next/head'
import ExperienceBar from '../components/ExperienceBar/ExperienceBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move It</title>
      </Head>
      <ExperienceBar></ExperienceBar>
    </div>)
}
