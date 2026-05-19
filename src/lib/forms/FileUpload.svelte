<script lang="ts">
	import type { SuperForm } from 'sveltekit-superforms';
	import { formFieldProxy } from 'sveltekit-superforms';

	let { form, field, label = 'Upload files (floorplans, layouts, etc.)' }: {
		form: SuperForm<any>;
		field: string;
		label?: string;
	} = $props();

	const { value } = formFieldProxy(form, field);
	let files: FileList | null = $state(null);

	$effect(() => {
		$value = files;
	});
</script>

<div class="space-y-1.5">
	<label class="block text-sm font-medium text-zinc-300">{label}</label>
	<div class="rounded-xl border border-dashed border-zinc-700 bg-zinc-900 p-8 text-center">
		<input
			type="file"
			multiple
			bind:files
			class="hidden"
			id="file-upload"
		/>
		<label for="file-upload" class="cursor-pointer text-blue-400 hover:underline">
			Click to upload or drag and drop
		</label>
		<p class="text-xs text-zinc-500 mt-1">PDF, JPG, PNG up to 10MB</p>
	</div>
	{#if files && files.length > 0}
		<div class="text-sm text-zinc-400">{files.length} file(s) selected</div>
	{/if}
</div>