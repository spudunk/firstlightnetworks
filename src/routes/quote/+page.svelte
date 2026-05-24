<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { quoteSchema } from './schema';

	import TextInput from '$lib/forms/TextInput.svelte';
	import Select from '$lib/forms/Select.svelte';
	import RadioGroup from '$lib/forms/RadioGroup.svelte';
	import CheckboxGroup from '$lib/forms/CheckboxGroup.svelte';
	import Textarea from '$lib/forms/Textarea.svelte';
	import FileUpload from '$lib/forms/FileUpload.svelte';

	let { data } = $props();

	// svelte-ignore state_referenced_locally
	const form = superForm(data.form, {
		// @ts-expect-error zod v4 + superforms adapter typing
		validators: zodClient(quoteSchema),
		dataType: 'json'
	});

	const { form: formData, errors, enhance, submitting, message: formMessage } = form;

	// Options
	const projectTypes = [
		{ value: 'new-construction', label: 'New Construction' },
		{ value: 'renovation', label: 'Renovation / Addition' },
		{ value: 'multiple', label: 'Multiple Projects' }
	];

	const storyOptions = [
		{ value: '1', label: '1 Story' },
		{ value: '2', label: '2 Stories' },
		{ value: '3', label: '3 Stories' },
		{ value: '4+', label: '4+ Stories' }
	];

	const performanceOptions = [
		{ value: 'basic', label: 'Basic (Streaming + Browsing)' },
		{ value: 'high', label: 'High Performance (4K, Gaming, Multiple Users)' },
		{ value: 'ultra', label: 'Ultra (Future-proof – 10+ Gbps capable)' }
	];

	const indoorOptions = [
		{ value: 'whole-home', label: 'Whole-home coverage' },
		{ value: 'office', label: 'Home office / high-bandwidth areas' },
		{ value: 'smart-home', label: 'Smart home devices (lights, thermostats, cameras)' }
	];

	const outdoorOptions = [
		{ value: 'patio', label: 'Patio / Outdoor Living Area' },
		{ value: 'pool', label: 'Pool / Spa' },
		{ value: 'garden', label: 'Garden / Backyard' },
		{ value: 'porch', label: 'Front Porch / Driveway' },
		{ value: 'dock', label: 'Dock / Boat House' },
		{ value: 'other', label: 'Other outdoor areas' }
	];

	const integrationOptions = [
		{ value: 'security', label: 'Security cameras' },
		{ value: 'access', label: 'Access control / smart locks' },
		{ value: 'audio', label: 'Whole-home audio' },
		{ value: 'other', label: 'Other smart systems' }
	];

	const budgetOptions = [
		{ value: 'under-3k', label: 'Under $3k' },
		{ value: '3k-6k', label: '$3k – $6k' },
		{ value: '6k-10k', label: '$6k – $10k' },
		{ value: '10k+', label: '$10k+' }
	];
</script>

<svelte:head>
	<title>Get a Custom WiFi Kit Quote | First Light Networks</title>
</svelte:head>

<div class="min-h-screen bg-zinc-950 text-white">
	<!-- Navbar simplified -->
	<!-- <nav class="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-800">
		<div class="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
			<a href="/" class="flex items-center gap-3">
				<div class="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-xl font-bold">⚡</div>
				<div>
					<h1 class="text-2xl font-semibold tracking-tight">First Light Networks</h1>
					<p class="text-xs text-zinc-400 -mt-1">WiFi for Custom Homes</p>
				</div>
			</a>
			<a href="/" class="text-sm hover:text-blue-400 transition">← Back to Home</a>
		</div>
	</nav> -->

	<div class="max-w-5xl mx-auto px-6 pt-24 pb-16">
		<div class="text-center mb-12">
			<h1 class="text-5xl font-bold tracking-tighter">Get Your Custom WiFi Quote</h1>
			<p class="text-xl text-zinc-400 mt-3">Most quotes are delivered within 24 hours</p>
		</div>

		<div class="text-center mb-12 py-4"> 
			<p class="text-3xl text-blue-300 mt-3">Quote form coming soon... Please <a class="text-blue-500 underline" href="/contact">contact us</a> for custom quotes.</p>
		</div>

		<form method="POST" use:enhance class="space-y-10" inert>
			<!-- 1. Contact Information -->
			<div class="bg-zinc-900 rounded-3xl p-8">
				<h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
					<span class="text-blue-500">1</span> Contact Information
				</h2>
				<div class="grid md:grid-cols-2 gap-5">
					<TextInput form={form} field="fullName" label="Full Name" />
					<TextInput form={form} field="company" label="Company" />
					<TextInput form={form} field="phone" label="Phone" type="tel" />
					<TextInput form={form} field="email" label="Email" type="email" />
					<TextInput form={form} field="jobTitle" label="Job Title / Role" />
				</div>
			</div>

			<!-- 2. Project Details -->
			<div class="bg-zinc-900 rounded-3xl p-8">
				<h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
					<span class="text-blue-500">2</span> Project Details
				</h2>
				<div class="grid md:grid-cols-2 gap-5">
					<TextInput form={form} field="location" label="Project Location" placeholder="City, State" />

					<RadioGroup form={form} field="projectType" label="Project Type" options={projectTypes} />

					<TextInput form={form} field="numberOfHomes" label="Number of Homes in this Project" type="number" />
					<TextInput form={form} field="expectedStartDate" label="Expected Start Date" type="date" />

					<TextInput form={form} field="roughInPhase" label="Rough-in Phase" placeholder="e.g. Electrical complete" />
					<TextInput form={form} field="totalHomesPlanned" label="Total Homes Planned (Next 12 months)" type="number" />
				</div>
			</div>

			<!-- 3. Home Specifications -->
			<div class="bg-zinc-900 rounded-3xl p-8">
				<h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
					<span class="text-blue-500">3</span> Home Specifications
				</h2>

				<div class="grid md:grid-cols-2 gap-5 mb-6">
					<TextInput form={form} field="squareFootage" label="Square Footage (Total conditioned space)" type="number" placeholder="e.g. 6500" />
					<Select form={form} field="numberOfStories" label="Number of Stories" options={storyOptions} />
				</div>

				<div class="mb-6">
					<div class="text-sm font-medium text-zinc-300 mb-3">Number of Units / Buildings</div>
					<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
						<TextInput form={form} field="numberOfUnits.mainHouse" label="Main House" type="number" />
						<TextInput form={form} field="numberOfUnits.guestHouse" label="Guest House / ADU" type="number" />
						<TextInput form={form} field="numberOfUnits.garage" label="Garage / Workshop" type="number" />
						<TextInput form={form} field="numberOfUnits.poolHouse" label="Pool House / Outdoor Kitchen" type="number" />
					</div>
				</div>

				<Textarea form={form} field="specialNotes" label="Special Construction Notes" placeholder="E.g. metal framing, thick stone walls, smart home integration, etc." rows={3} />
			</div>

			<!-- 4. Coverage Requirements -->
			<div class="bg-zinc-900 rounded-3xl p-8">
				<h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
					<span class="text-blue-500">4</span> Coverage Requirements
				</h2>

				<div class="mb-8">
					<CheckboxGroup form={form} field="indoorCoverage" label="Indoor Coverage" options={indoorOptions} />
				</div>

				<div class="mb-8">
					<CheckboxGroup form={form} field="outdoorCoverage" label="Outdoor Coverage" options={outdoorOptions} />
				</div>

				<RadioGroup form={form} field="desiredPerformance" label="Desired Performance" options={performanceOptions} />
			</div>

			<!-- 5. Additional Requirements -->
			<div class="bg-zinc-900 rounded-3xl p-8">
				<h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
					<span class="text-blue-500">5</span> Additional Requirements
				</h2>

				<div class="mb-6">
					<label class="flex items-center gap-3 text-sm cursor-pointer">
						<input type="checkbox" bind:checked={$formData.needsPoeCabling as any} class="accent-blue-600 scale-125" />
						Do you need PoE switching and structured cabling recommendations?
					</label>
				</div>

				<div class="mb-6">
					<CheckboxGroup form={form} field="integrations" label="Integration with" options={integrationOptions} />
				</div>

				<TextInput form={form} field="brandPreferences" label="Any specific brand preferences? (e.g. Ubiquiti, Aruba, TP-Link Omada)" />
			</div>

			<!-- 6. Optional Fields -->
			<div class="bg-zinc-900 rounded-3xl p-8">
				<h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
					<span class="text-blue-500">6</span> Optional Information
				</h2>

				<div class="grid md:grid-cols-2 gap-5 mb-6">
					<Select form={form} field="budgetRange" label="Budget Range for WiFi System" options={budgetOptions} />
					<TextInput form={form} field="howHeard" label="How did you hear about us?" />
				</div>

				<Textarea form={form} field="additionalInfo" label="Anything else we should know?" rows={3} />

				<div class="mt-6">
					<FileUpload form={form} field="files" />
				</div>
			</div>

			<!-- Submit -->
			<div class="flex justify-center pt-4">
				<button
					type="submit"
					disabled={$submitting}
					class="bg-blue-600 hover:bg-blue-500 disabled:opacity-70 px-16 py-4 rounded-2xl text-lg font-semibold transition flex items-center gap-3"
				>
					{$submitting ? 'Submitting...' : 'Submit Quote Request'}
				</button>
			</div>
		</form>

		{#if $formMessage}
			<div class="mt-8 bg-zinc-900 rounded-3xl p-12 text-center">
				<div class="mx-auto w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
					<span class="text-3xl">✓</span>
				</div>
				<h2 class="text-2xl font-semibold mb-3">Request Received</h2>
				<p class="text-zinc-400 max-w-md mx-auto">{$formMessage}</p>
				<a href="/" class="inline-block mt-6 text-blue-400 hover:text-blue-300">← Back to Home</a>
			</div>
		{/if}
	</div>
</div>