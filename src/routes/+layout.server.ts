import { env } from '$env/dynamic/private';
import { getGoogleRating } from '$lib/server';
import type { LayoutServerLoad } from './$types';

const RATING_KEY = 'google-rating';
const FRESH_MS = 30 * 60 * 1000;

type StoredRating = {
	rating: number | null;
	reviewCount: number | null;
	fetchedAt: number;
};

export const load: LayoutServerLoad = ({ platform }) => {
	const kv = platform?.env.KV;
	const apiKey = env.GOOGLE_MAPS_PLATFORM_KEY ?? '';

	return {
		googleRating: (async () => {
			const cached = kv ? await kv.get<StoredRating>(RATING_KEY, 'json') : null;
			if (cached && Date.now() - cached.fetchedAt < FRESH_MS) {
        // console.log("reviews from cache")
				return { rating: cached.rating, reviewCount: cached.reviewCount };
			}
      // console.log("reviews from API")
			const fresh = await getGoogleRating(apiKey);
			if (kv && fresh.rating != null) {
				await kv.put(RATING_KEY, JSON.stringify({ ...fresh, fetchedAt: Date.now() }));
				return fresh;
			}

			if (cached) return { rating: cached.rating, reviewCount: cached.reviewCount };
			return fresh;
		})()
	};
};
