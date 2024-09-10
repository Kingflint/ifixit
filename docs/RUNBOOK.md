# Operations runbook

## Common incidents

### Booking submissions are failing

1. Open Firestore console and check `ifixit_orders` writes are landing.
2. Check Firebase Authentication for spikes in failed sign-ins.
3. Verify `ifixit_settings/main` exists; create defaults via the admin
   account if missing.

### Paystack inline checkout does not open

1. Confirm `VITE_PAYSTACK_KEY` is set on the deployment.
2. Verify the Paystack script tag is loading from `index.html`.
3. Check the browser console for blocked third-party scripts.

### Email confirmations are not arriving

1. Inspect `src/utils/emailService.ts` -> `sendOrderConfirmation`.
2. Confirm the SMTP webhook secret is current.
3. Re-run the most recent batch via the admin dashboard.

## Routine maintenance

- Run `npm audit` weekly.
- Bump dependencies on a quarterly cadence.
- Rotate the Paystack public key when staff changes warrant it.