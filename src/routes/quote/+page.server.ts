import { fail } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { getDb } from '$lib/server/db/index';
import { leads } from '$lib/server/db/schema';
import { quoteSchema } from '$lib/schemas';

export const actions = {
	submit: async ({ request, platform }) => {
		const parsed = quoteSchema.safeParse(Object.fromEntries(await request.formData()));
		if (!parsed.success) {
			return fail(400, {
				error: parsed.error.issues[0]?.message ?? 'Invalid form data'
			});
		}

		if (dev) {
			console.log(parsed.data);
		}

		if (!platform?.env.DB) {
			return fail(500, { error: 'Database unavailable in environment' });
		}

		try {
			await getDb(platform.env.DB).insert(leads).values(parsed.data);
			return {message: `Your request has been received. We'll be in touch within a few days`}
		} catch (error) {
			return fail(500, {
				error: error instanceof Error ? error.message : String(error)
			});
		}
	}
};
