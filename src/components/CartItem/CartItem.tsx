import { CartItemProps } from './types';
import {
  CartItemContainer,
  ItemDetails,
  ItemName,
  RemoveItemLink,
} from './CartItem.styles';

export const CartItem = (props: CartItemProps) => {
  const { name, imageUrl, price, quantity } = props.item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span className="price">{`${quantity} x $${price.toFixed(2)}`}</span>
        <RemoveItemLink onClick={props.onRemove}>remove</RemoveItemLink>
      </ItemDetails>
    </CartItemContainer>
  );
};
