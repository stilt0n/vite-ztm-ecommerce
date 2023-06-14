import { InventoryItemWithQuantity } from '../../utils/typeUtil';

export interface CheckoutRowProps {
  item: InventoryItemWithQuantity;
  onItemChange: (action: 'increment' | 'decrement' | 'remove') => void;
}
