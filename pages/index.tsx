import { GetServerSideProps } from 'next'

import Head from 'next/head'

import ChallengeBox from '../components/ChallengeBox'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import styles from '../styles/Home.module.scss'

interface User {
  email: string,
  name: string,
  image: string
}

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  user: User
}

import { getSession } from 'next-auth/client'

export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile user={props.user} />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level = 3, currentExperience = 0, challengesCompleted = 0 } = ctx.req.cookies;
  const session = await getSession({ ctx })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      user: session.user
    }
  }
}
