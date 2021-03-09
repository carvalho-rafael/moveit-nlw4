import { getSession } from 'next-auth/client'
import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const { level, newChallengesCompleted, newCurrentExperience, profileId } = req.body
  
  const session = await getSession({ req })
  const result = await prisma.profile.update({
    where:{ id: profileId },
    data: {
      level,
      challengesCompleted: newChallengesCompleted,
      currentExperience: newCurrentExperience,
    },
  })
  res.json(result)
}