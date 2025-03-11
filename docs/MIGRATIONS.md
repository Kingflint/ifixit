# Schema migrations

Firestore is schemaless, so "migrations" here means hand-written
upgrades that backfill or rename fields.

## v1 -> v2 (2025-Q1)

- `ifixit_orders.repairFee` is required for any order that has reached
  `awaiting-repair-payment`. Older docs may need backfilling with `0`.
- `ifixit_settings/main.overstayGraceDays` defaults to `3` if missing.

## v2 -> v3 (Future)

- Plan: split `ifixit_orders` into `_active` and `_archive` collections
  for read scaling once volume warrants it.