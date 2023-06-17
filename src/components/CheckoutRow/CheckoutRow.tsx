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
  const onIncrement = () => onItemChange('increment');
  const onDecrement = () => {
    if (item.quantity > 1) onItemChange('decrement');
  };
  const onRemove = () => onItemChange('remove');
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
