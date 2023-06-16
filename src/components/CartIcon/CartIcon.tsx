import { useCartContext } from '../../contexts/CartContext';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemCount } = useCartContext();
  return (
    <div
      className={styles['cart-icon-container']}
      title={isCartOpen ? 'Collapse cart' : 'View cart'}
      onClick={() => setIsCartOpen((prev) => !prev)}
    >
      <ShoppingIcon className={styles['shopping-icon']} />
      <span className={styles['item-count']}>{itemCount}</span>
    </div>
  );
};
