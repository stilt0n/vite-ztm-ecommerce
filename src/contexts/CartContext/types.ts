import { Dispatch, SetStateAction } from 'react';
import { InventoryItem, InventoryItemWithQuantity } from '../../utils/typeUtil';

export interface CartData {
  [key: number]: InventoryItemWithQuantity;
}

export interface CartContextState {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartData;
  addItemToCart: (item: InventoryItem) => void;
}
