import { pgTable } from "drizzle-orm/pg-core";
import { text } from "drizzle-orm/pg-core";

export const profileTable = pgTable("profile", {
    id: text("id").primaryKey(),
    full_name: text("full_name").notNull(),
    username: text("username").notNull().unique(),
    bio: text("bio"),
}); 