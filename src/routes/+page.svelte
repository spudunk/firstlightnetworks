<script lang="ts">
  import Checked from "virtual:icons/proicons/checkbox-checked";
  import Clock from "virtual:icons/mdi/clock-outline";
  import Home from "virtual:icons/mdi/home-outline";
  import Lead from "virtual:icons/mdi/award";

  import StarRating from "$lib/StarRating.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  // let currentSlide = $state(0);
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
      <div class="grid md:grid-cols-2 gap-2 items-center">
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
            Pre-configured, fully tested kits delivering flawless indoor &amp;
            outdoor coverage. <span class="text-zinc-200">
              Save time, impress clients, lead the industry.
            </span>
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              href="/quote"
              class="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-zinc-200 transition"
            >
              Build Your Kit
            </a>
            <a
              href="/portfolio"
              class="border border-zinc-700 hover:border-zinc-400 px-8 py-4 rounded-2xl font-semibold transition"
            >
              Portfolio
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
            src="/barn.svg"
            alt="Luxury home with full WiFi coverage"
            class=""
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Trust Bar -->
  <div class="bg-zinc-900 py-6 border-b border-zinc-800">
    <div
      class="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-zinc-400 text-sm"
    >
      {#each data.trustItems as s}
        <div class="flex gap-1 items-center">
          <Checked class="text-xl text-emerald-300" />
          {s}
        </div>
      {/each}
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
          <div class="text-5xl mb-6"><Clock /></div>
          <h3 class="text-2xl font-semibold mb-3 text-blue-200">
            Save Installation Time
          </h3>
          <p class="text-zinc-400">
            Pre-configured kits arrive ready to plug in. Most installs take
            under 4 hours.
          </p>
        </div>
        <div class="bg-zinc-900 p-8 rounded-3xl">
          <div class="text-5xl mb-6"><Home /></div>
          <h3 class="text-2xl font-semibold mb-3 text-blue-200">
            Impress Homeowners
          </h3>
          <p class="text-zinc-400">
            Reliable whole-home + outdoor coverage (patio, pool, garage) as a
            premium upsell.
          </p>
        </div>
        <div class="bg-zinc-900 p-8 rounded-3xl">
          <div class="text-5xl mb-6"><Lead /></div>
          <h3 class="text-2xl font-semibold mb-3 text-blue-200">
            Lead the Industry
          </h3>
          <p class="text-zinc-400">
            Built-in Wi-Fi is not common in custom home construction yet, but it
            will be.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  {#if data.testimonials.length > 0}
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
  {/if}

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
