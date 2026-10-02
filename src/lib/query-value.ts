// Match the previous server parsing: repeated query keys are not accepted.
export function queryValue(query: { getAll(name: string): string[] }, name: string) {
  const values = query.getAll(name);
  return values.length === 1 ? values[0] : undefined;
}
