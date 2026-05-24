<script lang="ts">
  import { page } from '$app/state';
  import Logo from '$lib/Logo.svelte';

  const status = page.status;
  const message = page.error?.message ?? 'An unexpected error occurred';
</script>

<div class="min-h-[60vh] flex items-center justify-center px-6 pt-20">
  <div class="text-center max-w-md">
    <div class="flex justify-center mb-8">
      <div class="w-20 h-20 rounded-2xl flex items-center justify-center fill-white">
        <Logo />
      </div>
    </div>

    <div class="text-6xl font-bold tracking-tighter mb-4 text-zinc-700">
      {status}
    </div>

    <h1 class="text-3xl font-semibold mb-3">
      {#if status === 404}
        Page not found
      {:else}
        Something went wrong
      {/if}
    </h1>

    <p class="text-zinc-400 mb-8">
      {message}
    </p>

    <div class="flex flex-col sm:flex-row gap-3 justify-center">
      <a
        href="/"
        class="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-2xl font-medium hover:bg-zinc-200 transition"
      >
        Go to homepage
      </a>
      <a
        href="/contact"
        class="inline-flex items-center justify-center border border-zinc-700 hover:bg-zinc-900 px-6 py-3 rounded-2xl font-medium transition"
      >
        Contact support
      </a>
    </div>
  </div>
</div>
