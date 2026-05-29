<script>
	const resources = [
		{ title: 'WiFi Spec Sheet', desc: 'Technical specs, coverage patterns, power requirements', type: 'PDF' },
		{ title: 'CAD Details Package', desc: 'Rough-in diagrams for architects and electricians', type: 'ZIP' },
		{ title: 'Proposal Language', desc: 'Ready-to-use copy for your client proposals', type: 'DOC' },
		{ title: 'Co-Marketing Assets', desc: 'Branded photos, social posts, and brochure templates', type: 'ZIP' }
	];

	const benefits = [
		{ icon: '⏱️', title: 'Win More Bids', text: 'Offering premium whole-home WiFi as a standard upgrade sets you apart from competitors still using consumer routers.' },
		{ icon: '💰', title: 'Save Time & Money', text: 'Pre-configured kits eliminate hours of on-site configuration and expensive troubleshooting callbacks.' },
		{ icon: '🤝', title: 'Volume Pricing', text: 'Builders ordering 5+ kits per year receive preferred pricing and dedicated account support.' }
	];
</script>

<svelte:head>
	<title>Builder WiFi Solutions & Resources • First Light Networks</title>
	<meta name="description" content="Partner with First Light Networks for premium WiFi kits built for builders. Access specs, CAD details, volume pricing, and tools to win more custom home projects." />
</svelte:head>

<main class="max-w-7xl mx-auto px-6 py-16">
	<div class="max-w-3xl">
		<div class="uppercase text-blue-500 tracking-[3px] text-sm">PARTNER WITH US</div>
		<h1 class="text-6xl font-bold tracking-tighter mt-3">WiFi that helps you win more projects.</h1>
		<p class="mt-6 text-xl text-zinc-400">Turn a common pain point into a premium feature that delights homeowners and simplifies your build process.</p>
	</div>

	<!-- Benefits -->
	<div class="mt-16 grid md:grid-cols-3 gap-6">
		{#each benefits as b}
			<div class="bg-zinc-900 p-9 rounded-3xl">
				<div class="text-5xl mb-6">{b.icon}</div>
				<h3 class="font-semibold text-2xl">{b.title}</h3>
				<p class="mt-4 text-zinc-400">{b.text}</p>
			</div>
		{/each}
	</div>

	<!-- Partnership Program -->
	<div class="mt-16 bg-zinc-900 border border-blue-900/50 rounded-3xl p-12">
		<h2 class="text-4xl font-semibold">Builder Partnership Program</h2>
		<div class="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-10 text-sm">
			<div>
				<div class="font-semibold mb-1">Volume Discounts</div>
				<p class="text-zinc-400">5–9 kits/year: 8% off • 10+ kits/year: 15% off + priority shipping</p>
			</div>
			<div>
				<div class="font-semibold mb-1">White-Label Options</div>
				<p class="text-zinc-400">Co-branded kits and documentation available for larger partners.</p>
			</div>
			<div>
				<div class="font-semibold mb-1">Dedicated Support</div>
				<p class="text-zinc-400">Direct line to our technical team for your project managers and supers.</p>
			</div>
			<div>
				<div class="font-semibold mb-1">Training</div>
				<p class="text-zinc-400">Free virtual or on-site training sessions for your electrical and low-voltage crews.</p>
			</div>
		</div>
		<a href="/contact" class="mt-10 inline-block bg-white text-black px-8 py-4 rounded-2xl font-semibold">Become a Partner</a>
	</div>

	<!-- Resources -->
	<div class="mt-20">
		<h2 class="text-4xl font-semibold mb-8">Builder Resources</h2>
		<div class="grid md:grid-cols-2 gap-4">
			{#each resources as res}
				<div class="group flex items-center justify-between border border-zinc-800 hover:border-zinc-600 bg-zinc-900 px-8 py-6 rounded-2xl transition">
					<div>
						<div class="font-semibold">{res.title}</div>
						<div class="text-sm text-zinc-400 mt-1">{res.desc}</div>
					</div>
					<div class="text-xs px-3 py-1 bg-zinc-800 rounded font-mono group-hover:bg-blue-600 transition">{res.type}</div>
				</div>
			{/each}
		</div>
		<p class="text-center text-sm mt-8 text-zinc-500">All resources are available immediately after you request a quote or sign up for the partner portal.</p>
	</div>
</main>
