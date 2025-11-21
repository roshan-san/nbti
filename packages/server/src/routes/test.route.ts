// import type { contracts } from "@nbti/shared";
import { Hono } from "hono";

export const testRoute = new Hono()
    .get("/", async (c) => {
        return c.json({
            success: true,
            message: "Test route is working!",
        });
    });