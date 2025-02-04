# Store mode

The store is opt-in via `ifixit_settings/main.enableStore`. When off,
all store routes are hidden and the homepage shows only the repair
flow.

## Catalogue

Each entry in `ifixit_store_products` has:

- `name`, `category`, `condition`, `price`, `stock`.
- Optional `images[]` for the product card carousel.
- Optional `priceList[]` for tiered pricing across regions.

## Checkout

Uses the same Paystack helper as the repair flow. Successful payments
trigger a write to `ifixit_store_orders` with status `item-purchased`.

## Fulfilment

Status transitions live in `STORE_DELIVERY_FLOW` and `STORE_PICKUP_FLOW`
in `src/data/constants.ts`.