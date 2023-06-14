import { Dispatch, SetStateAction } from 'react';
import { InventoryItem, InventoryItemWithQuantity } from '../../utils/typeUtil';

export interface CartData {
  [key: number]: InventoryItemWithQuantity;
}

export interface CartContextState {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: InventoryItemWithQuantity[];
  addItemToCart: (item: InventoryItem) => void;
  incrementItemInCart: (id: number) => void;
  decrementItemInCart: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  itemCount: number;
}
