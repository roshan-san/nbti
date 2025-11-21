import { app } from "./app";

// Export the Hono app for Vercel serverless functions
// Hono 4.x automatically handles the fetch API interface
export default app;