import { config } from 'dotenv';
config();

export const mongoString = process.env.DATABASE_URL;