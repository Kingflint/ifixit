# Data exports

Admins can export the following from the dashboard:

- Repair orders (CSV).
- Store orders (CSV).
- Product catalogue (CSV).

Exports use `src/utils/csv.ts > toCsv` and stream as
`text/csv;charset=utf-8` blobs.