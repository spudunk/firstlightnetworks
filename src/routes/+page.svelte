<script>
  import KitCard from "$lib/KitCard.svelte";
  import StarRating from "$lib/StarRating.svelte";

  let { data } = $props();
  let currentSlide = $state(0);
</script>

<svelte:head>
  <title>Home • {data.business.name}</title>
</svelte:head>

<div class="min-h-screen bg-zinc-950 text-white">
  <!-- Hero -->
  <section
    class="pt-24 pb-20 bg-linear-to-br from-zinc-900 via-zinc-950 to-black"
  >
    <div class="max-w-7xl mx-auto px-6 pt-16">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div
            class="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 text-sm"
          >
            <span class="text-emerald-400">●</span>
            <span>Now shipping nationwide</span>
          </div>

          <h1
            class="text-6xl md:text-7xl font-bold leading-tight tracking-tighter"
          >
            Turn-key WiFi.<br />
            <span class="text-blue-500">Built for builders.</span>
          </h1>

          <p class="text-xl text-zinc-400 max-w-lg">
            Pre-configured, fully tested kits delivering flawless indoor +
            outdoor coverage. Save time, impress clients, and eliminate
            callbacks.
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              href="#quote"
              class="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-zinc-200 transition"
            >
              Build Your Kit
            </a>
            <a
              href="#solutions"
              class="border border-zinc-700 hover:border-zinc-400 px-8 py-4 rounded-2xl font-semibold transition"
            >
              See Solutions
            </a>
          </div>

          <div class="flex items-center gap-8 text-sm pt-4">
            <StarRating
              score={data.business.rating.score}
              count={data.business.rating.count}
              label={data.business.rating.label}
            />
            <div class="h-4 w-px bg-zinc-700"></div>
            <div>15+ years networking expertise</div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative">
          <img
            src="https://picsum.photos/id/1015/800/620"
            alt="Luxury home with full WiFi coverage"
            class="rounded-3xl shadow-2xl shadow-blue-950/50"
          />
          <div
            class="absolute -bottom-6 -left-6 bg-zinc-900 border border-zinc-700 rounded-2xl p-6 max-w-[220px]"
          >
            <div class="text-emerald-400 text-4xl font-mono font-bold">
              1.2 Gbps
            </div>
            <div class="text-sm text-zinc-400">
              Average speed across entire property
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Trust Bar -->
  <div class="bg-zinc-900 py-6 border-b border-zinc-800">
    <div
      class="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-zinc-400 text-sm"
    >
      <div>✅ Pre-wired for new construction</div>
      <div>✅ Full indoor + outdoor coverage</div>
      <div>✅ Pre-configured & tested</div>
      <div>✅ 3-year warranty</div>
      <div>✅ Builder volume pricing</div>
    </div>
  </div>

  <!-- Value Propositions -->
  <section class="py-20 bg-zinc-950">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-center text-4xl font-semibold mb-12">
        Why Builders Choose {data.business.name}
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-zinc-900 p-8 rounded-3xl">
          <div class="text-5xl mb-6">⏱️</div>
          <h3 class="text-2xl font-semibold mb-3">Save Installation Time</h3>
          <p class="text-zinc-400">
            Pre-configured kits arrive ready to plug in. Most installs take
            under 4 hours.
          </p>
        </div>
        <div class="bg-zinc-900 p-8 rounded-3xl">
          <div class="text-5xl mb-6">🏠</div>
          <h3 class="text-2xl font-semibold mb-3">Impress Homeowners</h3>
          <p class="text-zinc-400">
            Reliable whole-home + outdoor coverage (patio, pool, garage) as a
            premium upsell.
          </p>
        </div>
        <div class="bg-zinc-900 p-8 rounded-3xl">
          <div class="text-5xl mb-6">📞</div>
          <h3 class="text-2xl font-semibold mb-3">Fewer Callbacks</h3>
          <p class="text-zinc-400">
            Professional-grade wired systems with remote monitoring and support.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Kits -->
  <section id="solutions" class="py-20 bg-black">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex justify-between items-end mb-12">
        <h2 class="text-4xl font-semibold">Featured Kits</h2>
        <a href="/solutions" class="text-blue-400 hover:underline"
          >View all kits →</a
        >
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        {#each data.kits as kit}
          <KitCard {kit} business={data.business} />
        {/each}
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-20 bg-zinc-900">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl font-semibold text-center mb-12">
        What Customers Are Saying
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        {#each data.testimonials as testimonial}
          <div class="bg-zinc-950 p-10 rounded-3xl">
            <p class="text-lg leading-relaxed">"{testimonial.text}"</p>
            <div class="flex items-center gap-4 mt-10">
              <div>
                <div class="font-semibold">{testimonial.name}</div>
                <div class="text-sm text-zinc-400">{testimonial.role}</div>
              </div>
              <StarRating score={testimonial.score} />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section id="quote" class="py-24 bg-linear-to-br from-blue-950 to-zinc-950">
    <div class="max-w-4xl mx-auto text-center px-6">
      <h2 class="text-5xl font-bold mb-6">
        Ready to simplify your next project?
      </h2>
      <p class="text-xl text-zinc-300 mb-10">
        Tell us about your upcoming builds and we’ll design the perfect WiFi
        solution.
      </p>
      <a
        href="/quote"
        class="inline-block bg-white text-black px-12 py-5 rounded-2xl text-xl font-semibold hover:bg-zinc-200 transition"
      >
        Get Your Custom Kit Quote →
      </a>
      <p class="text-sm text-zinc-400 mt-6">
        Most quotes delivered within 24 hours
      </p>
    </div>
  </section>
</div>
