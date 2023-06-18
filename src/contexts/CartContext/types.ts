import { Dispatch } from 'react';
import { InventoryItem, InventoryItemWithQuantity } from '../../utils/typeUtil';

export interface CartData {
  [key: number]: InventoryItemWithQuantity;
}

export interface CartContextState {
  isCartOpen: boolean;
  cartItems: InventoryItemWithQuantity[];
  cartDispatch: Dispatch<CartReducerAction>;
  itemCount: number;
}

export type CartReducerActionType =
  | 'ADD_ITEM'
  | 'REMOVE_ITEM'
  | 'DECREMENT_ITEM'
  | 'INCREMENT_ITEM'
  | 'TOGGLE_IS_OPEN';

export type CartReducerAction =
  | { type: 'ADD_ITEM'; payload: InventoryItem }
  | {
      type: Exclude<CartReducerActionType, 'ADD_ITEM' | 'TOGGLE_IS_OPEN'>;
      payload: number;
    }
  | { type: 'TOGGLE_IS_OPEN' };
