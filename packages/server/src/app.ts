import { Hono } from "hono";
import type { HonoAuthContext } from "./lib/auth";
import { testRoute } from "./routes/test.route";

export const app = new Hono<HonoAuthContext>()
    .route("/test", testRoute);