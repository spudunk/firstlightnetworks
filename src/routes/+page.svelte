<script lang="ts">
  import Checked from "virtual:icons/proicons/checkbox-checked";
  import Clock from "virtual:icons/mdi/clock-outline";
  import Home from "virtual:icons/mdi/home-outline";
  import Lead from "virtual:icons/mdi/award";
  import Wifi from "virtual:icons/mdi/wifi";
  import Shield from "virtual:icons/mdi/shield-check";
  import Heart from "virtual:icons/mdi/heart-outline";

  import StarRating from "$lib/StarRating.svelte";
  import Barn from "$lib/Barn.svg.svelte";

  import { trustItems, testimonials, business } from "$lib";

  // import type { PageProps } from "./$types";
  // let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>Premium Wi-Fi for Everyone • First Light Networks LLC</title>
  <meta
    name="description"
    content="First Light Networks provides turnkey Wi-Fi solutions for home builders. Reliable indoor and outdoor coverage with professional installation across the US."
  />
  <link rel="canonical" href="https://firstlightnetworks.com" />
</svelte:head>

<main class="min-h-screen bg-zinc-950 text-white">
  <section class=" mx-auto px-6 py-2 bg-green-800">
    <div class="max-w-7xl mx-auto px-6">
      <span class="font-bold">Contractors:</span>
      <a
        target="_blank"
        href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDZlMW5qajcybzRoNGQ2Y2lsNm5ycW0yZjJfMjAyNjA4MjJUMTQwMDAwWiBjXzA3YTBmOGFiNDQwM2E1OWJmZGNlOTMwYzkwNmJiNzkwNTMyODRjYzQ0NTFjNmIzYTEyNDRmOTcwMGM0NDMxNzVAZw&tmsrc=c_07a0f8ab4403a59bfdce930c906bb79053284cc4451c6b3a1244f9700c443175%40group.calendar.google.com&scp=ALL"
      >
        <span class="underline">
          Click here to add
          <span class="font-bold">FLN - Network Basics</span>
        </span>
      </a>
      to your calendar OR
      <a target="_blank" href="https://meet.google.com/mmf-jcrg-cjd">
        click here to join:
        <span class="underline"> meet.google.com/mmf-jcrg-cjd </span>
      </a>
    </div>
  </section>

  <!-- Hero -->
  <section
    class="pt-8 sm:pt-16 md:pt-24 pb-20 bg-linear-to-br from-zinc-900 via-zinc-950 to-black overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 pt-16">
      <div class="grid gap-24 md:grid-cols-2 md:gap-2 items-center">
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
            <span class="text-blue-500 tracking-tight text-5xl md:text-6xl"
              >For the House, <br />Shop, and Property</span
            >
          </h1>

          <p class="text-xl text-zinc-400 max-w-lg">
            Pre-configured, fully tested kits delivering flawless indoor &amp;
            outdoor coverage. <span class="text-zinc-200">
              Always stay connected.
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
              score={business.rating.score}
              count={business.rating.count}
              label={business.rating.label}
            />
            <div class="h-4 w-px bg-zinc-700"></div>
            <div>15+ years networking expertise</div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative">
          <div
            class="absolute -inset-20 bg-blue-600/20 rounded-full blur-3xl"
          ></div>
          <Barn className="w-full h-full max-w-xl md:max-w-2xl relative z-10" />
        </div>
      </div>
    </div>
  </section>

  <!-- Trust Bar -->
  <div class="bg-zinc-900 py-6 border-b border-zinc-800">
    <div
      class="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-zinc-400 text-sm"
    >
      {#each trustItems as s}
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
        Why Builders Choose {business.name}
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

  <!-- Homeowners Value Propositions -->
  <section class="py-20 bg-zinc-900">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-center text-4xl font-semibold mb-12">
        Why Homeowners Choose {business.name}
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-zinc-950 p-8 rounded-3xl">
          <div class="text-5xl mb-6"><Wifi /></div>
          <h3 class="text-2xl font-semibold mb-3 text-blue-200">
            Whole-Home Coverage
          </h3>
          <p class="text-zinc-400">
            Blazing fast, reliable Wi-Fi in every room and outdoor space—no dead
            zones.
          </p>
        </div>
        <div class="bg-zinc-950 p-8 rounded-3xl">
          <div class="text-5xl mb-6"><Shield /></div>
          <h3 class="text-2xl font-semibold mb-3 text-blue-200">
            Secure &amp; Smart
          </h3>
          <p class="text-zinc-400">
            Enterprise security and seamless integration with all your smart
            home devices.
          </p>
        </div>
        <div class="bg-zinc-950 p-8 rounded-3xl">
          <div class="text-5xl mb-6"><Heart /></div>
          <h3 class="text-2xl font-semibold mb-3 text-blue-200">
            Zero Headaches
          </h3>
          <p class="text-zinc-400">
            Professional install and dedicated support. Set it and forget it.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  {#if testimonials.length > 0}
    <section class="py-20 bg-zinc-900">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-semibold text-center mb-12">
          What Customers Are Saying
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          {#each testimonials as testimonial}
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
</main>
