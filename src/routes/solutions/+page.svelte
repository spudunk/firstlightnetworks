<script lang="ts">
  import KitCard from "$lib/KitCard.svelte";
  import { business, kits } from "$lib";
  import { solutionsSchema } from "$lib/schemas";

  import Map from "virtual:icons/mdi/map-marker-outline";
  import Wrench from "virtual:icons/mdi/tools";
  import ShieldCheck from "virtual:icons/mdi/shield-check";

  // import type { PageProps } from "./$types";
  // let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>Custom Home WiFi Kits & Solutions • First Light Networks</title>
  <meta
    name="description"
    content="Explore professional WiFi solutions and pre-configured kits for custom homes. Indoor, outdoor, and whole-home systems that save builders time and ensure reliable coverage."
  />
  <script type="application/ld+json">
    {@html JSON.stringify(solutionsSchema)}
  </script>
</svelte:head>

<main class="max-w-7xl mx-auto px-6 my-16">
  <div class="max-w-4xl mb-16 md:text-lg">
    <h1 class="text-6xl font-bold tracking-tighter">
      Solutions built for real homes.
    </h1>
    <p class="mt-8 text-lg md:text-xl">
      If you need a reliable network, we have you covered.
    </p>

    <p class="mt-10 text-xl md:text-2xl text-green-300">Which works best for you?</p>
    <ul class="mt-4 space-y-4">
      <li>
        <strong class="text-blue-200">On-Site:</strong> We come on-site to design,
        build, and install a complete custom solution guaranteed to meet your connectivity
        needs for years to come.
      </li>
      <li>
        <strong class="text-blue-200">Remote:</strong> For electricians, contractors,
        and DIYers, we offer kits that come with custom pre-configured equipment,
        plans, technical training, guidance, and support.
      </li>
    </ul>
  </div>

  <!-- On-Site Service -->
  <section class="my-16">
    <h2 class="text-4xl font-semibold">On-Site Service</h2>
    <p class="mt-4 text-lg text-zinc-400 max-w-3xl">
      Premium full-service solution. Our team handles everything end-to-end for
      guaranteed whole-home and outdoor coverage.
    </p>

    <div class="grid md:grid-cols-3 gap-8 mt-8">
      <div class="bg-zinc-900 p-8 rounded-3xl">
        <div class="text-5xl mb-6"><Map /></div>
        <h3 class="text-2xl font-semibold mb-3 text-blue-200">
          Custom Site Design
        </h3>
        <p class="text-zinc-400">
          We survey your property and create a tailored plan with coverage maps,
          hardware specs, and wiring guidance.
        </p>
      </div>
      <div class="bg-zinc-900 p-8 rounded-3xl">
        <div class="text-5xl mb-6"><Wrench /></div>
        <h3 class="text-2xl font-semibold mb-3 text-blue-200">
          Professional Installation
        </h3>
        <p class="text-zinc-400">
          Our certified techs install, configure, and optimize the system on-site
          for flawless performance.
        </p>
      </div>
      <div class="bg-zinc-900 p-8 rounded-3xl">
        <div class="text-5xl mb-6"><ShieldCheck /></div>
        <h3 class="text-2xl font-semibold mb-3 text-blue-200">
          Guaranteed Results
        </h3>
        <p class="text-zinc-400">
          3-year warranty, post-install testing, homeowner walkthrough, and
          ongoing support included.
        </p>
      </div>
    </div>
  </section>

  <!-- Pre-Configured Kits -->
  <section>
    <h2 class="text-4xl font-semibold">Pre-Configured Kits</h2>

    <p class="mt-6">
      Skip the line and upgrade to one of our kits now, or start with a free consult call to build a complete solution. 
    </p>

    <div class="grid lg:grid-cols-3 gap-8 mt-8">
      {#each kits as kit, i}
        <KitCard {kit} {i} />
      {/each}
    </div>
  </section>
  
</main>
