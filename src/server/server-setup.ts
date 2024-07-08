import { config, type MiddlewareConfigFn } from "wasp/server";
import cors from "cors";
import express from "express";

export const corsMiddlewareFn: MiddlewareConfigFn = (middlewareConfig) => {
  const corsMiddleware: express.RequestHandler = (_req, _res, next) => {
    middlewareConfig.set("cors", cors({ origin: [config.frontendUrl] }));
    next();
  };

  middlewareConfig.set("cors.middleware", corsMiddleware);

  return middlewareConfig;
};
