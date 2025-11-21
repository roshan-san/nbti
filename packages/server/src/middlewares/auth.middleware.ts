import { auth, type HonoAuthContext } from "@/lib/auth";
import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";

export const withAuth = createMiddleware<HonoAuthContext>(
  async (c, next) => {
    try {
      const session = await auth.api.getSession({ headers: c.req.raw.headers })
      if (!session) {
        throw new HTTPException(401, { message: "Unauthorized" });
      }
      c.set('user', session.user);
      c.set('session', session.session);
      await next();
    } catch (error) {
      console.error('Auth middleware error:', error);
      throw new HTTPException(401, { message: "Unauthorized" });
    }
  }
);
