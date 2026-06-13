<script lang="ts">
	import type { SuperForm } from 'sveltekit-superforms';
	import { formFieldProxy } from 'sveltekit-superforms';

	let { form, field, label, options }: {
		form: SuperForm<any>;
		field: string;
		label: string;
		options: { value: string; label: string }[];
	} = $props();

	// svelte-ignore state_referenced_locally
	const { value, errors, constraints } = formFieldProxy(form, field);
</script>

<div class="space-y-1.5">
	<label for={field} class="block text-sm font-medium text-zinc-300">{label}</label>
	<select
		id={field}
		bind:value={$value}
		{...$constraints}
		class="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
	>
		<option value="">Select...</option>
		{#each options as opt}
			<option value={opt.value}>{opt.label}</option>
		{/each}
	</select>
	{#if $errors}
		<p class="text-sm text-red-400">{$errors}</p>
	{/if}
</div>