import 'unplugin-icons/types/svelte'
import type { KVNamespace } from '@cloudflare/workers-types';
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace Cloudflare {
		interface Env {
			KV: KVNamespace;
		}
	}

	namespace App {
		interface Platform {
			env: Cloudflare.Env;
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties
		}

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
