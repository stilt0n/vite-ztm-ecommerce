import styles from './CartDropdown.module.scss';
import { Button } from '../Button';
import { CartItem } from '../CartItem';
import { useCartContext } from '../../contexts/CartContext';

export const CartDropdown = () => {
  const { cartItems } = useCartContext();
  return (
    <div className={styles['cart-dropdown-container']}>
      <div className={styles['cart-items']}>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
