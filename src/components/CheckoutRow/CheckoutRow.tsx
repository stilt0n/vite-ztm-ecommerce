import { CheckoutRowProps } from './types';
import {
  Arrow,
  CartItemCount,
  CheckoutItemContainer,
  ImageContainer,
  InfoField,
  QuantityField,
  RemoveButton,
} from './CheckoutRow.styles';

export const CheckoutRow = ({ onItemChange, item }: CheckoutRowProps) => {
  const onIncrement = () => onItemChange('INCREMENT_ITEM');
  const onDecrement = () => {
    if (item.quantity > 1) onItemChange('DECREMENT_ITEM');
    else onItemChange('REMOVE_ITEM');
  };
  const onRemove = () => onItemChange('REMOVE_ITEM');
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={item.imageUrl} alt={item.name} />
      </ImageContainer>
      <InfoField>{item.name}</InfoField>
      <QuantityField>
        <Arrow onClick={onDecrement}>&#10094;</Arrow>
        <CartItemCount>{item.quantity}</CartItemCount>
        <Arrow onClick={onIncrement}>&#10095;</Arrow>
      </QuantityField>
      <InfoField>{item.price}</InfoField>
      <RemoveButton onClick={onRemove}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
