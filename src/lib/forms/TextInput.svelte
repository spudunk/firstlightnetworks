<script lang="ts">
	import type { SuperForm } from 'sveltekit-superforms';
	import { formFieldProxy } from 'sveltekit-superforms';

	let { form, field, label, type = 'text', placeholder = '' }: {
		form: SuperForm<any>;
		field: string;
		label: string;
		type?: string;
		placeholder?: string;
	} = $props();

	const { value, errors, constraints } = formFieldProxy(form, field);
</script>

<div class="space-y-1.5">
	<label for={field} class="block text-sm font-medium text-zinc-300">{label}</label>
	<input
		id={field}
		type={type}
		bind:value={$value}
		{placeholder}
		{...$constraints}
		class="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
	/>
	{#if $errors}
		<p class="text-sm text-red-400">{$errors}</p>
	{/if}
</div>