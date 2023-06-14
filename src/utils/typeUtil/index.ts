/* Type and Linter Utilities */

import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

export interface ChildProps {
  children?: ReactNode;
}

export interface InventoryItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface InventoryItemWithQuantity extends InventoryItem {
  quantity: number;
}
