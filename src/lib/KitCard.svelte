<script lang="ts">
  let { kit, i } = $props();
</script>

<div
  class="bg-zinc-900 rounded-3xl overflow-hidden group ring-2 relative {kit.popular
    ? 'ring-blue-600'
    : 'ring-emerald-300'}"
>
  {#if kit.popular}
    <div
      class="absolute top-2 right-2 bg-blue-600 text-xs font-semibold px-4 py-1 rounded-full"
    >
      MOST POPULAR
    </div>
  {/if}
  <!-- <img src={kit.image} class="w-full h-56 object-cover {kit.popular ? '' : 'group-hover:scale-105 transition'}" alt={kit.title}> -->
  <div class="p-8">
    <h3 class="text-2xl font-semibold">{kit.title}</h3>
    <p class="text-zinc-400 text-sm mt-1">{kit.subtitle}</p>
    <div class="mt-6 text-3xl font-semibold">{kit.price}</div>
    {#if kit.features}
      <ul class="my-6 space-y-3 text-sm">
        {#each kit.features as feature}
          <li class="flex items-center gap-2">✓ {feature}</li>
        {/each}
      </ul>
    {/if}
    <div class="mt-10">
      <a
        href={kit.link}
        class=" w-full py-2 px-4 rounded-2xl transition font-medium border hover:text-emerald-500"
      >
        {kit.buttonText}
      </a>
    </div>
  </div>
</div>
