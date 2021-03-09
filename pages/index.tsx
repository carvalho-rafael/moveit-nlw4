import { GetServerSideProps } from 'next'

import Head from 'next/head'

import ChallengeBox from '../components/ChallengeBox'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { ThemeProvider } from '../contexts/ThemeContext'

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
  profileId: number,
  user: User
}

import { getSession } from 'next-auth/client'
import prisma from '../lib/prisma'

export default function Home(props: HomeProps) {

  return (
    <ThemeProvider>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
        profileId={props.profileId}
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
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  /*   const { level = 1, currentExperience = 0, challengesCompleted = 0 } = ctx.req.cookies;
   */
  const session = await getSession({ ctx })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  let profile = await prisma.profile.findFirst({
    where: {
      user: { email: session.user.email },
    }
  })

  if (!profile) {
    const profileData = {
      challengesCompleted: 0,
      currentExperience: 0,
      level: 1
    }
    await prisma.profile.create({
      data: { ...profileData, user: { connect: { email: session.user.email } } }
    })

    profile = { ...profile, ...profileData }
  }

  const { id, level, challengesCompleted, currentExperience } = profile;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      profileId: Number(id),
      user: session.user
    }
  }
}
