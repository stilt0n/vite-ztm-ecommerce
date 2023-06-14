import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { CartItem } from '../CartItem';
import { useCartContext } from '../../contexts/CartContext';
import styles from './CartDropdown.module.scss';

export const CartDropdown = () => {
  const { cartItems, removeItemFromCart } = useCartContext();
  const navigate = useNavigate();
  const navigateToCheckout = () => navigate('/checkout');
  return (
    <div className={styles['cart-dropdown-container']}>
      <div className={styles['cart-items']}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => removeItemFromCart(item.id)}
          />
        ))}
      </div>
      <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};
