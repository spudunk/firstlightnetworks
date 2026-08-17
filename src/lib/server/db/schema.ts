import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const leads = sqliteTable('leads', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
	name: text('name').notNull(),
	email: text('email').notNull(),
	phone: text('phone').notNull(),
	numberRooms: integer('numberRooms', { mode: 'number' }).notNull().default(4),
	numberAcres: integer('numberAcres', { mode: 'number' }).notNull().default(5),
	cameras: integer('cameras', { mode: 'boolean' }).notNull().default(false),
	accessControl: integer('accessControl', { mode: 'boolean' }).notNull().default(false),
	multiWAN: integer('multiWAN', { mode: 'boolean' }).notNull().default(false),
	parentalControls: integer('parentalControls', { mode: 'boolean' }).notNull().default(false),
});
