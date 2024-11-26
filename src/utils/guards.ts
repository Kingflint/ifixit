import type { OrderStatus } from "../data/constants";

const STATUSES: OrderStatus[] = [
  "order-placed",
  "delivery-started",
  "item-picked-up",
  "service-started",
  "service-completed",
  "awaiting-repair-payment",
  "repair-payment-completed",
  "repair-started",
  "repair-completed",
  "ready-for-return",
  "return-in-progress",
  "completed",
  "cancelled",
];

export function isOrderStatus(value: unknown): value is OrderStatus {
  return typeof value === "string" && (STATUSES as string[]).includes(value);
}

export function assertOrderStatus(value: unknown, label = "value"): asserts value is OrderStatus {
  if (!isOrderStatus(value)) {
    throw new Error(`${label} is not an OrderStatus: ${String(value)}`);
  }
}