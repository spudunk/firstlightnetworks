import { superValidate, message } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { quoteSchema } from '$lib/schemas';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	const form = await superValidate(zod4(quoteSchema));
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod4(quoteSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		// TODO: send email, save to DB, etc.
		console.log('Quote submitted:', form.data);

		return message(form, 'Your quote request has been received. We\'ll be in touch within 24 hours.');
	}
};