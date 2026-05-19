import { z } from 'zod';

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