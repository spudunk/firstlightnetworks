<script>
	const projects = [
		{ type: 'New Construction', title: 'The Preserve at Deer Run', builder: 'Reynolds Custom Homes', size: '6,800 sq ft', result: '1.35 Gbps average, zero dead zones', image: 'https://picsum.photos/id/1016/800/600' },
		{ type: 'Retrofit', title: 'Lakefront Estate', builder: 'Horizon Builders', size: '9,200 sq ft', result: 'Before: 40 Mbps • After: 1.1 Gbps whole-home', image: 'https://picsum.photos/id/160/800/600' },
		{ type: 'New Construction', title: 'Oakwood Residence', builder: 'Summit Homes', size: '4,400 sq ft', result: 'Whole-home + pool house coverage', image: 'https://picsum.photos/id/251/800/600' }
	];

	const testimonials = [
		{ quote: "The coverage heatmaps they provided helped us win the bid. Homeowners were blown away during the final walkthrough.", name: "Mike Reynolds", role: "Owner, Reynolds Custom Homes" },
		{ quote: "We used to spend two full days configuring WiFi. Now it's under four hours and the results are dramatically better.", name: "Sarah Chen", role: "Project Manager, Horizon Builders" }
	];
</script>

<svelte:head>
	<title>Portfolio & Case Studies • First Light Networks</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-6 py-16">
	<h1 class="text-6xl font-bold tracking-tighter">Real results.<br>Real homes.</h1>
	<p class="mt-4 max-w-lg text-xl text-zinc-400">Selected projects showing the difference professional pre-configured WiFi makes.</p>

	<div class="mt-14 grid md:grid-cols-2 gap-6">
		{#each projects as project}
			<div class="group overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800">
				<img src={project.image} alt={project.title} class="w-full h-80 object-cover group-hover:scale-[1.03] transition">
				<div class="p-8">
					<div class="uppercase tracking-[2px] text-xs text-emerald-400">{project.type}</div>
					<h3 class="text-3xl font-semibold mt-2">{project.title}</h3>
					<div class="mt-1 text-zinc-400">{project.builder} • {project.size}</div>
					
					<div class="mt-8 pt-8 border-t border-zinc-700 text-sm">
						<div class="font-semibold text-emerald-400">Result</div>
						<div class="text-zinc-300 mt-1">{project.result}</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Testimonials with builder names -->
	<div class="mt-20">
		<h2 class="text-center text-4xl font-semibold mb-12">What our builder partners say</h2>
		<div class="grid md:grid-cols-2 gap-8">
			{#each testimonials as t}
				<div class="bg-zinc-900 p-10 rounded-3xl">
					<p class="text-xl leading-relaxed">“{t.quote}”</p>
					<div class="mt-10 font-semibold">{t.name}<div class="font-normal text-sm text-zinc-400">{t.role}</div></div>
				</div>
			{/each}
		</div>
	</div>

	<div class="mt-16 text-center text-sm text-zinc-500">All testimonials used with permission. Heatmaps and speed test data available upon request.</div>
</div>
