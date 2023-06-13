import { useCartContext } from '../../contexts/CartContext';
import styles from './CartIcon.module.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
export const CartIcon = () => {
  const { setIsCartOpen } = useCartContext();
  return (
    <div
      className={styles['cart-icon-container']}
      onClick={() => setIsCartOpen((prev) => !prev)}
    >
      <ShoppingIcon className={styles['shopping-icon']} />
      <span className={styles['item-count']}>0</span>
    </div>
  );
};
