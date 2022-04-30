/* Application shared constants */

import {
  toArray,
  toArrayDot,
  toArrayDash,
} from 'src/shared/libs/helpers/Object';

export const Actions = {
  HIDDEN: 'hidden',
  READONLY: 'readonly',
  VISIBLE: 'visible',
};

export const accessType = {
  HIDE: 0,
  READ: 1,
  CREATE: 2,
  UPDATE: 3,
  DELETE: 4,
};

export const List = {
  defaultAny: { default: accessType.DELETE, state: [1, 0, 0] },
  defaultReadonly: { default: accessType.DELETE, state: [0, 1, 0] },
  defaultVisible: { default: accessType.HIDE, state: [0, 0, 1] },
};

export const arrayList = toArray(List);

export const arrayDotList = toArrayDot(List, 'uniqueId');

export const arrayDashList = toArrayDash(List, 'uniqueId');
