import { InventoryItemWithQuantity } from 'src/utils/typeUtil';

export interface CartItemProps {
  item: InventoryItemWithQuantity;
  onRemove: () => void;
}
