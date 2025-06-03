import type { OrderStatus } from "../data/constants";

// Target time-in-state for each repair status, in hours.
export const SLA_HOURS: Partial<Record<OrderStatus, number>> = {
  "order-placed": 2,
  "delivery-started": 6,
  "item-picked-up": 4,
  "service-started": 24,
  "service-completed": 24,
  "awaiting-repair-payment": 48,
  "repair-payment-completed": 4,
  "repair-started": 72,
  "repair-completed": 24,
  "ready-for-return": 24,
  "return-in-progress": 24,
};

export function isSlaBreached(status: OrderStatus, enteredAt: Date, now: Date = new Date()): boolean {
  const hours = SLA_HOURS[status];
  if (!hours) return false;
  const elapsedMs = now.getTime() - enteredAt.getTime();
  return elapsedMs / (60 * 60 * 1000) > hours;
}

export function slaTarget(status: OrderStatus): number | null {
  return SLA_HOURS[status] ?? null;
}