<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import Logo from "$lib/Logo.svelte";
  import type { LayoutProps } from "./$types";
  import { slide } from "svelte/transition";
  import { ls } from "$lib/localStorage.svelte";

  let { data, children }: LayoutProps = $props();
  let mobileOpen = $state(false);
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-zinc-950 text-white">
  <!-- Navbar -->
  <nav
    class="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-md z-50 border-b border-zinc-800"
  >
    <div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3">
        <div
          class="w-14 rounded-xl flex items-center justify-center text-xl fill-white font-bold"
        >
          <Logo />
        </div>
        <div>
          <h1 class="text-lg sm:text-2xl font-semibold tracking-tight">
            {data.business.name}
          </h1>
          <p class="text-xs text-zinc-400 -mt-1">WiFi for Custom Homes</p>
        </div>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center gap-8 text-sm">
        {#each data.headerLinks as link}
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
          class="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-2xl text-sm font-semibold transition"
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
        {#each data.headerLinks as link}
          <a href={link.href} class="py-1">{link.label}</a>
        {/each}
        <a href="/contact" class="py-1">Contact</a>
        {#if ls.selectedKit}
          <a
            href="/checkout"
            class="mt-2 bg-emerald-600 text-center py-3 rounded-2xl font-semibold"
            >Checkout</a
          >
        {:else}
          <a
            href="/quote"
            class="mt-2 bg-blue-600 text-center py-3 rounded-2xl font-semibold"
            >Get Quote</a
          >
        {/if}
      </div>
    {/if}
  </nav>

  <!-- Page Content -->
  <div class="pt-20">
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
            <span class="text-xl font-semibold">{data.business.name}</span>
          </div>
          <p class="max-w-xs">
            Turn-key WiFi solutions for custom home builders and luxury estates.
          </p>
          <div class="mt-6 text-xs">
            © 2026 {data.business.name}. All rights reserved.
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
          {#each data.footerLinks as section}
            <div>
              <h4 class="font-semibold text-white mb-4">{section.heading}</h4>
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
