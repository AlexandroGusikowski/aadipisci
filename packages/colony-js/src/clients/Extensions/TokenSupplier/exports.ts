import type { TokenSupplierVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getTokenSupplierClientV1, {
  TokenSupplierClientV1,
} from './TokenSupplierClientV1';
import getTokenSupplierClientV2, {
  TokenSupplierClientV2,
} from './TokenSupplierClientV2';
import getTokenSupplierClientV3, {
  TokenSupplierClientV3,
} from './TokenSupplierClientV3';
import getTokenSupplierClientV4, {
  TokenSupplierClientV4,
} from './TokenSupplierClientV4';

export { TokenSupplierClientV1 } from './TokenSupplierClientV1';
export { TokenSupplierClientV2 } from './TokenSupplierClientV2';
export { TokenSupplierClientV3 } from './TokenSupplierClientV3';
export { TokenSupplierClientV4 } from './TokenSupplierClientV4';

export type AnyTokenSupplierClient =
  | TokenSupplierClientV1
  | TokenSupplierClientV2
  | TokenSupplierClientV3
  | TokenSupplierClientV4;

/** @internal */
export const getTokenSupplierClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: TokenSupplierVersion,
): AnyTokenSupplierClient => {
  switch (version) {
    case 1:
      return getTokenSupplierClientV1(colonyClient, address);
    case 2:
      return getTokenSupplierClientV2(colonyClient, address);
    case 3:
      return getTokenSupplierClientV3(colonyClient, address);
    case 4:
      return getTokenSupplierClientV4(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find TokenSupplier version',
      );
  }
};
