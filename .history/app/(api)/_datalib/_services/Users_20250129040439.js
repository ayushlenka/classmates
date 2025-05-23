import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { user as _user } from '../_prisma/client';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

async function signUp(email, password) {
  if (!email.endsWith('@ucdavis.edu')) {
    throw new Error('Please use your UC Davis email address.');
  }

  const hashedPassword = await hash(password, 10);
  const user = await _user.create({
    data: { email, password: hashedPassword },
  });

  const token = sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

  return { token, user };
}

async function signIn(email, password) {
  const user = await _user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Invalid email or password.');
  }

  const valid = await compare(password, user.password);
  if (!valid) {
    throw new Error('Invalid email or password.');
  }

  const token = sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

  return { token, user };
}

// ✅ Now adding the default export
const Users = { signUp, signIn };
export default Users;
