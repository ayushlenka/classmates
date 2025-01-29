import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { user as _user } from '../_prisma/client';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function signUp(email, password) {
  // ✅ Named export
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

export async function signIn(email, password) {
  // ✅ Named export
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
