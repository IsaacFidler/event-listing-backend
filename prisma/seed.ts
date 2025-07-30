import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      email: 'zac.fidler2@gmail.com',
      firstName: 'Isaac',
      lastName: 'Fidler',
      bio: 'i love dubstep',
      username: 'IsaacFidler',
    },
  ];

  for (const u of users) {
    await prisma.user.create({ data: u });
  }

  await prisma.location.create({
    data: { addressLine1: '16 Love Walk', city: 'London', postcode: 'SE58AD' },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
