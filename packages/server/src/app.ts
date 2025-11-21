import { Hono } from "hono";
import { testRoute } from "./routes/test.route";
// import { cors } from "hono/cors";
// import { HTTPException } from "hono/http-exception";
// import type { contracts } from "@nbti/shared";
// import { logger } from "hono/logger";
export const app = new Hono()
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
    .onError((err, c) => {
        console.error("EDGE ERROR:", err);
        // Log full error details for debugging
        if (err.stack) {
            console.error("Error stack:", err.stack);
        }
        // Return user-friendly error message
        const message = err.message || "Internal server error";
        return c.json({ error: message, success: false }, 500);
    })
    .route("/test", testRoute);