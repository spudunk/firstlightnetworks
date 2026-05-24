<script lang="ts">
  import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
	import { ls, unselectKit } from '$lib/localStorage.svelte.js';

	let selectedKit = $derived(data.kits[ls.selectedKit])
</script>

<svelte:head>
	<title>Checkout • First Light Networks</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-24">
	<div class="text-center mb-12">
		<div class="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-400 text-xs tracking-[3px] rounded-full mb-4">READY TO GO</div>
		<h1 class="text-6xl font-bold tracking-tighter">Your Kit Selection</h1>
		<p class="mt-4 text-xl text-zinc-400">Review your pre-configured kit before we prepare the quote and delivery.</p>
	</div>

	{#if ls.selectedKit}
		<div class="bg-zinc-900 rounded-3xl overflow-hidden border border-emerald-500/30">
			<div class="md:flex">
				<!-- <img src={ls.selectedKit.image} alt={ls.selectedKit.title} class="md:w-1/2 h-80 object-cover" /> -->
				<div class="p-12 flex-1">
					<div class="flex justify-between items-start">
						<div>
							<h2 class="text-4xl font-semibold tracking-tight">{selectedKit.title}</h2>
							<p class="text-lg text-zinc-400 mt-1">{selectedKit.subtitle}</p>
						</div>
						<div class="text-right">
							<div class="text-5xl font-semibold tabular-nums tracking-tighter text-emerald-400">{selectedKit.price}</div>
						</div>
					</div>

					{#if selectedKit.features}
						<ul class="mt-10 space-y-3 text-sm">
							{#each selectedKit.features as feature}
								<li class="flex gap-3"><span class="text-emerald-400">✓</span> {feature}</li>
							{/each}
						</ul>
					{/if}

					<div class="mt-10 flex flex-col sm:flex-row gap-4">
						<a href="/contact" class="flex-1 text-center bg-emerald-600 hover:bg-emerald-500 py-4 rounded-2xl font-semibold transition">Proceed to Quote &amp; Install</a>
						<button onclick={unselectKit} class="flex-1 border border-zinc-700 hover:bg-zinc-800 py-4 rounded-2xl transition">Change Selection</button>
					</div>
				</div>
			</div>
		</div>

		<div class="text-center mt-8 text-sm text-zinc-500">
			Your selection is saved. You can return here anytime.
		</div>
	{:else}
		<div class="text-center py-20 bg-zinc-900 rounded-3xl">
			<p class="text-xl text-zinc-400">No kit selected yet.</p>
			<a href="/solutions" class="mt-6 inline-block text-emerald-400 hover:underline">Browse kits →</a>
		</div>
	{/if}
</div>
