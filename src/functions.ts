import jsSHA from "jssha";
import type { PayTRBasketItem, PayTRBasketItemArray } from "./types";

export function calculateHash(input: any[], key: string): string {
  const sha = new jsSHA("SHA-256", "TEXT");
  sha.setHMACKey(key, "TEXT");
  sha.update(input.join(""));
  return sha.getHMAC("B64");
}

export function encodeUserBasket(basket: PayTRBasketItem[]): string {
  const items = new Array<PayTRBasketItemArray>(basket.length);
  for (let i = 0; i < basket.length; i++) {
    const item = basket[i];
    if (Array.isArray(item)) {
      items[i] = item;
    } else {
      items[i] = [item.name, item.price, item.quantity];
    }
  }
  return Buffer.from(JSON.stringify(items)).toString("base64");
}

export function prepareParams(
  input: Record<string, any>
): Record<string, string> {
  const record: Record<string, string> = {};
  for (const key in input) {
    const value = input[key];
    switch (typeof value) {
      case "string":
        record[key] = value;
        break;
      case "boolean":
        record[key] = value ? "1" : "0";
        break;
      case "number":
        record[key] = value.toString();
        break;
    }
  }
  return record;
}