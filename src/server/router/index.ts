// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { tripRouter } from "./trip";
import { authRouter } from "./auth";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("trip.", tripRouter)
  .merge("auth.", authRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
