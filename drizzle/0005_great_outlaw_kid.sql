ALTER TABLE "user" ADD COLUMN "bio" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "profile_links" jsonb DEFAULT '[]'::jsonb NOT NULL;