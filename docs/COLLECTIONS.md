# Firestore collections

## `ifixit_users`

| Field            | Type      | Notes                                     |
|------------------|-----------|-------------------------------------------|
| `email`          | string    | mirrored from Firebase Auth               |
| `name`           | string    | display name                              |
| `phone`          | string    | E.164 normalised (`+234...`)              |
| `createdAt`      | timestamp | server timestamp                          |

## `ifixit_settings/main`

A single document with site-wide configuration. See `src/types/index.ts`
for the full shape.

## `ifixit_orders`

One document per repair order. Status follows
`src/data/constants.ts > ORDER_STATUS_FLOW`.

## `ifixit_store_orders`

One document per store purchase. Status uses
`src/data/constants.ts > STORE_ORDER_STATUSES`.

## `ifixit_store_products`

Catalogue of in-stock devices, indexed by SKU.