import { business, steps, projects, kits } from "$lib";
import { z } from 'zod';


export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: business.name,
  legalName: business.legalName,
  url: "https://firstlightnetworks.com",
  description:
    "First Light Networks provides turnkey WiFi solutions for custom home builders. Reliable indoor and outdoor coverage with fast professional installation across the US.",
  areaServed: "United States",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating.score,
    reviewCount: business.rating.count,
  },
  knowsAbout: ["WiFi", "Home Networking", "Custom Home Construction", "Pre-configured Network Kits"],
  serviceType: "Wireless Network Installation Services",
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: business.name,
  url: "https://firstlightnetworks.com",
  description:
    "Turn-key WiFi solutions for custom home builders and luxury estates.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://firstlightnetworks.com/quote?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How First Light Networks Delivers Turnkey WiFi for Custom Homes",
  description:
    "A simple 5-step process to get reliable, pre-configured indoor and outdoor WiFi installed in new construction homes.",
  totalTime: "P3DT5H",
  step: steps.map((step: any, index: number) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.desc,
  })),
}

export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "First Light Networks Project Portfolio",
  description: "Real-world WiFi installations for luxury homes, estates, and custom construction projects.",
  itemListElement: projects.map((project: any, index: number) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.excerpt.join(" "),
      about: {
        "@type": "Thing",
        name: project.type,
      },
      result: project.result,
    },
  })),
}

export const solutionsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pre-Configured WiFi Kits for Custom Homes",
  description:
    "Professional indoor, outdoor, and whole-home WiFi systems designed for builders. Pre-configured kits that save time and deliver powerful coverage.",
  provider: {
    "@type": "Organization",
    name: business.name,
    url: "https://firstlightnetworks.com",
  },
  areaServed: "United States",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "WiFi Kits",
    itemListElement: kits.map((kit: any, index: number) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: kit.title,
        description: kit.subtitle,
      },
      position: index + 1,
      price:
        kit.price === "Custom Pricing" ? null : kit.price.replace("$", ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    })),
  },
};



export const quoteSchema = z.object({
  // 1. Contact Information
  fullName: z.string().min(1, 'Full name is required'),
  company: z.string().min(1, 'Company is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.email('Valid email is required'),
  jobTitle: z.string().min(1, 'Job title is required'),

  // 2. Project Details
  location: z.string().min(1, 'Location is required'),
  projectType: z.enum(['new-construction', 'renovation', 'multiple']),
  numberOfHomes: z.number().int().positive(),
  expectedStartDate: z.string().min(1, 'Start date is required'),
  roughInPhase: z.string().optional(),
  totalHomesPlanned: z.number().int().positive().optional(),

  // 3. Home Specifications
  squareFootage: z.number().positive(),
  numberOfStories: z.enum(['1', '2', '3', '4+']),
  numberOfUnits: z.object({
    mainHouse: z.number().int().nonnegative().default(1),
    guestHouse: z.number().int().nonnegative().default(0),
    garage: z.number().int().nonnegative().default(0),
    poolHouse: z.number().int().nonnegative().default(0)
  }),
  specialNotes: z.string().optional(),

  // 4. Coverage Requirements
  indoorCoverage: z.array(z.string()).min(1, 'Select at least one indoor coverage option'),
  outdoorCoverage: z.array(z.string()).default([]),
  desiredPerformance: z.enum(['basic', 'high', 'ultra']),

  // 5. Additional Requirements
  needsPoeCabling: z.boolean().default(false),
  integrations: z.array(z.string()).default([]),
  brandPreferences: z.string().optional(),

  // 6. Optional Fields
  budgetRange: z.enum(['under-3k', '3k-6k', '6k-10k', '10k+']).optional(),
  howHeard: z.string().optional(),
  additionalInfo: z.string().optional(),
  // files handled separately or as FileList but for schema just optional
  files: z.any().optional()
});

export type QuoteSchema = z.infer<typeof quoteSchema>;