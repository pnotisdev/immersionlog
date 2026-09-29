CREATE TABLE "kanji_progress" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"kanji" text NOT NULL,
	"stage" smallint DEFAULT 1 NOT NULL,
	"next_review_at" timestamp with time zone,
	"last_reviewed_at" timestamp with time zone,
	"times_correct" integer DEFAULT 0 NOT NULL,
	"times_wrong" integer DEFAULT 0 NOT NULL,
	"streak" integer DEFAULT 0 NOT NULL,
	"unlocked_at" timestamp with time zone DEFAULT now() NOT NULL,
	"burned" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "kanji_reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"kanji" text NOT NULL,
	"correct" boolean NOT NULL,
	"meaning_ok" boolean,
	"on_ok" boolean,
	"kun_ok" boolean,
	"stage_before" smallint NOT NULL,
	"stage_after" smallint NOT NULL,
	"reviewed_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "kanji_settings" (
	"user_id" text PRIMARY KEY NOT NULL,
	"daily_new_limit" smallint DEFAULT 10 NOT NULL,
	"review_batch_size" smallint DEFAULT 30 NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "kanji_progress" ADD CONSTRAINT "kanji_progress_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kanji_reviews" ADD CONSTRAINT "kanji_reviews_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kanji_settings" ADD CONSTRAINT "kanji_settings_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "kanji_progress_user_kanji_idx" ON "kanji_progress" USING btree ("user_id","kanji");--> statement-breakpoint
CREATE INDEX "kanji_progress_user_next_review_idx" ON "kanji_progress" USING btree ("user_id","next_review_at");--> statement-breakpoint
CREATE INDEX "kanji_reviews_user_reviewed_idx" ON "kanji_reviews" USING btree ("user_id","reviewed_at");