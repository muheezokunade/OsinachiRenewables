import { pgTable, text, serial, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
});
export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  service: text('service'),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});
export const insertContactSubmissionSchema = createInsertSchema(
  contactSubmissions
).pick({
  name: true,
  email: true,
  phone: true,
  service: true,
  message: true,
});
