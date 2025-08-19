export function filtersFilledObject<T extends object>(params: T): Partial<T> {
  const result: Partial<T> = {};
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const value = params[key];

      if (
        value !== null &&
        value !== undefined &&
        !(typeof value === 'string' && value.trim() === '') &&
        !(typeof value === 'object' && value !== null && Object.keys(value).length === 0)
      ) {
        result[key] = value;
      }
    }
  }
  return result;
}
