import { z } from 'zod';

const formInt = (constraints: z.ZodNumber) =>
	z.preprocess((value) => {
		if (value === '' || value == null) return undefined;
		const parsed = Number(value);
		return Number.isFinite(parsed) ? parsed : value;
	}, constraints.int());

const checkbox = z.preprocess(
	(value) => value != null && value !== 'false' && value !== '0',
	z.boolean()
);

export const quoteSchema = z.object({
	name: z.string().min(1, 'Name cannot be blank'),
	email: z.email('invalid email'),
	phone: z.string().min(1, 'Phone cannot be blank'),
	numberRooms: formInt(z.number().positive()),
	numberAcres: formInt(z.number().nonnegative()),
	cameras: checkbox,
	accessControl: checkbox,
	multiWAN: checkbox,
	parentalControls: checkbox
});
