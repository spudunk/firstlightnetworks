<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>Privacy Policy • First Light Networks WiFi</title>
  <meta name="description" content="Read the First Light Networks privacy policy to understand how we collect, use, and protect your personal data when using our website and WiFi services.">
</svelte:head>

<main class="max-w-prose mx-auto px-6 py-16">
  <div class="uppercase tracking-[3px] text-blue-500 text-sm font-medium mb-3">LEGAL</div>
  <h1 class="text-6xl font-bold tracking-tighter mb-4">Privacy Policy</h1>
  <p class="text-xl text-zinc-400">Last updated: May 24, 2026</p>

  <div class="prose prose-invert max-w-none mt-12 text-lg text-zinc-300 space-y-8">
    <p>
      First Light Networks ("we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Information We Collect</h2>
    <p>We collect information that you voluntarily provide to us when you:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Submit a quote request or contact form (name, email, phone, project details)</li>
      <li>Purchase pre-configured kits or services through our checkout (billing and shipping information)</li>
      <li>Communicate with us via email or other channels</li>
    </ul>
    <p>
      We may also automatically collect certain information about your device, including IP address, browser type, and pages visited, through cookies and similar technologies for analytics and site improvement.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">How We Use Your Information</h2>
    <p>We use the information we collect to:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Provide, operate, and maintain our services</li>
      <li>Process transactions and send related information</li>
      <li>Respond to your inquiries and provide customer support</li>
      <li>Improve our website, products, and services</li>
      <li>Comply with legal obligations</li>
    </ul>

    <h2 class="text-3xl font-semibold text-white mt-12">Third-Party Services</h2>
    <p>
      We use third-party services such as Stripe for payment processing. These services have their own privacy policies. We do not store your full payment card details on our servers.
    </p>
    <p>
      We may use analytics providers to understand how visitors use our site. These providers collect information such as device data and usage patterns.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Data Retention and Security</h2>
    <p>
      We retain your information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. We implement appropriate technical and organizational measures to protect your personal information.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Your Rights</h2>
    <p>
      Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal information. To exercise these rights, please contact us using the information below.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Changes to This Policy</h2>
    <p>
      We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated "Last updated" date.
    </p>

    <h2 class="text-3xl font-semibold text-white mt-12">Contact Us</h2>
    <p>
      If you have any questions about this Privacy Policy, please contact us at <a href="/contact" class="text-blue-400 hover:underline">our contact page</a> or email us directly.
    </p>
  </div>
</main>
