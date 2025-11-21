import { EnhancedQueryLogger } from "drizzle-query-logger";
import "dotenv/config";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { schema } from "@nbti/shared";
import {
  drizzle as neonDrizzle,
  NeonHttpDatabase,
} from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { Pool } from "pg";

const logger = new EnhancedQueryLogger();

// Validate required environment variable
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL environment variable is required but not set. " +
    "Please ensure it's configured in your Vercel environment variables."
  );
}

export let db: NodePgDatabase<typeof schema> | NeonHttpDatabase<typeof schema>;

// Initialize database connection with proper error handling
try {
  const isProduction = process.env.NODE_ENV === "production" || process.env.VERCEL;

  if (isProduction) {
    // For Vercel/serverless: use Neon HTTP driver
    const sql = neon(process.env.DATABASE_URL);
    db = neonDrizzle(sql, { schema, logger });
  } else {
    // For local development: use connection pool
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: false,
    });

    db = drizzle(pool, {
      schema,
      logger,
    });
  }
} catch (error) {
  console.error("Failed to initialize database connection:", error);
  throw new Error(
    `Database initialization failed: ${error instanceof Error ? error.message : "Unknown error"}. ` +
    "This may be due to invalid DATABASE_URL or network connectivity issues."
  );
}
