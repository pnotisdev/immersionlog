CREATE TABLE "media_difficulty_votes" (
	"media_item_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"value" smallint NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "media_difficulty_votes_media_item_id_user_id_pk" PRIMARY KEY("media_item_id","user_id")
);
--> statement-breakpoint
ALTER TABLE "media_difficulty_votes" ADD CONSTRAINT "media_difficulty_votes_media_item_id_media_items_id_fk" FOREIGN KEY ("media_item_id") REFERENCES "public"."media_items"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_difficulty_votes" ADD CONSTRAINT "media_difficulty_votes_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "media_difficulty_votes_media_idx" ON "media_difficulty_votes" USING btree ("media_item_id");