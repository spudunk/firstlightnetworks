<script lang="ts">
  import { business } from "$lib";
  import TikTokIcon from "virtual:icons/simple-icons/tiktok";
  import FacebookIcon from "virtual:icons/simple-icons/facebook";

  const tiktokHandle =
    business.tiktok.match(/@([^/?#]+)/)?.[1] ?? "firstlightnetworks";
  const videoId = business.featuredTikTok.match(/\/video\/(\d+)/)?.[1] ?? "";

  $effect(() => {
    const src = "https://www.tiktok.com/embed.js";
    if (document.querySelector(`script[src="${src}"]`)) return;

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  });
</script>

<section class="py-20 bg-zinc-900 border-b border-zinc-800">
  <div
    class="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[1fr_minmax(288px,400px)] items-center"
  >
    <div class="space-y-6">
      <div
        class="uppercase tracking-[3px] text-blue-500 text-sm font-medium"
      >
        Behind the systems
      </div>
      <h2 class="text-4xl md:text-5xl font-semibold tracking-tight">
        See the work. Meet the person you’ll actually talk to.
      </h2>
      <p class="text-lg text-zinc-400 max-w-xl">
        I post from the shop and the job site — how these systems go together,
        what outdoor coverage really looks like, and the unglamorous parts of
        making Wi-Fi work across a whole property.
      </p>

      <div class="flex flex-wrap gap-3 pt-2">
        <a
          href={business.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-zinc-200 transition"
        >
          <TikTokIcon class="size-5" />
          Watch on TikTok
        </a>
        <a
          href={business.facebook}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-400 px-6 py-3 rounded-2xl font-semibold transition"
        >
          <FacebookIcon class="size-5" />
          Facebook
        </a>
      </div>
    </div>

    <div class="w-full max-w-100 mx-auto min-h-80">
      {#if videoId}
        <blockquote
          class="tiktok-embed"
          cite={business.featuredTikTok}
          data-video-id={videoId}
          style="max-width: 605px; min-width: 325px;"
        >
          <section>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={business.featuredTikTok}
            >
              @{tiktokHandle}
            </a>
          </section>
        </blockquote>
      {:else}
        <blockquote
          class="tiktok-embed"
          cite={business.tiktok}
          data-unique-id={tiktokHandle}
          data-embed-type="creator"
          style="max-width: 780px; min-width: 288px;"
        >
          <section>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="{business.tiktok}?refer=embed"
            >
              @{tiktokHandle}
            </a>
          </section>
        </blockquote>
      {/if}
    </div>
  </div>
</section>
