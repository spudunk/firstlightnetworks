<script lang="ts">
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();

  
</script>

<svelte:head>
  <title>Resources & Learning Center • First Light Networks</title>
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-16">
  <h1 class="text-6xl font-bold tracking-tighter">
    Knowledge base for builders.
  </h1>
  <p class="mt-4 text-xl text-zinc-400 max-w-lg">
    Everything you need to confidently specify, sell, and install professional
    WiFi systems.
  </p>

  <!-- Blog -->
  <section class="mt-16">
    <h2 class="text-3xl font-semibold mb-8">Latest Articles</h2>
    <div class="grid md:grid-cols-2 gap-6">
      {#each data.blogPosts as post}
        <a
          href="#"
          class="block bg-zinc-900 hover:bg-zinc-800 transition p-8 rounded-3xl group"
        >
          <div class="text-sm text-zinc-500">{post.date}</div>
          <h3
            class="text-2xl font-semibold mt-3 group-hover:text-blue-400 transition"
          >
            {post.title}
          </h3>
          <p class="mt-4 text-zinc-400">{post.excerpt}</p>
          <div class="mt-6 text-blue-400 text-sm font-medium">
            Read article →
          </div>
        </a>
      {/each}
    </div>
  </section>

  <!-- Downloads -->
  <section class="mt-20">
    <h2 class="text-3xl font-semibold mb-8">Free Downloads</h2>
    <div class="space-y-4">
      {#each data.downloads as d}
        <div
          class="flex flex-col md:flex-row md:items-center justify-between bg-zinc-900 px-8 py-7 rounded-3xl"
        >
          <div>
            <div class="font-semibold text-lg">{d.title}</div>
            <div class="text-sm text-zinc-400">{d.desc}</div>
          </div>
          <div class="mt-4 md:mt-0">
            <button
              onclick={() => alert("Download would start: " + "{d.title}")}
              class="px-8 py-3 bg-white text-black text-sm font-semibold rounded-2xl hover:bg-zinc-200 transition"
              >{d.type}</button
            >
          </div>
        </div>
      {/each}
    </div>
  </section>

  <div class="mt-16 text-center text-sm text-zinc-500">
    More resources available in the Builder Portal after you become a partner.
  </div>
</div>
