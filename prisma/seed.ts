import { PrismaClient, type StackType } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {}

seed().then(() => {
  console.log('Database seeded!')
})
