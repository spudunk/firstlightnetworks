<script lang="ts">
  import { enhance } from "$app/forms";
  // import { page } from "$app/state";

  let { data, form } = $props();

  let submitting = $state(false);
  let submitted = $state(false);
</script>

<svelte:head>
  <title>Request a Custom WiFi Quote • First Light Networks</title>
  <meta
    name="description"
    content="Request a personalized quote for premium WiFi kits designed for custom homes. First Light Networks offers fast quotes and builder-focused recommendations nationwide."
  />
</svelte:head>

<main class="min-h-screen bg-zinc-950 text-white">
  <div class="max-w-5xl mx-auto px-6 pt-24 pb-16">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold tracking-tighter">
        Get Your Custom WiFi Quote
      </h1>
      <p class="text-xl text-zinc-400 mt-3">
        Most quotes are delivered within 24 hours
      </p>
    </div>

    <form
      method="POST"
      use:enhance={() => {
        submitting = true;
        return async ({ result, update }) => {
          await update();
          submitting = false;
          if (result.type === 'success') submitted = true;
        };
      }}
      class="flex flex-col gap-6 my-12"
      action="?/submit"
    >
      <label class="flex flex-col gap-2">
        Name
        <input class="bg-neutral-800 rounded px-2" type="text" name="name" />
      </label>

      <label class="flex flex-col gap-2">
        Email
        <input class="bg-neutral-800 rounded px-2" type="email" name="email" />
      </label>

      <label class="flex flex-col gap-2">
        Phone
        <input class="bg-neutral-800 rounded px-2" type="tel" name="phone" placeholder="(828) 555-1234" />
      </label>

      <label class="flex flex-col gap-2">
        Number of Rooms
        <input class="bg-neutral-800 rounded px-2" type="number" name="numberRooms" defaultValue=4 />
      </label>

      <label class="flex flex-col gap-2">
        Number of Acres
        <input class="bg-neutral-800 rounded px-2" type="number" name="numberAcres" defaultValue=5 />
      </label>

      <div class="flex flex-col gap-2">
        <p>Additional Integrations: </p>

        <label class="flex gap-2">
          <input type="checkbox" name="cameras" />
          Security Cameras
        </label>

        <label class="flex gap-2">
          <input type="checkbox" name="accessControl" />
          Access Controls
        </label>

        <label class="flex gap-2">
          <input type="checkbox" name="multiWAN" />
          Redundant ISPs? (ex: Fiber with Starlink failover)
        </label>

        <label class="flex gap-2">
          <input type="checkbox" name="parentalControls" />
          Advanced parental controls
        </label>

      </div>

      <div>
        <button
          disabled={submitting || submitted}
          class="border border-neutral-500 rounded px-2 disabled:border-neutral-700 disabled:text-neutral-700"
          type="submit"
        >
          Submit
        </button>
      </div>

      <span class="min-h-6 w-full">
        {#if submitting} <p>submitting...</p> {/if}

        {#if form?.message} 
          <p class="text-green-400">{form.message}</p> 
        {/if}   

        {#if form?.error}
          <p class="text-red-500">{form.error}</p>
        {/if}
      </span>
    </form>
  </div>
</main>
