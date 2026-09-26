<script lang="ts">
  import type { Component } from "svelte";

  import Cable from "virtual:icons/mdi/ethernet-cable";
  import Chart from "virtual:icons/mdi/trending-up";
  import Camera from "virtual:icons/mdi/cctv";
  import Checked from "virtual:icons/proicons/checkbox-checked";
  import Family from "virtual:icons/mdi/account-child-outline";
  import Headset from "virtual:icons/mdi/headset";
  import Home from "virtual:icons/mdi/home-outline";
  import Power from "virtual:icons/mdi/lightning-bolt-outline";
  import Shield from "virtual:icons/mdi/shield-check";
  import Tools from "virtual:icons/mdi/tools";
  import Usd from "virtual:icons/mdi/currency-usd";
  import Wifi from "virtual:icons/mdi/wifi";

  import StarRating from "$lib/StarRating.svelte";
  import Barn from "$lib/Barn.svg.svelte";

  import { testimonials, business } from "$lib";
  // ClassBanner stays off the homepage. It fights this story.
  import SocialSection from "$lib/SocialSection.svelte";

  type Point = {
    title: string;
    text: string;
    icon: Component;
  };

  const waitingCosts: Point[] = [
    {
      title: "Save 60% or more on your network cabling",
      text: "Installing your network after the walls are closed costs about 3x more.",
      icon: Usd,
    },
    {
      title: "A better network",
      text: "Cable is ran for Access Points, TVs, and Desktops, and tested before drywall. You get fast Wi-Fi everywhere, not just by the router.",
      icon: Cable,
    },
    {
      title: "The house is worth more",
      text: "Equity typically rises 2-3%. The upgrade usually pays for itself.",
      icon: Chart,
    },
  ];

  const planItems = [
    "Where Wireless Access Points go, Indoors and Outside",
    "What type of cable to run and where",
    "A plan your electrician can install during rough-in",
  ];

  const householdBenefits: Point[] = [
    {
      title: "Whole-property Wi-Fi",
      text: "The house, the shop, and the yard. Not just near a router in one room.",
      icon: Wifi,
    },
    {
      title: "Stays online in an outage",
      text: "Backup power keeps the network up when the lights go out.",
      icon: Power,
    },
    {
      title: "Security and parental controls",
      text: "Separate access for the family, guests, and kids.",
      icon: Family,
    },
    {
      title: "Ready for what you add later",
      text: "Smart-home devices have a wire waiting, instead of sharing one Wi-Fi signal.",
      icon: Home,
    },
    {
      title: "A year of remote support",
      text: "Someone to call after move-in. Extend it if you want to keep it.",
      icon: Headset,
    },
    {
      title: "Cameras (if you want them)",
      text: "Designed in to save costs and improve reliability, not bolted on after move-in.",
      icon: Camera,
    },
  ];

  const costReasons: Point[] = [
    {
      title: "Your electrician pulls the cable",
      text: "It goes in during electrical rough-in, while the walls are already open.",
      icon: Tools,
    },
    {
      title: "Your contractor installs the system",
      text: "The gear arrives configured, labeled, and tested. The hard part is already done.",
      icon: Checked,
    },
    {
      title: "We support the install remotely",
      text: "You do not pay another contractor to travel to the site.",
      icon: Headset,
    },
  ];
</script>

<svelte:head>
  <title>Network cable at rough-in • First Light Networks LLC</title>
  <meta
    name="description"
    content="Free consult for new builds: exactly which network cables to pull before rough-in. About a third the cost of a retrofit, and the home is typically worth more."
  />
  <link rel="canonical" href="https://firstlightnetworks.com" />
</svelte:head>

<main class="min-h-screen overflow-x-clip bg-zinc-950 text-white">
  <section class="relative overflow-hidden pt-12 md:pt-20 pb-20 bg-zinc-950">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <img
        src="/daniel-mccullough-hero.jpg"
        alt=""
        class="absolute inset-0 h-full w-full object-cover object-center blur-3xl brightness-50 md:inset-y-0 md:right-0 md:left-auto md:w-[88%] md:translate-x-[18%] md:scale-110 md:object-left"
      />
      <img
        src="/daniel-mccullough-hero.jpg"
        alt=""
        width="1600"
        height="900"
        fetchpriority="high"
        decoding="async"
        class="hero-plans absolute inset-0 h-full w-full object-cover object-center brightness-60 md:inset-y-0 md:right-0 md:left-auto md:w-[78%] md:translate-x-[18%] md:object-left md:brightness-75"
      />
      <div class="absolute inset-0 bg-zinc-950/30 md:hidden"></div>
      <div
        class="absolute inset-0 bg-linear-to-r from-zinc-950 from-20% via-zinc-950/75 via-48% to-transparent"
      ></div>
      <div
        class="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-zinc-950 to-transparent"
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <div class="max-w-3xl">
        <div class="space-y-8">
          <div
            class="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 text-sm"
          >
            <span class="text-emerald-400">●</span>
            <span>Free cabling plan for every new build</span>
          </div>

          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter"
          >
            Install your network while the walls are open.
          </h1>

          <p class="text-xl text-zinc-400 max-w-2xl">
            Fiber-internet is faster than wireless-mesh can handle. Your free
            plan will mark exactly which cables to install, and where. The
            the best time to install your network is alongside your electrical.
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              href="/plan"
              class="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-zinc-200 transition"
            >
              Get the free cabling plan
            </a>
            <a
              href="#existing"
              class="border border-zinc-700 hover:border-zinc-400 px-8 py-4 rounded-2xl font-semibold transition"
            >
              Home already built?
            </a>
          </div>

          <div class="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm pt-2">
            <a
              href={business.google}
              target="_blank"
              rel="noopener noreferrer"
              class="hover:opacity-80 transition"
              aria-label="Read our Google reviews"
            >
              <StarRating
                score={business.rating.score}
                count={business.rating.count}
                label={business.rating.label}
              />
            </a>
            <div class="hidden sm:block h-4 w-px bg-zinc-700"></div>
            <div>15+ years networking expertise</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-zinc-950">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-center text-4xl font-semibold mb-4">
        Installing your network after construction costs more.
      </h2>
      <p class="text-center text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
        The best time to install network cable is during rough-in. After
        drywall, you pay more for an inferior result.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        {#each waitingCosts as item (item.title)}
          <div class="bg-zinc-900 p-8 rounded-3xl">
            <div class="text-5xl mb-6 text-blue-200">
              <item.icon />
            </div>
            <h3 class="text-2xl font-semibold mb-3 text-blue-200">
              {item.title}
            </h3>
            <p class="text-zinc-400">{item.text}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="py-20 bg-zinc-900">
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div
          class="uppercase tracking-[3px] text-blue-500 text-sm font-medium mb-3"
        >
          Free for every new build
        </div>
        <h2 class="text-4xl font-semibold tracking-tight">
          Your electrician installs the network cabling while there for the
          electrical.
        </h2>
        <p class="mt-6 text-lg text-zinc-400">
          We mark where the cables go for free, then design a custom system to
          ensure fast and worry-free connectivity for years to come.
        </p>
        <p class="mt-4 text-lg text-zinc-200">
          You’ll have that plan within 3 days.
        </p>
        <a
          href="/plan"
          class="inline-block mt-8 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition"
        >
          Get the free cabling plan
        </a>
      </div>

      <ul class="space-y-4">
        {#each planItems as item (item)}
          <li class="flex gap-4 bg-zinc-950 p-6 rounded-3xl">
            <Checked class="text-2xl text-emerald-300 shrink-0 mt-0.5" />
            <span class="text-lg">{item}</span>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <section class="py-20 bg-zinc-950">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-center text-4xl font-semibold mb-4">
        A Wi-Fi System Your Family Can Count On
      </h2>
      <p class="text-center text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
        A well designed network unlocks the full potential of fiber-internet.
        The network system is what the household lives with. Plug-and-play
        network hardware generally costs $1,000 to $5,000.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each householdBenefits as item (item.title)}
          <div class="bg-zinc-900 p-8 rounded-3xl">
            <div class="text-5xl mb-6 text-blue-200">
              <item.icon />
            </div>
            <h3 class="text-2xl font-semibold mb-3 text-blue-200">
              {item.title}
            </h3>
            <p class="text-zinc-400">{item.text}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="py-20 bg-zinc-900">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-center text-4xl font-semibold mb-4">
        You don’t pay another contractor to travel.
      </h2>
      <p class="text-center text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
        A configured system costs less than sending a network
        contractor to the job. <br /> One less permit, one less contractor bill.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        {#each costReasons as item (item.title)}
          <div class="bg-zinc-950 p-8 rounded-3xl">
            <div class="text-5xl mb-6 text-blue-200">
              <item.icon />
            </div>
            <h3 class="text-2xl font-semibold mb-3">{item.title}</h3>
            <p class="text-zinc-400">{item.text}</p>
          </div>
        {/each}
      </div>

      <div class="mt-8 border border-zinc-800 rounded-3xl p-8 md:p-10">
        <div class="flex gap-4">
          <Shield class="text-3xl text-blue-200 shrink-0" />
          <div>
            <h3 class="text-2xl font-semibold">
              We are happy to come out when necessary.
            </h3>
            <p class="mt-3 text-lg text-zinc-400 max-w-3xl">
              The house still gets a finished network. We’ll walk the crew
              through that first install so the next one is straightforward.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="existing" class="py-20 bg-zinc-950 scroll-mt-28">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div
          class="uppercase tracking-[3px] text-blue-500 text-sm font-medium mb-3"
        >
          Existing homes
        </div>
        <h2 class="text-4xl font-semibold tracking-tight">
          Home already built?
        </h2>
        <p class="mt-6 text-lg text-zinc-400">
          We still do existing homes, shops, and properties. We have done retrofits for years and still offer a great value. 
          It takes longer with the sheetrock on, but the result is the same. 
        </p>
        <div class="flex flex-wrap gap-4 mt-8">
          <a
            href="/portfolio"
            class="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition"
          >
            See the work
          </a>
          <a
            href="/plan"
            class="border border-zinc-700 hover:border-zinc-400 px-8 py-4 rounded-2xl font-semibold transition"
          >
            Get the free plan
          </a>
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute -inset-10 bg-blue-600/20 rounded-full blur-3xl"
        ></div>
        <Barn className="w-full h-auto max-w-xl relative z-10" />
      </div>
    </div>
  </section>

  <SocialSection />

  {#if testimonials.length > 0}
    <section class="py-20 bg-zinc-950">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-semibold text-center mb-12">
          What customers are saying
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          {#each testimonials as testimonial (testimonial.name)}
            <div class="bg-zinc-900 p-10 rounded-3xl">
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

  <section class="py-24 bg-linear-to-br from-blue-950 to-zinc-950">
    <div class="max-w-4xl mx-auto text-center px-6">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">
        Get the cable plan before rough-in.
      </h2>
      <p class="text-xl text-zinc-300 mb-10">
        Tell us about the build. We’ll mark where the network cable should go,
        at no charge.
      </p>
      <a
        href="/plan"
        class="inline-block bg-white text-black px-12 py-5 rounded-2xl text-xl font-semibold hover:bg-zinc-200 transition"
      >
        Get the free cabling plan
      </a>
      <p class="text-sm text-zinc-400 mt-6">
        Cable plans are ready within 3 days.
      </p>
    </div>
  </section>
</main>

<style>
  .hero-plans {
    mask-image: linear-gradient(
      to right,
      transparent,
      black 16%,
      black 74%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 16%,
      black 74%,
      transparent
    );
  }
</style>
