import { Hono } from "hono";
import { testRoute } from "./routes/test.route";
import { type HonoAuthContext } from "./lib/auth";
// import { cors } from "hono/cors";
// import { HTTPException } from "hono/http-exception";
// import type { contracts } from "@nbti/shared";
// import { logger } from "hono/logger";
export const app = new Hono<HonoAuthContext>()
    .basePath("/v1")
    // .use("*", cors({
    //     origin: (origin) => origin,
    //     credentials: true,
    //     allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    //     allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    //     exposeHeaders: ['Set-Cookie'],
    //     maxAge: 86400,
    // }))
    // .onError((err, c) => {
    //     console.error(err);
    //     if (err instanceof HTTPException) {
    //         const status = err.status;
    //         const message = err.message || "Request failed";
    //         return c.json<contracts.ErrorResponse>({ success: false, message }, status);
    //     }
    //     return c.json<contracts.ErrorResponse>({ success: false, message: "Internal server error" }, 500);
    // })
    // .use(logger())
    // .on(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], "/auth/*", (c) => {
    //     return auth.handler(c.req.raw);
    // })
    .route("/test", testRoute);