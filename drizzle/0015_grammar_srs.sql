CREATE TABLE "grammar_progress" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"point_id" text NOT NULL,
	"stage" smallint DEFAULT 1 NOT NULL,
	"next_review_at" timestamp with time zone,
	"last_reviewed_at" timestamp with time zone,
	"last_sentence_id" text,
	"times_correct" integer DEFAULT 0 NOT NULL,
	"times_wrong" integer DEFAULT 0 NOT NULL,
	"streak" integer DEFAULT 0 NOT NULL,
	"unlocked_at" timestamp with time zone DEFAULT now() NOT NULL,
	"burned" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "grammar_reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"point_id" text NOT NULL,
	"sentence_id" text NOT NULL,
	"correct" boolean NOT NULL,
	"answer_given" text NOT NULL,
	"stage_before" smallint NOT NULL,
	"stage_after" smallint NOT NULL,
	"previous" jsonb,
	"reviewed_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "grammar_settings" (
	"user_id" text PRIMARY KEY NOT NULL,
	"daily_new_limit" smallint DEFAULT 5 NOT NULL,
	"review_batch_size" smallint DEFAULT 20 NOT NULL,
	"show_furigana" boolean DEFAULT true NOT NULL,
	"show_translation" boolean DEFAULT true NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "grammar_progress" ADD CONSTRAINT "grammar_progress_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grammar_reviews" ADD CONSTRAINT "grammar_reviews_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grammar_settings" ADD CONSTRAINT "grammar_settings_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "grammar_progress_user_point_idx" ON "grammar_progress" USING btree ("user_id","point_id");--> statement-breakpoint
CREATE INDEX "grammar_progress_user_next_review_idx" ON "grammar_progress" USING btree ("user_id","next_review_at");--> statement-breakpoint
CREATE INDEX "grammar_reviews_user_reviewed_idx" ON "grammar_reviews" USING btree ("user_id","reviewed_at");