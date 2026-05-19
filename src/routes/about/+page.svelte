<script>
	const business = { name: 'First Light Networks' };
</script>

<svelte:head>
	<title>About Us • {business.name}</title>
</svelte:head>

<div class="max-w-5xl mx-auto px-6 py-16">
	<div class="max-w-3xl">
		<div class="uppercase tracking-[3px] text-blue-500 text-sm font-medium mb-3">ABOUT FIRST LIGHT NETWORKS</div>
		<h1 class="text-6xl font-bold tracking-tighter">Reliable, high-performance networks that just work.</h1>
		<p class="mt-6 text-xl text-zinc-400">
			First Light Networks delivers reliable, high-performance wired and wireless networks that just work—without the headaches.
		</p>
		<p class="mt-4 text-xl text-zinc-400">
			We provide <strong class="text-white">pre-configured, plug-and-play network and WiFi systems</strong> built specifically for modern homes and businesses. Every package comes fully assembled, tested, labeled, and ready for fast, professional installation. Our turnkey approach eliminates guesswork, reduces installation time, and delivers consistent, enterprise-grade performance.
		</p>
	</div>

	<!-- Our Story -->
	<div class="mt-20">
		<div class="uppercase tracking-[3px] text-blue-500 text-sm font-medium mb-3">OUR STORY</div>
		<h2 class="text-4xl font-semibold mb-6">From side projects to full focus</h2>
		<div class="prose prose-invert max-w-none text-lg text-zinc-300 space-y-6">
			<p>I've been immersed in technology my entire life—starting with early DSL connections as a kid and spending more than 15 years as a professional programmer and network administrator. Before First Light Networks, I ran a web design business building custom applications for small businesses.</p>
			<p>Time and again, my clients (and their customers) asked for help with WiFi coverage, security cameras, and reliable networking. What started as side work to keep the lights on quickly became the most satisfying and in-demand part of my week. After a candid conversation with a business mentor—who essentially asked, "Why aren't you doing <em>this</em> as your main business?"—I made the switch. First Light Networks was born.</p>
		</div>
	</div>

	<!-- New Construction Focus -->
	<div class="mt-16 bg-zinc-900 rounded-3xl p-12">
		<div class="uppercase tracking-[3px] text-blue-500 text-sm font-medium mb-3">NEW CONSTRUCTION FOCUS</div>
		<h2 class="text-4xl font-semibold mb-6">The best time to build a future-proof network</h2>
		<div class="text-lg text-zinc-300 space-y-6">
			<p>We specialize in new construction because it's the best time and most cost-effective way to build a truly future-proof network. We provide detailed network plans for the electrician during the rough-in phase, ensuring all wiring is included under one electrical permit and properly tested before sheetrock goes up. We then build, configure, and ship a complete, ready-to-install system so contractors can finish the job quickly and cleanly.</p>
		</div>
	</div>

	<!-- Retrofit Support -->
	<div class="mt-16">
		<div class="uppercase tracking-[3px] text-blue-500 text-sm font-medium mb-3">WE STILL SUPPORT RETROFIT PROJECTS</div>
		<h2 class="text-4xl font-semibold mb-6">Helping existing homes and businesses too</h2>
		<div class="text-lg text-zinc-300 space-y-6">
			<p>Even though new construction is our primary focus, we continue to help homeowners and businesses who need better connectivity in existing properties. With our extensive experience in residential and commercial retrofits — and a <strong class="text-white">100% customer success rate</strong> — we offer practical, high-value solutions for older homes and buildings.</p>
			<p>Whether you need a full retrofit or a targeted upgrade, we can provide pre-configured kits designed for easier installation, along with clear instructions and remote support. On-site installation is available for more complex retrofit scenarios.</p>
		</div>
	</div>

	<!-- What Sets Us Apart -->
	<div class="mt-16">
		<div class="uppercase tracking-[3px] text-blue-500 text-sm font-medium mb-3">WHAT SETS US APART</div>
		<h2 class="text-4xl font-semibold mb-10">Why choose First Light Networks</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			<div class="bg-zinc-900 p-8 rounded-3xl">
				<h3 class="font-semibold text-xl mb-3">Turnkey simplicity</h3>
				<p class="text-zinc-400">Fully configured kits with clear instructions and remote support</p>
			</div>
			<div class="bg-zinc-900 p-8 rounded-3xl">
				<h3 class="font-semibold text-xl mb-3">Proven expertise</h3>
				<p class="text-zinc-400">Over 15 years of hands-on networking and systems integration</p>
			</div>
			<div class="bg-zinc-900 p-8 rounded-3xl">
				<h3 class="font-semibold text-xl mb-3">Future-proof designs</h3>
				<p class="text-zinc-400">Built for today's needs and tomorrow's technology</p>
			</div>
			<div class="bg-zinc-900 p-8 rounded-3xl">
				<h3 class="font-semibold text-xl mb-3">Unbeatable value</h3>
				<p class="text-zinc-400">Premium performance at competitive prices</p>
			</div>
			<div class="bg-zinc-900 p-8 rounded-3xl md:col-span-2 lg:col-span-1">
				<h3 class="font-semibold text-xl mb-3">Flexible service</h3>
				<p class="text-zinc-400">Shipping kits nationwide with optional on-site work for special cases</p>
			</div>
		</div>
	</div>

	<!-- Closing -->
	<div class="mt-24 bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center">
		<p class="text-xl text-zinc-300 max-w-2xl mx-auto">
			At First Light Networks, we believe every property deserves fast, reliable, and secure connectivity that owners and occupants can count on for years to come—whether it's being built from the ground up or upgraded after the fact.
		</p>
		<p class="mt-4 text-xl text-zinc-300">We'd love to help you get it right the first time.</p>
		
		<a href="/contact" class="mt-8 inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-zinc-200 transition">Contact us today to discuss your project</a>
	</div>
</div>
