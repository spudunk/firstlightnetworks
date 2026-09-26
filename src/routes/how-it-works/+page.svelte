<script lang="ts">
  import { steps } from "$lib";
  import { howToSchema } from "$lib/schemas";
</script>

<svelte:head>
  <title
    >Install your network while the walls are open • First Light Networks LLC</title
  >
  <meta
    name="description"
    content="Free cabling plan for every new build. Your electrician installs the network cabling while there for the electrical. Cable plans are ready within 3 days. Save 60% or more versus after the walls are closed."
  />
  <script type="application/ld+json">
    {@html JSON.stringify(howToSchema)}
  </script>
</svelte:head>

<main class="max-w-5xl mx-auto px-6 py-16">
  <div class="text-center max-w-2xl mx-auto">
    <h1 class="text-6xl font-bold tracking-tighter">
      Install your network while the walls are open.
    </h1>
    <p class="mt-4 text-xl text-zinc-400">
      Fiber-internet is faster than wireless-mesh can handle. The free consult
      marks exactly which cables to install, and where. The best time is
      alongside the electrical.
    </p>
  </div>

  <!-- Timeline -->
  <div class="mt-16 relative">
    <div
      class="absolute left-8 top-12 bottom-12 w-px bg-linear-to-b from-blue-600 via-blue-600 to-transparent hidden md:block"
    ></div>

    <div class="space-y-12">
      {#each steps as step (step.number)}
        <div class="md:flex gap-10 items-start">
          <div
            class="shrink-0 w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl font-mono font-bold mb-4 md:mb-0"
          >
            {step.number}
          </div>
          <div class="flex-1">
            <h3 class="text-3xl font-semibold">{step.title}</h3>
            <p class="mt-3 text-lg text-zinc-400 max-w-2xl">{step.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="text-center mt-16">
    <a
      href="/plan"
      class="inline-block bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition"
    >
      Get the free cabling plan
    </a>
    <p class="text-sm text-zinc-400 mt-6">
      Cable plans are ready within 3 days.
    </p>
  </div>
</main>
