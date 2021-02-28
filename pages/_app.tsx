import { ChallengesProvider } from '../contexts/ChallengesContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
