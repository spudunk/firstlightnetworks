<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>Portfolio & Case Studies • First Light Networks</title>
  <meta name="description" content="Explore real installations by First Light Networks. See how we deliver exceptional WiFi coverage to luxury homes, backyards, and new construction developments.">
</svelte:head>

<main class="max-w-7xl mx-auto px-6 py-16">
  <h1 class="text-6xl font-bold tracking-tighter">
    Real results.<br />Real homes.
  </h1>
  <p class="mt-4 max-w-lg text-xl text-zinc-400">
    Selected rural residential, commercial, and agricultural projects with
    professional networking and WiFi solutions.
  </p>

  <div class="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
    {#each data.projects as project}
      <div
        class="group rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col"
      >
        <!-- Abstract visual header -->
        <div
          class="h-3 bg-linear-to-r from-emerald-500/60 via-emerald-400/40 to-transparent"
        ></div>

        <div class="p-8 flex-1 flex flex-col">
          <div class="flex items-center gap-3">
            <div
              class="uppercase tracking-[2px] text-xs text-emerald-400 font-medium"
            >
              {project.type}
            </div>
          </div>

          <h2 class="text-3xl font-semibold mt-3 tracking-tight">
            {project.title}
          </h2>
          <div class="mt-1 text-lg text-zinc-400">{project.subtitle}</div>

          <div
            class="mt-6 text-zinc-300 leading-relaxed flex-1 space-y-4 max-w-prose mx-auto"
          >
            {#each project.excerpt as paragraph}
              <p>{paragraph}</p>
            {/each}
          </div>

          <div class="mt-auto pt-8 border-t border-zinc-700 text-sm">
            <div class="font-semibold text-emerald-400">Result</div>
            <div class="text-zinc-300 mt-2">{project.result}</div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Testimonials with builder names -->
  <!-- 
	<div class="mt-20">
		<h2 class="text-center text-4xl font-semibold mb-12">What our builder partners say</h2>
		<div class="grid md:grid-cols-2 gap-8">
			{#each data.testimonials as t}
				<div class="bg-zinc-900 p-10 rounded-3xl">
					<p class="text-xl leading-relaxed">“{t.quote}”</p>
					<div class="mt-10 font-semibold">{t.name}<div class="font-normal text-sm text-zinc-400">{t.role}</div></div>
				</div>
			{/each}
		</div>
	</div>
	-->
</main>
