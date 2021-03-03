import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  database: {
    type: 'postgres',
    host: 'ec2-54-166-242-77.compute-1.amazonaws.com',
    port: 5432,
    username: 'gflxofreknmrup',
    password: 'ac0c3b7a19323e438f14484e4f4588254aa397b081f51f4efc42da2004beef3a',
    database: 'd558hv83f62bq3',
    ssl: true
  }
})