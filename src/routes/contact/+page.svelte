<script lang="ts">
	let formData = $state({
		name: '',
		email: '',
		phone: '',
		sqft: '',
		floors: '',
		outdoor: '',
		details: ''
	});

	let submitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		// In real app this would post to server action
		submitted = true;
		setTimeout(() => {
			alert('Thanks! We\'ll contact you within 24 hours with your custom quote.');
			submitted = false;
			formData = { name: '', email: '', phone: '', sqft: '', floors: '', outdoor: '', details: '' };
		}, 800);
	}
</script>

<svelte:head>
	<title>Contact & Get Quote • First Light Networks</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-16">
	<div class="grid md:grid-cols-5 gap-12">
		<div class="md:col-span-3">
			<h1 class="text-6xl font-bold tracking-tighter">Let's build your perfect kit.</h1>
			<p class="mt-6 text-xl text-zinc-400">Tell us about your project and we'll design a custom solution with pricing within 24 hours.</p>

			<div class="mt-10 space-y-4 text-sm">
				<div class="flex items-center gap-3"><span class="text-blue-500">📞</span> (555) 123-4567</div>
				<div class="flex items-center gap-3"><span class="text-blue-500">✉️</span> hello@firstlightnetworks.com</div>
				<div class="flex items-center gap-3"><span class="text-blue-500">📍</span> Serving builders nationwide</div>
			</div>

			<div class="mt-8 text-sm text-zinc-500">Prefer a call? <a href="#" class="text-blue-400 hover:underline">Schedule a 15-min discovery call →</a></div>
		</div>

		<div class="md:col-span-2">
			{#if !submitted}
				<form onsubmit={handleSubmit} class="space-y-5 bg-zinc-900 p-8 rounded-3xl">
					<div class="grid grid-cols-1 gap-5">
						<input bind:value={formData.name} type="text" placeholder="Your name" class="bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-blue-600" required />
						<input bind:value={formData.email} type="email" placeholder="Work email" class="bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-blue-600" required />
						<input bind:value={formData.phone} type="tel" placeholder="Phone number" class="bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-blue-600" />
					</div>

					<div class="grid grid-cols-2 gap-5">
						<input bind:value={formData.sqft} type="text" placeholder="Square footage" class="bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-blue-600" />
						<input bind:value={formData.floors} type="text" placeholder="# of floors" class="bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-blue-600" />
					</div>

					<input bind:value={formData.outdoor} type="text" placeholder="Outdoor areas (pool, patio, dock, acres)" class="bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-blue-600 w-full" />

					<textarea bind:value={formData.details} placeholder="Any special requirements or notes?" rows="4" class="bg-zinc-950 border border-zinc-800 rounded-3xl px-6 py-4 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-blue-600 w-full resize-y"></textarea>

					<button type="submit" class="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-semibold transition">
						Request Custom Quote
					</button>
					<div class="text-center text-xs text-zinc-500">Most quotes delivered same day</div>
				</form>
			{:else}
				<div class="bg-zinc-900 p-12 rounded-3xl text-center">Submitting...</div>
			{/if}
		</div>
	</div>
</div>
