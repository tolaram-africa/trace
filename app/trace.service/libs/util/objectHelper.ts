export const getObjectValue = (
  str: string,
  value: Record<string, unknown>,
): Record<string, unknown> => {
  const items = str.split('.');
  const output = {};
  let ref = output;
  for (let i = 0; i < items.length - 1; i++) {
    ref[items[i]] = {};
    ref = ref[items[i]];
  }
  ref[items[items.length - 1]] = value;
  return output;
};
