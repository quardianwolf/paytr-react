import type { RequestHandler } from "express";
import type { PayTRClient } from "./client";
interface CallbackOptions {
  errorHandler:
    | "RespondBadRequest"
    | {
        redirectTo: string;
      }
    | RequestHandler;
}
export declare function callback(
  client: PayTRClient,
  options?: CallbackOptions
): RequestHandler;
export {};
//# sourceMappingURL=server.d.ts.map
