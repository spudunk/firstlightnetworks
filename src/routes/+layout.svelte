<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let mobileOpen = $state(false);
	const business = { name: 'First Light Networks' };
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-zinc-950 text-white">
	<!-- Navbar -->
	<nav class="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-md z-50 border-b border-zinc-800">
		<div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
			<a href="/" class="flex items-center gap-3">
				<div class="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-xl font-bold">⚡</div>
				<div>
					<h1 class="text-2xl font-semibold tracking-tight">{business.name}</h1>
					<p class="text-xs text-zinc-400 -mt-1">WiFi for Custom Homes</p>
				</div>
			</a>

			<!-- Desktop Nav -->
			<div class="hidden md:flex items-center gap-8 text-sm">
				<a href="/solutions" class="hover:text-blue-400 transition">Solutions & Kits</a>
				<a href="/for-builders" class="hover:text-blue-400 transition">For Builders</a>
				<a href="/how-it-works" class="hover:text-blue-400 transition">How It Works</a>
				<a href="/portfolio" class="hover:text-blue-400 transition">Portfolio</a>
				<a href="/resources" class="hover:text-blue-400 transition">Resources</a>
				<a href="/about" class="hover:text-blue-400 transition">About</a>
			</div>

			<div class="flex items-center gap-4">
				<a href="/contact" 
				   class="hidden md:block border border-zinc-700 hover:bg-zinc-900 px-5 py-2.5 rounded-2xl text-sm font-medium transition">
					Contact
				</a>
				<a href="/quote" 
				   class="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-2xl text-sm font-semibold transition">
					Get Quote
				</a>
				
				<!-- Mobile Menu Button -->
				<button onclick={() => mobileOpen = !mobileOpen} class="md:hidden p-2" aria-label="Toggle menu">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if mobileOpen}
			<div class="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-6 flex flex-col gap-4 text-sm">
				<a href="/solutions" class="py-1">Solutions & Kits</a>
				<a href="/for-builders" class="py-1">For Builders</a>
				<a href="/how-it-works" class="py-1">How It Works</a>
				<a href="/portfolio" class="py-1">Portfolio</a>
				<a href="/resources" class="py-1">Resources</a>
				<a href="/about" class="py-1">About</a>
				<a href="/contact" class="py-1">Contact</a>
				<a href="/quote" class="mt-2 bg-blue-600 text-center py-3 rounded-2xl font-semibold">Get Quote</a>
			</div>
		{/if}
	</nav>

	<!-- Page Content -->
	<div class="pt-20">
		{@render children()}
	</div>

	<!-- Footer -->
	<footer class="bg-black py-16 border-t border-zinc-800 text-zinc-400 text-sm">
		<div class="max-w-7xl mx-auto px-6">
			<div class="flex flex-col md:flex-row justify-between gap-12">
				<div>
					<div class="flex items-center gap-3 text-white mb-4">
						<div class="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">⚡</div>
						<span class="text-xl font-semibold">{business.name}</span>
					</div>
					<p class="max-w-xs">Turn-key WiFi solutions for custom home builders and luxury estates.</p>
					<div class="mt-6 text-xs">© 2026 {business.name}. All rights reserved.</div>
				</div>

				<div class="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
					<div>
						<h4 class="font-semibold text-white mb-4">Company</h4>
						<div class="space-y-2">
							<a href="/about" class="block hover:text-white">About Us</a>
							<a href="/portfolio" class="block hover:text-white">Portfolio</a>
							<a href="/contact" class="block hover:text-white">Contact</a>
						</div>
					</div>
					<div>
						<h4 class="font-semibold text-white mb-4">Solutions</h4>
						<div class="space-y-2">
							<a href="/solutions" class="block hover:text-white">Pre-Configured Kits</a>
							<a href="/solutions" class="block hover:text-white">Individual Components</a>
							<a href="/quote" class="block hover:text-white">Custom Quote</a>
						</div>
					</div>
					<div>
						<h4 class="font-semibold text-white mb-4">Resources</h4>
						<div class="space-y-2">
							<a href="/resources" class="block hover:text-white">Learning Center</a>
							<a href="/how-it-works" class="block hover:text-white">How It Works</a>
							<a href="/for-builders" class="block hover:text-white">For Builders</a>
						</div>
					</div>
					<div>
						<h4 class="font-semibold text-white mb-4">Legal</h4>
						<div class="space-y-2">
							<a href={""} class="block hover:text-white">Privacy Policy</a>
							<a href={""} class="block hover:text-white">Terms of Service</a>
							<div class="pt-2 text-xs text-zinc-500">Built with care for builders</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>
