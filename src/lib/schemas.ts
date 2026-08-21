import { z } from 'zod';

import { business, steps, projects, kits } from "$lib";


/**
 * JSON-LD Schemas
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  legalName: business.legalName,
  url: "https://firstlightnetworks.com",
  description:
    "First Light Networks provides turnkey WiFi solutions for home builders. Reliable indoor and outdoor coverage with professional installation across the US.",
  areaServed: "United States",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating.score,
    reviewCount: business.rating.count,
  },
  knowsAbout: ["WiFi", "Home Networking", "Custom Home Construction", "Pre-configured Network Kits"],
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

/***
 * Form Validation Schemas
 */

const formInt = (constraints: z.ZodNumber) =>
	z.preprocess((value) => {
		if (value === '' || value == null) return undefined;
		const parsed = Number(value);
		return Number.isFinite(parsed) ? parsed : value;
	}, constraints.int());

const checkbox = z.preprocess(
	(value) => value != null && value !== 'false' && value !== '0',
	z.boolean()
);

export const quoteSchema = z.object({
	name: z.string().min(1, 'Name cannot be blank'),
	email: z.email('invalid email'),
	phone: z.string().min(1, 'Phone cannot be blank'),
	numberRooms: formInt(z.number().positive()),
	numberAcres: formInt(z.number().nonnegative()),
	cameras: checkbox,
	accessControl: checkbox,
	multiWAN: checkbox,
	parentalControls: checkbox
});
