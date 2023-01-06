export default function uniqueValues<T>(values: T[]) {
  return [...new Set(values)];
}
