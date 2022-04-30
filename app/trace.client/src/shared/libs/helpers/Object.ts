/* eslint-disable @typescript-eslint/ban-ts-comment */
/** Custom object manipulation functions */

import { camelToDot, camelToDash } from 'src/shared/libs/helpers/Char';

export function toArray(obj: Object) {
  const arrayOutput: Array<Object> = [];
  const keys: Array<string> = Object.keys(obj);
  keys.forEach((key, index: number) => {
    arrayOutput[index] = obj[key];
    // @ts-ignore
    arrayOutput[index].uniqueId = key;
  });
  return arrayOutput;
}

export function toArrayDot(object: Object, uniqueKey: string) {
  return toArray(object).map((item) => {
    item[uniqueKey] = camelToDot(item[uniqueKey]);
    return item;
  });
}

export function toArrayDash(object, uniqueKey) {
  return toArray(object).map((item) => {
    item[uniqueKey] = camelToDash(item[uniqueKey]);
    return item;
  });
}
