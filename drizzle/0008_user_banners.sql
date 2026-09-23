CREATE TABLE "user_banners" (
	"user_id" text PRIMARY KEY NOT NULL,
	"data" "bytea",
	"content_type" text,
	"media_item_id" uuid,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user_banners" ADD CONSTRAINT "user_banners_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_banners" ADD CONSTRAINT "user_banners_media_item_id_media_items_id_fk" FOREIGN KEY ("media_item_id") REFERENCES "public"."media_items"("id") ON DELETE set null ON UPDATE no action;