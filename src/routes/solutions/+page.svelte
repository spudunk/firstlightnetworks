<script>
	import KitCard from '$lib/KitCard.svelte';

	const business = { name: 'First Light Networks' };

	const preconfiguredKits = [
		{
			title: 'Essential Coverage',
			subtitle: '2,500–4,000 sq ft',
			price: '$2,495',
			image: 'https://picsum.photos/id/201/600/400',
			features: ['3 WiFi 6E Nodes', 'Indoor + Patio', 'Pre-configured & tested', 'PoE switches included'],
			buttonText: 'Get This Kit'
		},
		{
			title: 'Whole-Home Premium',
			subtitle: '4,000–8,000 sq ft',
			price: '$4,295',
			popular: true,
			image: 'https://picsum.photos/id/237/600/400',
			features: ['5 Nodes + Outdoor AP', 'Whole-home + Pool/Patio', 'Enterprise switch', 'Remote monitoring'],
			buttonText: 'Build Custom Quote'
		},
		{
			title: 'Luxury Estate',
			subtitle: '8,000+ sq ft + Guest House',
			price: '$7,995',
			image: 'https://picsum.photos/id/866/600/400',
			features: ['8+ Nodes', 'Guest house + Outbuildings', '10Gb backbone', 'Full outdoor coverage'],
			buttonText: 'Get This Kit'
		}
	];

	const outdoorPackages = [
		{ title: 'Pool & Patio', price: '$1,295', desc: '2 weatherproof APs + dedicated PoE' },
		{ title: 'Gardens & Grounds', price: '$895', desc: 'Mesh extenders for 1+ acres' },
		{ title: 'Dock & Waterfront', price: '$1,495', desc: 'Marine-grade units + long-range' }
	];

	const components = [
		{ name: 'WiFi 6E Access Points', price: '$349', type: 'Indoor' },
		{ name: 'Outdoor Mesh AP', price: '$429', type: 'Outdoor' },
		{ name: '8-Port PoE Switch', price: '$189', type: 'Networking' },
		{ name: 'Cat6A Cabling Kit', price: '$95', type: 'Cabling' },
		{ name: 'PoE Injectors (pair)', price: '$59', type: 'Power' }
	];
</script>

<svelte:head>
	<title>Solutions & Kits • {business.name}</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-6 py-16">
	<div class="max-w-2xl mb-16">
		<h1 class="text-6xl font-bold tracking-tighter">Solutions built for real homes.</h1>
		<p class="mt-4 text-xl text-zinc-400">Pre-configured kits or individual components. Everything arrives ready to install.</p>
	</div>

	<!-- Pre-Configured Kits -->
	<section>
		<div class="flex items-end justify-between mb-8">
			<div>
				<div class="text-blue-500 uppercase tracking-widest text-xs font-medium">RECOMMENDED</div>
				<h2 class="text-4xl font-semibold">Pre-Configured Kits</h2>
			</div>
			<a href="/quote" class="text-sm text-blue-400 hover:underline">Need something custom? →</a>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			{#each preconfiguredKits as kit}
				<KitCard {kit} {business} />
			{/each}
		</div>
	</section>

	<!-- Outdoor Living -->
	<section class="mt-20">
		<h2 class="text-4xl font-semibold mb-8">Outdoor Living Packages</h2>
		<div class="grid md:grid-cols-3 gap-6">
			{#each outdoorPackages as pkg}
				<div class="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition">
					<div class="text-3xl mb-4">🌊</div>
					<h3 class="text-2xl font-semibold">{pkg.title}</h3>
					<div class="text-3xl font-semibold mt-4">{pkg.price}</div>
					<p class="mt-2 text-zinc-400">{pkg.desc}</p>
					<button class="mt-8 w-full bg-zinc-800 hover:bg-blue-600 py-4 rounded-2xl transition">Add to Kit</button>
				</div>
			{/each}
		</div>
	</section>

	<!-- Individual Components -->
	<section class="mt-20">
		<h2 class="text-4xl font-semibold mb-3">Individual Components</h2>
		<p class="text-zinc-400 mb-8">For custom builds or upgrades. All components are pre-tested before shipping.</p>

		<div class="bg-zinc-900 rounded-3xl overflow-hidden">
			<table class="w-full">
				<thead class="border-b border-zinc-800 text-left text-sm text-zinc-400">
					<tr>
						<th class="p-6 font-normal">Product</th>
						<th class="p-6 font-normal">Category</th>
						<th class="p-6 font-normal">Price</th>
						<th></th>
					</tr>
				</thead>
				<tbody class="divide-y divide-zinc-800 text-sm">
					{#each components as item}
						<tr class="hover:bg-zinc-950">
							<td class="p-6 font-medium">{item.name}</td>
							<td class="p-6 text-zinc-400">{item.type}</td>
							<td class="p-6 font-semibold">{item.price}</td>
							<td class="p-6 text-right"><button class="text-blue-400 hover:underline">Add →</button></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>

	<!-- Kit Details Example -->
	<section class="mt-24 bg-zinc-900 rounded-3xl p-12">
		<div class="grid md:grid-cols-2 gap-12">
			<div>
				<h3 class="text-3xl font-semibold mb-6">What's included in every kit</h3>
				<ul class="space-y-4 text-sm">
					<li class="flex gap-3"><span class="text-emerald-400 mt-0.5">✓</span> Hardware pre-mounted on custom backplates</li>
					<li class="flex gap-3"><span class="text-emerald-400 mt-0.5">✓</span> Full configuration & firmware loaded</li>
					<li class="flex gap-3"><span class="text-emerald-400 mt-0.5">✓</span> 48-hour burn-in testing at our facility</li>
					<li class="flex gap-3"><span class="text-emerald-400 mt-0.5">✓</span> Labeled cables and mounting hardware</li>
					<li class="flex gap-3"><span class="text-emerald-400 mt-0.5">✓</span> Installation guide + video walkthrough</li>
					<li class="flex gap-3"><span class="text-emerald-400 mt-0.5">✓</span> 3-year warranty + lifetime remote support</li>
				</ul>
			</div>
			<div>
				<h3 class="font-semibold mb-4 text-lg">Estimated Install Time</h3>
				<div class="text-6xl font-semibold tabular-nums tracking-tighter">3–5 <span class="text-4xl font-normal text-zinc-400">hrs</span></div>
				<p class="mt-3 text-zinc-400">For a typical 2-story home. Your electrician or low-voltage team handles rough-in and final placement. We provide remote go-live support.</p>

				<div class="mt-8 pt-8 border-t border-zinc-700">
					<div class="text-sm uppercase tracking-widest text-blue-500 mb-3">COVERAGE VISUAL</div>
					<div class="aspect-video bg-zinc-950 rounded-2xl flex items-center justify-center text-center text-sm text-zinc-500 border border-zinc-800">
						Interactive coverage map coming soon.<br>Typical whole-home signal strength: -45 dBm avg
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
