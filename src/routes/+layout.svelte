<script lang="ts">
  import "./layout.css";
  import Logo from "$lib/Logo.svelte";
  import type { LayoutProps } from "./$types";
  import { slide } from "svelte/transition";
  import { business, headerLinks, footerLinks } from "$lib";
  import { organizationSchema, websiteSchema  } from "$lib/schemas";

  let { data, children }: LayoutProps = $props();
  let mobileOpen = $state(false);

</script>

<svelte:head>
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-title" content="First Light" />
  <link rel="manifest" href="/site.webmanifest" />
  {@html `<script type="application/ld+json"> ${JSON.stringify(organizationSchema)} </script>`}
  {@html `<script type="application/ld+json"> ${JSON.stringify(websiteSchema)} </script>`}
</svelte:head>

<div class="min-h-screen bg-zinc-950 text-white">
  <!-- Navbar -->
  <nav
    class="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-md z-50 border-b border-zinc-800 h-24"
  >
    <div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
      <a
        href="/"
        class="flex items-center gap-3"
        onclick={() => (mobileOpen = false)}
      >
        <div
          class="w-14 rounded-xl flex items-center justify-center text-xl fill-white font-bold"
        >
          <Logo />
        </div>
        <div>
          <span
            class="text-sm xs:text-md sm:text-2xl font-semibold tracking-tight"
          >
            {business.name}
          </span>
          <p class="text-xs text-zinc-400 -mt-1 hidden sm:block">
            Wi-Fi Made Easy
          </p>
        </div>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center gap-8 text-sm">
        {#each headerLinks as link}
          <a href={link.href} class="hover:text-blue-400 transition"
            >{link.label}</a
          >
        {/each}
      </div>

      <div class="flex items-center gap-4">
        <a
          href="/contact"
          class="hidden md:block border border-zinc-700 hover:bg-zinc-900 px-5 py-2.5 rounded-2xl text-sm font-medium transition"
        >
          Contact
        </a>

        <a
          href="/quote"
          onclick={() => (mobileOpen = !mobileOpen)}
          class="bg-blue-600 hover:bg-blue-500 px-2 md:px-4 py-3 rounded-2xl text-sm font-semibold transition text-nowrap"
        >
          Get Quote
        </a>

        <!-- Mobile Menu Button -->
        <button
          onclick={() => (mobileOpen = !mobileOpen)}
          class="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if mobileOpen}
      <div
        class="lg:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-6 flex flex-col gap-4 text-sm"
        transition:slide={{ duration: 150 }}
      >
        {#each headerLinks as link}
          <a href={link.href} class="py-1" onclick={() => (mobileOpen = false)}
            >{link.label}</a
          >
        {/each}
        <a href="/contact" class="py-1" onclick={() => (mobileOpen = false)}
          >Contact</a
        >

        <a
          href="/quote"
          class="mt-2 bg-blue-600 text-center py-3 rounded-2xl font-semibold"
          onclick={() => (mobileOpen = false)}>Get Quote</a
        >
      </div>
    {/if}
  </nav>

  <!-- Page Content -->
  <div class="pt-24">
    {@render children()}
  </div>

  <!-- Footer -->
  <footer class="bg-black py-16 border-t border-zinc-800 text-zinc-400 text-sm">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between gap-12">
        <div>
          <div class="flex items-center gap-3 text-white mb-4">
            <div
              class="w-14 rounded-xl flex items-center justify-center fill-white"
            >
              <Logo />
            </div>
            <span class="text-xl font-semibold">{business.name}</span>
          </div>
          <p class="max-w-xs">
            Turn-key WiFi solutions for custom home builders and home owners.
          </p>
          <div class="mt-6 text-xs">
            © 2026 {business.legalName}. All rights reserved.
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
          {#each footerLinks as section}
            <div>
              <span class="font-semibold text-white mb-4 inline-block"
                >{section.heading}</span
              >
              <div class="space-y-2">
                {#each section.links as link}
                  <a href={link.href} class="block hover:text-white"
                    >{link.label}</a
                  >
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </footer>
</div>
