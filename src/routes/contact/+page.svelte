<script lang="ts">
  import Phone from "virtual:icons/proicons/phone";
  import Mail from "virtual:icons/proicons/mail";
  import Location from "virtual:icons/proicons/location";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let formData = $state({
    name: "",
    email: "",
    phone: "",
    sqft: "",
    floors: "",
    outdoor: "",
    details: "",
  });

  let submitted = $state(false);

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    // In real app this would post to server action
    submitted = true;
    setTimeout(() => {
      alert(
        "Thanks! We'll contact you within 24 hours with your custom quote.",
      );
      submitted = false;
      formData = {
        name: "",
        email: "",
        phone: "",
        sqft: "",
        floors: "",
        outdoor: "",
        details: "",
      };
    }, 800);
  }

  type Contact = {
    tel: string;
    telLink: string;
    email: string;
    emailLink: string;
  };

  async function decipher(b64contact: Contact): Promise<Contact> {
    return new Promise((fulfil) => {
      setTimeout(() => {
        const c: Contact = {
          tel: atob(b64contact.tel),
          telLink: atob(b64contact.telLink),
          email: atob(b64contact.email),
          emailLink: atob(b64contact.emailLink),
        };
        fulfil(c);
      }, 5000);
    });
  }

  let counter: number = $state(5);
  let waitMessage = $derived("" + counter + " seconds, human");
  let interval = setInterval(() => {
    counter--;
    if (counter <= 0) {
      clearInterval(interval);
    }
  }, 1000);

  // svelte-ignore state_referenced_locally
  const promise: Promise<Contact> = decipher(data.contact);
</script>

<svelte:head>
  <title>Contact & Get Quote • First Light Networks</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-16">
  <div class="flex flex-col gap-4">
    <h1 class="text-6xl font-bold tracking-tighter">
      Let's build your modern network.
    </h1>
    <p class="mt-6 text-xl text-zinc-400">
      Tell us about your project and we'll get back to you
      within 24 hours.
    </p>

    <!-- <div class="mt-8 text-sm text-zinc-500">Prefer a call? <a href="#" class="text-blue-400 hover:underline">Schedule a 15-min discovery call →</a></div> -->

    <!-- Native Form -->
    {#if false}
      <div class="hidden">
        {#if !submitted}
          <form
            inert
            onsubmit={handleSubmit}
            class="space-y-5 bg-zinc-900 p-8 rounded-3xl"
          >
            <div class="grid grid-cols-1 gap-5">
              <input
                bind:value={formData.name}
                type="text"
                placeholder="Your name"
                class="bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-blue-600"
                required
              />
              <input
                bind:value={formData.email}
                type="email"
                placeholder="Work email"
                class="bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-blue-600"
                required
              />
              <input
                bind:value={formData.phone}
                type="tel"
                placeholder="Phone number"
                class="bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-blue-600"
              />
            </div>

            <textarea
              bind:value={formData.details}
              placeholder="Message"
              rows="4"
              class="bg-zinc-950 border border-zinc-800 rounded-3xl px-6 py-4 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-blue-600 w-full resize-y"
            ></textarea>

            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-semibold transition"
            >
              Contact
            </button>
            <div class="text-center text-xs text-zinc-500">
              Most responses are same day
            </div>
          </form>
        {:else}
          <div class="bg-zinc-900 p-12 rounded-3xl text-center">
            Submitting...
          </div>
        {/if}
      </div>
    {/if}

    <!-- HubSpot Form -->
    <script
      src="https://js-na2.hsforms.net/forms/embed/246308218.js"
      defer
    ></script>
    <div
      class="hs-form-frame bg-neutral-100 rounded mt-12 min-h-[720px]"
      data-region="na2"
      data-form-id="1fcf4c95-88bf-4f08-9144-eee5ab4d6cdb"
      data-portal-id="246308218"
    ></div>

    <div class="mt-10">
      {#await promise}
        <span class="flex items-center gap-1 py-2"
          ><span class="text-blue-200"><Phone /></span>Phone in {waitMessage}</span
        >
        <span class="flex items-center gap-1 py-2"
          ><span class="text-blue-200"><Mail /></span>Email in {waitMessage}</span
        >
      {:then contact}
        <a href={contact.telLink} class="flex items-center gap-1 py-2"
          ><span class="text-blue-200"><Phone /></span> {contact.tel}</a
        >
        <a href={contact.emailLink} class="flex items-center gap-1 py-2"
          ><span class="text-blue-200"><Mail /></span> {contact.email}</a
        >
      {/await}
      <div class="flex items-center gap-1 py-2">
        <span class="text-blue-200"><Location /></span> Based in Burke County, NC.
        Serving builders nationwide
      </div>
    </div>
  </div>
</div>
