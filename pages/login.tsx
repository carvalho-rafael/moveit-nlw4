import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head'
import styles from '../styles/Login.module.scss'

import Router from 'next/router'

export default function Login() {
  const [session] = useSession()

  function handleSignIn(e) {
    signIn('github', {
      callbackUrl: 'http://localhost:3000'
    })
  }

  return <div className={styles.loginContainer}>
    <Head>
      <title>move.it - Login</title>
    </Head>
    <div className={styles.leftPanel}>
      <img src="logo-full.svg" alt="Logo" />
    </div>
    <div className={styles.formPanel}>
      <div className={styles.formContainer}>
        {!session && <>
          <p>Signin with Github</p>
          <button onClick={handleSignIn}>
            Sign in
          <img src="/icons/github.svg" alt="github" />
          </button>
        </>}
        {session && <>
          <p>Signed in as <strong>{session.user.email}</strong></p>
          <button onClick={() => signOut()}>Sign out</button>
          <button onClick={() => Router.push('/')}>Go Home</button>
        </>}
      </div>
    </div>
  </div>
}
