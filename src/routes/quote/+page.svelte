<script lang="ts">
  import { enhance } from "$app/forms";
  import { fade } from "svelte/transition";
  import type { PageProps } from "./$types";

  import Clock from "virtual:icons/mdi/clock-outline";
  import Checked from "virtual:icons/proicons/checkbox-checked";
  import Camera from "virtual:icons/mdi/cctv";
  import Lock from "virtual:icons/mdi/lock-outline";
  import Wan from "virtual:icons/mdi/access-point-network";
  import Family from "virtual:icons/mdi/account-child-outline";

  import StarRating from "$lib/StarRating.svelte";
  import { business } from "$lib";

  let { form }: PageProps = $props();

  let submitting = $state(false);
  let submitted = $state(false);
  let numberRooms = $state(4);
  let numberAcres = $state(5);

  const fieldClass =
    "bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-blue-600 w-full";

  const stepperBtnClass =
    "size-11 shrink-0 rounded-2xl border border-zinc-800 bg-zinc-950 text-xl leading-none text-zinc-300 transition hover:border-zinc-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40";

  const integrations = [
    {
      name: "cameras",
      title: "Security Cameras",
      desc: "PoE cameras and 24/7 remote monitoring",
      icon: Camera,
    },
    {
      name: "accessControl",
      title: "Access Control",
      desc: "Gates, doors, and keypad entry",
      icon: Lock,
    },
    {
      name: "multiWAN",
      title: "Redundant ISPs",
      desc: "ex: Fiber with Starlink failover",
      icon: Wan,
    },
    {
      name: "parentalControls",
      title: "Parental Controls",
      desc: "Family safe filters",
      icon: Family,
    },
  ] as const;

  const nextSteps = [
    {
      title: "Share the property",
      desc: "A few details are enough to size indoor and outdoor coverage.",
    },
    {
      title: "We design the kit",
      desc: "Hardware, wiring guidance, and a recommendation matched to the site.",
    },
    {
      title: "Quote in your inbox",
      desc: "Most quotes are delivered within 24 hours. No obligation.",
    },
  ];

  function bump(field: "rooms" | "acres", delta: number) {
    if (field === "rooms") {
      numberRooms = Math.max(1, numberRooms + delta);
    } else {
      numberAcres = Math.max(0, numberAcres + delta);
    }
  }
</script>

<svelte:head>
  <title>Request a Custom WiFi Quote • First Light Networks</title>
  <meta
    name="description"
    content="Request a personalized quote for premium WiFi kits designed for custom homes. First Light Networks offers fast quotes and builder-focused recommendations nationwide."
  />
</svelte:head>

<main class="max-w-7xl mx-auto px-6 py-16">
  <div class="max-w-2xl">
    <div
      class="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 text-sm"
    >
      <span class="text-emerald-400">●</span>
      <span>Most quotes within 24 hours</span>
    </div>
    <h1 class="text-5xl md:text-6xl font-bold tracking-tighter mt-6">
      Get your custom WiFi quote
    </h1>
    <p class="text-xl text-zinc-400 mt-4">
      Tell us about the home or property. We’ll size indoor and outdoor coverage
      and send a recommendation.
    </p>
  </div>

  <div class="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
    {#if submitted}
      <div
        in:fade={{ duration: 200 }}
        class="bg-zinc-900 rounded-3xl p-8 md:p-12 text-center"
      >
        <div
          class="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-emerald-400/15 text-3xl text-emerald-300"
        >
          <Checked />
        </div>
        <h2 class="text-3xl font-semibold tracking-tight">Request received</h2>
        <p class="mt-4 text-lg text-zinc-400 max-w-md mx-auto">
          {form?.message ??
            "We'll review your project and follow up within 24 hours."}
        </p>
        <a
          href="/"
          class="inline-block mt-10 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition"
        >
          Back to home
        </a>
      </div>
    {:else}
      <form
        method="POST"
        action="?/submit"
        aria-busy={submitting}
        use:enhance={() => {
          submitting = true;
          return async ({ result, update }) => {
            await update({ reset: result.type === "success" });
            submitting = false;
            if (result.type === "success") submitted = true;
          };
        }}
        class="bg-zinc-900 rounded-3xl p-6 sm:p-8 md:p-10 space-y-10"
      >
        {#if form?.error}
          <p
            class="rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-300"
            role="alert"
          >
            {form.error}
          </p>
        {/if}

        <fieldset class="space-y-5">
          <legend class="text-xl font-semibold">Your contact</legend>
          <label class="flex flex-col gap-2 text-sm font-medium text-zinc-300">
            Name
            <input
              class={fieldClass}
              type="text"
              name="name"
              autocomplete="name"
              required
            />
          </label>
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="flex flex-col gap-2 text-sm font-medium text-zinc-300">
              Email
              <input
                class={fieldClass}
                type="email"
                name="email"
                autocomplete="email"
                required
              />
            </label>
            <label class="flex flex-col gap-2 text-sm font-medium text-zinc-300">
              Phone
              <input
                class={fieldClass}
                type="tel"
                name="phone"
                autocomplete="tel"
                placeholder="(828) 555-1234"
                required
              />
            </label>
          </div>
        </fieldset>

        <fieldset class="space-y-5">
          <legend class="text-xl font-semibold">The property</legend>
          <p class="text-sm text-zinc-400">
            Used to size access points and outdoor coverage.
          </p>
          <div class="grid gap-5 sm:grid-cols-2">
            <div class="flex flex-col gap-2 text-sm font-medium text-zinc-300">
              <label for="numberRooms">Number of rooms</label>
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  class={stepperBtnClass}
                  onclick={() => bump("rooms", -1)}
                  disabled={numberRooms <= 1}
                  aria-label="Decrease rooms"
                >
                  −
                </button>
                <input
                  id="numberRooms"
                  class="{fieldClass} [appearance:textfield] text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  type="number"
                  name="numberRooms"
                  inputmode="numeric"
                  min="1"
                  step="1"
                  bind:value={numberRooms}
                  required
                />
                <button
                  type="button"
                  class={stepperBtnClass}
                  onclick={() => bump("rooms", 1)}
                  aria-label="Increase rooms"
                >
                  +
                </button>
              </div>
            </div>
            <div class="flex flex-col gap-2 text-sm font-medium text-zinc-300">
              <label for="numberAcres">Number of acres</label>
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  class={stepperBtnClass}
                  onclick={() => bump("acres", -1)}
                  disabled={numberAcres <= 0}
                  aria-label="Decrease acres"
                >
                  −
                </button>
                <input
                  id="numberAcres"
                  class="{fieldClass} [appearance:textfield] text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  type="number"
                  name="numberAcres"
                  inputmode="numeric"
                  min="0"
                  step="1"
                  bind:value={numberAcres}
                  required
                />
                <button
                  type="button"
                  class={stepperBtnClass}
                  onclick={() => bump("acres", 1)}
                  aria-label="Increase acres"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend class="text-xl font-semibold">Integrations</legend>
          <p class="mt-2 text-sm text-zinc-400">Optional. Select any that apply so we can design for them.</p>
          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            {#each integrations as item}
              <label
                class="relative flex cursor-pointer flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-600 has-checked:border-blue-600 has-checked:bg-blue-600/10"
              >
                <input type="checkbox" name={item.name} class="peer sr-only" />
                <span
                  class="absolute top-5 right-5 size-5 rounded-full border border-zinc-600 peer-checked:border-blue-500 peer-checked:bg-blue-600"
                ></span>
                <span class="text-2xl text-blue-200">
                  <item.icon />
                </span>
                <span class="pr-8 font-semibold">{item.title}</span>
                <span class="text-sm text-zinc-400">{item.desc}</span>
              </label>
            {/each}
          </div>
        </fieldset>

        <div>
          <button
            disabled={submitting}
            class="w-full bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-zinc-200 transition disabled:cursor-not-allowed disabled:bg-zinc-500 disabled:text-zinc-300"
            type="submit"
          >
            {submitting ? "Sending…" : "Get Your Custom Quote"}
          </button>
          <p
            class="mt-4 text-center text-sm text-zinc-500 min-h-5"
            aria-live="polite"
          >
            {#if submitting}
              Submitting your request…
            {:else}
              No obligation. We typically reply the same day.
            {/if}
          </p>
        </div>
      </form>
    {/if}

    <aside class="space-y-6 lg:sticky lg:top-28">
      <div class="bg-zinc-900 rounded-3xl p-8">
        <div class="flex items-center gap-2 text-blue-200 text-2xl">
          <Clock />
        </div>
        <h2 class="mt-4 text-2xl font-semibold">What happens next</h2>
        <ol class="mt-6 space-y-5">
          {#each nextSteps as step, i}
            <li class="flex gap-4">
              <span
                class="flex size-8 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold"
              >
                {i + 1}
              </span>
              <span>
                <span class="block font-medium">{step.title}</span>
                <span class="mt-1 block text-sm text-zinc-400">{step.desc}</span>
              </span>
            </li>
          {/each}
        </ol>
      </div>

      <div class="bg-zinc-900 rounded-3xl p-8 space-y-4">
        <StarRating
          score={business.rating.score}
          count={business.rating.count}
          label={business.rating.label}
        />
        <p class="text-sm text-zinc-400">
          15+ years networking expertise. Serving builders and homeowners
          nationwide.
        </p>
      </div>
    </aside>
  </div>
</main>
