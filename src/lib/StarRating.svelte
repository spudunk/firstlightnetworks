<script lang="ts">
  import { getContext } from "svelte";
  import Star from "virtual:icons/material-symbols/star";
  import StarOutline from "virtual:icons/material-symbols/star-outline";
  import { business } from "$lib";

  type GoogleRating = { rating: number | null; ratingCount: number | null };

  let {
    score = business.rating.score,
    count = business.rating.count,
    label = business.rating.label,
    live = false,
  } = $props();

  const googleRating = live
    ? getContext<Promise<GoogleRating>>("googleRating")
    : null;

  const display = $derived(
    googleRating
      ? googleRating.then((fresh) => ({
          score: fresh.rating ?? score,
          count: fresh.ratingCount ?? count,
        }))
      : null
  );
</script>

{#snippet stars(score: number, count: number, label: string)}
  {@const fullStars = Math.min(5, Math.max(0, Math.floor(score)))}
  {@const fraction =
    fullStars < 5 ? Math.min(1, Math.max(0, score - fullStars)) : 0}
  {@const emptyStars = 5 - fullStars - (fraction > 0 ? 1 : 0)}
  <div class="flex items-center gap-2">
    <div class="flex text-lg tracking-[-1px]">
      {#each Array(fullStars) as _}
        <span class="text-yellow-400"><Star /></span>
      {/each}
      {#if fraction > 0}
        <span class="relative text-zinc-600">
          <StarOutline />
          <span
            class="absolute top-0 left-0 overflow-hidden text-yellow-400"
            style="width: {fraction * 100}%"
          >
            <span class="block w-[1em]"><Star /></span>
          </span>
        </span>
      {/if}
      {#each Array(emptyStars) as _}
        <span class="text-zinc-600"><StarOutline /></span>
      {/each}
    </div>
    {#if count && label}
      <span class="text-zinc-400">{score.toFixed(1)} from {count} {label}</span>
    {/if}
  </div>
{/snippet}

{#if display}
  {#await display}
    {@render stars(score, count, label)}
  {:then fresh}
    {@render stars(fresh.score, fresh.count, label)}
  {/await}
{:else}
  {@render stars(score, count, label)}
{/if}
