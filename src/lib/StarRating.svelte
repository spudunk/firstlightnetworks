<script lang="ts">
  import Star from "virtual:icons/material-symbols/star";

  let { score = 5, count = 0, label = "" } = $props();

  const fullStars = $derived(Math.floor(score));
  const fraction = $derived(score - fullStars);
</script>

<div class="flex items-center gap-2">
  <div class="flex text-yellow-400 fill-yellow-300 text-lg tracking-[-1px]">
    {#each Array(fullStars) as _}
      <span><Star /></span>
    {/each}
    {#if fraction > 0}
      <span
        class="relative inline-block overflow-hidden"
        style="width: {fraction * 1.05}em"
      >
        <span><Star /></span>
      </span>
    {/if}
  </div>
  {#if count && label}
    <span class="text-zinc-400">{score.toFixed(1)} from {count} {label}</span>
  {/if}
</div>
