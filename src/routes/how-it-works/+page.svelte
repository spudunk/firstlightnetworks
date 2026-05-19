<script>
	const steps = [
		{ number: '01', title: 'Consultation', desc: 'Share your home plans, square footage, number of floors, and any special requirements (outdoor areas, smart home integrations, etc.). We review within 24 hours.' },
		{ number: '02', title: 'Custom Design', desc: 'We recommend the ideal kit or custom configuration. You receive a detailed proposal with coverage maps, hardware list, and pricing.' },
		{ number: '03', title: 'Pre-Build Testing', desc: 'Your kit is assembled, configured, and stress-tested for 48 hours in our lab. We verify signal strength and stability before shipping.' },
		{ number: '04', title: 'Installation', desc: 'Kits arrive labeled and ready. Your electrician or low-voltage team follows our simple plug-and-play guide. Average install: 3–5 hours.' },
		{ number: '05', title: 'Support & Handover', desc: 'We provide remote go-live support. Homeowners receive a simple guide and we remain available for any future questions or optimizations.' }
	];
</script>

<svelte:head>
	<title>How It Works • First Light Networks</title>
</svelte:head>

<div class="max-w-5xl mx-auto px-6 py-16">
	<div class="text-center max-w-2xl mx-auto">
		<h1 class="text-6xl font-bold tracking-tighter">Five simple steps.<br>Zero headaches.</h1>
		<p class="mt-4 text-xl text-zinc-400">From consultation to homeowner handover, we handle the complexity so you don't have to.</p>
	</div>

	<!-- Timeline -->
	<div class="mt-16 relative">
		<div class="absolute left-8 top-12 bottom-12 w-px bg-linear-to-b from-blue-600 via-blue-600 to-transparent hidden md:block"></div>
		
		<div class="space-y-12">
			{#each steps as step, i}
				<div class="md:flex gap-10 items-start">
					<div class="shrink-0 w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl font-mono font-bold mb-4 md:mb-0">
						{step.number}
					</div>
					<div class="flex-1">
						<h3 class="text-3xl font-semibold">{step.title}</h3>
						<p class="mt-3 text-lg text-zinc-400 max-w-2xl">{step.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Video / Demo placeholder -->
	<div class="mt-20 bg-zinc-900 rounded-3xl p-12 text-center border border-zinc-800">
		<div class="mx-auto w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mb-6">
			<svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
		</div>
		<h3 class="text-2xl font-semibold">Watch the 90-second install demo</h3>
		<p class="text-zinc-400 mt-2">See exactly how simple it is for your team on site.</p>
		<button onclick={()=>alert('Video player would open here')} class="mt-8 px-10 py-4 border border-zinc-700 hover:bg-zinc-800 rounded-2xl transition">Play Video</button>
	</div>

	<div class="text-center mt-12 text-sm text-zinc-500">Most builders complete their first install in under 4 hours after watching the demo once.</div>
</div>
