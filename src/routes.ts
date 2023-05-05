import { Express, Request, Response } from "express";
import {
    createUserSessionHandler,
    getUserSessionsHandler,
    deleteSessionHandler,
  } from "./controller/session.controller";
  import { createUserHandler } from "./controller/user.controller";
  import requireUser from "./middleware/requireUser";
  import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";
import { createSessionSchema } from "./schema/session.schema";

function routes(app: Express) {
  /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);

  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionHandler
  );

  app.get("/api/sessions", requireUser, getUserSessionsHandler);

}

export default routes;
