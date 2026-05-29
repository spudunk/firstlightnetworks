<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>Terms of Service • {data.business.name}</title>
  <meta name="description" content="First Light Networks Terms of Service. Read our policies on website use, product purchases, shipping, warranty, and builder program terms.">
</svelte:head>

<main class="max-w-prose mx-auto px-6 py-16">
  <div class="uppercase tracking-[3px] text-blue-500 text-sm font-medium mb-3">LEGAL</div>
  <h1 class="text-6xl font-bold tracking-tighter mb-4">Terms of Service</h1>
  <p class="text-xl text-zinc-400">Last updated: May 24, 2026</p>

  <div class="prose prose-invert max-w-none mt-12 text-lg text-zinc-300 space-y-8">
    <p>
      These Terms of Service ("Terms") govern your access to and use of the First Light Networks website and services (the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Use of Services</h2>
    <p>
      You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services in any way that violates any applicable laws or regulations.
    </p>
    <p>
      Our pre-configured network kits and solutions are designed for professional installation. While we provide detailed instructions, we recommend installation by qualified electricians or network technicians, especially for new construction projects.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Orders and Payments</h2>
    <p>
      All purchases are subject to availability. We reserve the right to refuse or cancel any order at our sole discretion. Prices are subject to change without notice.
    </p>
    <p>
      Payment is processed securely through Stripe. You agree to provide accurate and complete billing information. You are responsible for any taxes applicable to your purchase.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Intellectual Property</h2>
    <p>
      All content on this website, including but not limited to text, graphics, logos, and images, is the property of First Light Networks or its licensors and is protected by copyright and other intellectual property laws.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Limitation of Liability</h2>
    <p>
      To the fullest extent permitted by law, First Light Networks shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Services.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Warranty Disclaimer</h2>
    <p>
      The Services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the Services will be uninterrupted or error-free.
    </p>
    <p>
      Hardware products come with manufacturer warranties where applicable. We offer support for our pre-configured systems as outlined in your purchase documentation.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Governing Law</h2>
    <p>
      These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Changes to Terms</h2>
    <p>
      We reserve the right to modify these Terms at any time. We will provide notice of material changes by updating the "Last updated" date. Your continued use of the Services after such changes constitutes acceptance of the new Terms.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Contact</h2>
    <p>
      If you have any questions about these Terms, please reach out via our <a href="/contact" class="text-blue-400 hover:underline">contact page</a>.
    </p>
  </div>
</main>
