import { InventoryItemWithQuantity } from 'src/utils/typeUtil';

export interface CartItemProps {
  // imageurl omission is temporrary
  cartItem: Omit<InventoryItemWithQuantity, 'id' | 'imageUrl'>;
}
