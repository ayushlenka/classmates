// eslint-disable-next-line @typescript-eslint/no-var-requires
const prisma = require('./(api)/_datalib/_prisma/client'); // Adjust the path as necessary

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Test User',
    },
  });

  console.log('User created:', user);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
