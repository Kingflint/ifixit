// Totals helpers shared by the booking flow and admin dashboard.

import type { RepairOrder, StoreOrder } from "../types";
import { calculateOverstayFee } from "./dates";

export function repairTotal(order: Pick<RepairOrder, "repairFee" | "deliveryFee" | "diagnosisFee">): number {
  const fee = (order.repairFee ?? 0) + (order.deliveryFee ?? 0) + (order.diagnosisFee ?? 0);
  return Math.max(0, Math.round(fee));
}

export function storeOrderTotal(order: Pick<StoreOrder, "amount" | "deliveryFee" | "discount">): number {
  const total = (order.amount ?? 0) + (order.deliveryFee ?? 0) - (order.discount ?? 0);
  return Math.max(0, Math.round(total));
}

export function totalWithOverstay(
  order: Pick<RepairOrder, "repairFee" | "deliveryFee" | "diagnosisFee" | "createdAt"> & { graceDays?: number; perDay?: number },
  now: Date = new Date(),
): number {
  const base = repairTotal(order);
  if (!order.createdAt) return base;
  const created = (order.createdAt as any).toMillis ? new Date((order.createdAt as any).toMillis()) : new Date(order.createdAt as any);
  const overstay = calculateOverstayFee(created, order.graceDays ?? 3, order.perDay ?? 0, now);
  return base + overstay;
}