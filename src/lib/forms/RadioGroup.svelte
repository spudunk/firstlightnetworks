<script lang="ts">
	import type { SuperForm } from 'sveltekit-superforms';
	import { formFieldProxy } from 'sveltekit-superforms';

	let { form, field, label, options }: {
		form: SuperForm<any>;
		field: string;
		label: string;
		options: { value: string; label: string }[];
	} = $props();

	const { value, errors } = formFieldProxy(form, field);
</script>

<div class="space-y-2">
	<div class="text-sm font-medium text-zinc-300">{label}</div>
	<div class="flex flex-wrap gap-3">
		{#each options as opt}
			<label class="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 cursor-pointer has-checked:border-blue-500 has-checked:bg-blue-950/30">
				<input
					type="radio"
					name={field}
					value={opt.value}
					bind:group={$value}
					class="accent-blue-600"
				/>
				<span class="text-sm">{opt.label}</span>
			</label>
		{/each}
	</div>
	{#if $errors}
		<p class="text-sm text-red-400">{$errors}</p>
	{/if}
</div>