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
			// Insert to D1
			await getDb(platform.env.DB).insert(leads).values(parsed.data);

			// Send email
			if (platform.env.EMAIL) {
				platform.ctx.waitUntil(
					platform.env.EMAIL.send({
						from: {
							email: "quotes@notify.firstlightnetworks.com",
							name: "First Light Networks"
						},
						to: "chris@firstlightnetworks.com",
						replyTo: parsed.data.email,
						subject: `New quote request from ${parsed.data.name}`,
						text: [
							parsed.data.name,
							parsed.data.email,
							parsed.data.phone,
							`${parsed.data.numberRooms} rooms · ${parsed.data.numberAcres} acres`,
							`Cameras: ${parsed.data.cameras}`,
							`Access Controls: ${parsed.data.accessControl}`,
							`Multi WAN: ${parsed.data.multiWAN}`,
							`Parental Controls: ${parsed.data.parentalControls}`
						].join("\n")
					})
				);
			}
			return {message: `Your request has been received. We'll be in touch within a few days`}
		} catch (error) {
			return fail(500, {
				error: error instanceof Error ? error.message : String(error)
			});
		}
	}
};
