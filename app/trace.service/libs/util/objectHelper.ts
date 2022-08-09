export const getObjectValue = (
  value: Record<any, any>,
  path: string,
): Record<string, unknown> => path.split('.').reduce((r, k) => r?.[k], value);
