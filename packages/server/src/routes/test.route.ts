import type { HonoAuthContext } from "@/lib/auth";
import type { contracts } from "@nbti/shared";
import { Hono } from "hono";

export const testRoute = new Hono<HonoAuthContext>()
    .get("/", async (c) => {
        return c.json<contracts.SuccessResponse>({
            success: true,
            message: "Test route is working!",
        });
    });