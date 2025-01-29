import { user as _user, $disconnect } from './_prisma/client'; // Adjust path as needed

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
