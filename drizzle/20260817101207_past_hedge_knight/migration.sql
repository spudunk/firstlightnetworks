CREATE TABLE `leads` (
	`id` text PRIMARY KEY,
	`created_at` integer,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`numberRooms` integer DEFAULT 4 NOT NULL,
	`numberAcres` integer DEFAULT 5 NOT NULL,
	`cameras` integer DEFAULT false NOT NULL,
	`accessControl` integer DEFAULT false NOT NULL,
	`multiWAN` integer DEFAULT false NOT NULL,
	`parentalControls` integer DEFAULT false NOT NULL
);
