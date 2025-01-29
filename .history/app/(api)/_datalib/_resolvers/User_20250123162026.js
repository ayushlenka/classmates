import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { user as _user } from '../_datalib/_prisma/client'; // Adjust path as needed

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const Mutation = {
  async signUp(_, { email, password }) {
    // Check if the user already exists
    const existingUser = await _user.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error('User already exists.');
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Create the user
    const user = await _user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Generate a JWT token
    const token = sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

    return { token, user };
  },

  async signIn(_, { email, password }) {
    // Find the user by email
    const user = await _user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('Invalid email or password.');
    }

    // Compare passwords
    const valid = await compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid email or password.');
    }

    // Generate a JWT token
    const token = sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

    return { token, user };
  },
};
