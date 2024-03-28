import type {
  PayTRConstructorParams,
  PayTRDirectApiParams,
  PayTRDirectApiResponse,
  PayTRGetTokenParams,
  PayTRGetTokenResponse,
  PayTRRefundParams,
  PayTRRefundResponse,
  PayTRValidateCallbackParams,
} from "./types";
export declare class PayTR {
  private _merchantParams;
  private _client;
  constructor(params: PayTRConstructorParams);
  getToken(params: PayTRGetTokenParams): Promise<PayTRGetTokenResponse>;
  directApi(params: PayTRDirectApiParams): Promise<PayTRDirectApiResponse>;
  validateCallback(params: PayTRValidateCallbackParams): boolean;
  refund(params: PayTRRefundParams): Promise<PayTRRefundResponse>;
}
//# sourceMappingURL=client.d.ts.map
