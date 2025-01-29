import { user as _user, $disconnect } from './_datalib/_prisma/client'; // Adjust the path to your Prisma client

async function main() {
  const user = await _user.create({
    data: {
      name: 'Test User',
    },
  });

  console.log('User created:', user);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await $disconnect();
  });
