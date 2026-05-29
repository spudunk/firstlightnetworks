<script lang="ts">
  import KitCard from "$lib/KitCard.svelte";
  import type { PageProps } from "./$types";
  
  let { data }: PageProps = $props();
  // svelte-ignore state_referenced_locally
  let { business, kits } = data;

  const solutionsSchema = $derived({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pre-Configured WiFi Kits for Custom Homes",
    description:
      "Professional indoor, outdoor, and whole-home WiFi systems designed for builders. Pre-configured kits that save time and deliver powerful coverage.",
    provider: {
      "@type": "Organization",
      name: business.name,
      url: "https://firstlightnetworks.com",
    },
    areaServed: "United States",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "WiFi Kits",
      itemListElement: kits.map((kit: any, index: number) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: kit.title,
          description: kit.subtitle,
        },
        position: index + 1,
        price: kit.price === "Custom Pricing" ? null : kit.price.replace("$", ""),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      })),
    },
  });
</script>

<svelte:head>
  <title>Custom Home WiFi Kits & Solutions • First Light Networks</title>
  <meta name="description" content="Explore professional WiFi solutions and pre-configured kits for custom homes. Indoor, outdoor, and whole-home systems that save builders time and ensure reliable coverage.">
  <script type="application/ld+json">
    {@html JSON.stringify(solutionsSchema)}
  </script>
</svelte:head>

<main class="max-w-7xl mx-auto px-6 py-16">
  <div class="max-w-4xl mb-16">
    <h1 class="text-6xl font-bold tracking-tighter">
      Solutions built for real homes.
    </h1>
    <p class="max-w-prose mt-4 text-xl text-zinc-200">
      Kits arrive ready to install. Connections and cables are clearly labeled. 
    </p>
    <p class="max-w-prose mt-4 text-xl text-zinc-200">
      Kits are completely plug-and-play, instructions are very simple. 
    </p>
    <p class="max-w-prose mt-4 text-xl text-zinc-200">
      We will contact you via email for preferences and lead-time. 
    </p>
    <p class="max-w-prose mt-4 text-xl text-red-200">
      If we cannot contact you, your order will be cancelled. 
    </p>
  </div>

  <!-- Pre-Configured Kits -->
  <section>
    <div class="flex items-end justify-between mb-8">
      <div>
        <!-- <div
          class="text-blue-500 uppercase tracking-widest text-xs font-medium"
        >
          RECOMMENDED
        </div> -->
        <h2 class="text-4xl font-semibold">Pre-Configured Kits</h2>
      </div>
      <!-- <a href="/quote" class="text-sm text-blue-400 hover:underline"
        >Need something custom? →</a
      > -->
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      {#each kits as kit, i}
        <KitCard {kit} {i} />
      {/each}
    </div>
  </section>

  </main>
