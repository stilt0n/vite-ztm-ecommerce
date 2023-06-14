import styles from './CartItem.module.scss';
import { CartItemProps } from './types';

export const CartItem = (props: CartItemProps) => {
  const { name, quantity } = props.cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};
