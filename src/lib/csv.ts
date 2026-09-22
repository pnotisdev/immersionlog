/** Wraps a field in quotes only when it needs it, doubling any internal quotes. RFC 4180. */
function escapeCsvField(value: unknown): string {
  if (value == null) return "";
  const s = value instanceof Date ? value.toISOString() : String(value);
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** Renders `rows` as a CSV string, columns in the given order regardless of key order in `rows`. */
export function toCsv<T extends Record<string, unknown>>(rows: T[], columns: (keyof T & string)[]): string {
  const header = columns.join(",");
  const lines = rows.map((row) => columns.map((c) => escapeCsvField(row[c])).join(","));
  return [header, ...lines].join("\r\n") + "\r\n";
}
