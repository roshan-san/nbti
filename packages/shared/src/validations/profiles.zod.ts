import { createInsertSchema } from "drizzle-zod";
import { profileTable } from "../database/schema/profiles";

export const ProfileSchema = createInsertSchema(profileTable)