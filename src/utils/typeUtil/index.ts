/* Type and Linter Utilities */

import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

export interface ChildProps {
  children?: ReactNode;
}
