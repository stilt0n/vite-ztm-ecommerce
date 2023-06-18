import { CartReducerActionType } from 'src/contexts/CartContext';
import { InventoryItemWithQuantity } from '../../utils/typeUtil';

export interface CheckoutRowProps {
  item: InventoryItemWithQuantity;
  onItemChange: (
    type: Exclude<CartReducerActionType, 'ADD_ITEM' | 'TOGGLE_IS_OPEN'>
  ) => void;
}
