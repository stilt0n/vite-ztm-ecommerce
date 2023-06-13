import { InventoryItem } from '../../utils/typeUtil';

export interface ProductCardProps {
  product: Omit<InventoryItem, 'id'>;
}
