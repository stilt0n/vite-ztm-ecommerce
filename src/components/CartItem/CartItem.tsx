import styles from './CartItem.module.scss';
import { CartItemProps } from './types';

export const CartItem = (props: CartItemProps) => {
  const { name, imageUrl, price, quantity } = props.item;
  return (
    <div className={styles['cart-item-container']}>
      <img src={imageUrl} alt={name} />
      <div className={styles['item-details']}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{`${quantity} x $${price.toFixed(
          2
        )}`}</span>
        <span className={styles.remove} onClick={props.onRemove}>
          remove
        </span>
      </div>
    </div>
  );
};
