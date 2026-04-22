// Pure helpers around order state machines so they can be tested in isolation.

import type { OrderStatus } from "../data/constants";
import { ORDER_STATUS_FLOW, PHYSICAL_STATUS_FLOW } from "../data/constants";

export function nextOrderStatus(current: OrderStatus, isPhysical = false): OrderStatus | null {
  const flow = isPhysical
    ? PHYSICAL_STATUS_FLOW
    : ORDER_STATUS_FLOW.map((s) => s.id);
  const idx = flow.indexOf(current);
  if (idx < 0 || idx >= flow.length - 1) return null;
  return flow[idx + 1];
}

export function previousOrderStatus(current: OrderStatus, isPhysical = false): OrderStatus | null {
  const flow = isPhysical
    ? PHYSICAL_STATUS_FLOW
    : ORDER_STATUS_FLOW.map((s) => s.id);
  const idx = flow.indexOf(current);
  if (idx <= 0) return null;
  return flow[idx - 1];
}

export function progressPercent(current: OrderStatus, isPhysical = false): number {
  if (current === "cancelled") return 0;
  const flow = isPhysical
    ? PHYSICAL_STATUS_FLOW
    : ORDER_STATUS_FLOW.map((s) => s.id);
  const idx = flow.indexOf(current);
  if (idx < 0) return 0;
  return Math.round(((idx + 1) / flow.length) * 100);
}

export function isTerminal(status: OrderStatus): boolean {
  return status === "completed" || status === "cancelled";
}
