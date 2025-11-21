import { EnhancedQueryLogger } from "drizzle-query-logger";
import "dotenv/config";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { schema } from "@nbti/shared";
import {
  drizzle as neonDrizzle,
  NeonHttpDatabase,
} from "drizzle-orm/neon-http";
import { Pool } from "pg";

const logger = new EnhancedQueryLogger();
export let db: NodePgDatabase<typeof schema> | NeonHttpDatabase<typeof schema>;

const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
  db = neonDrizzle(process.env.DATABASE_URL!, { schema, logger });
} else {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
    ssl: false,
  });

  db = drizzle(pool, {
    schema,
    logger,
  });
}
