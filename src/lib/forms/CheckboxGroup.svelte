<script lang="ts">
  import type { SuperForm } from "sveltekit-superforms";
  import { formFieldProxy } from "sveltekit-superforms";

  let {
    form,
    field,
    label,
    options,
  }: {
    form: SuperForm<any>;
    field: string;
    label: string;
    options: { value: string; label: string }[];
  } = $props();

  // svelte-ignore state_referenced_locally
  const { value, errors } = formFieldProxy(form, field);

  function toggle(val: string) {
    const current = $value || [];
    if (current.includes(val)) {
      $value = current.filter((v: string) => v !== val);
    } else {
      $value = [...current, val];
    }
  }
</script>

<div class="space-y-2">
  <div class="text-sm font-medium text-zinc-300">{label}</div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
    {#each options as opt}
      <label
        class="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 hover:border-zinc-600 cursor-pointer"
      >
        <input
          type="checkbox"
          checked={($value || []).includes(opt.value)}
          onchange={() => toggle(opt.value)}
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
