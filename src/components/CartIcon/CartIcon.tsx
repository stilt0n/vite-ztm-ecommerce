import { useCartContext } from '../../contexts/CartContext';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

export const CartIcon = () => {
  const { setIsCartOpen, itemCount } = useCartContext();
  return (
    <div
      className={styles['cart-icon-container']}
      onClick={() => setIsCartOpen((prev) => !prev)}
    >
      <ShoppingIcon className={styles['shopping-icon']} />
      <span className={styles['item-count']}>{itemCount}</span>
    </div>
  );
};
