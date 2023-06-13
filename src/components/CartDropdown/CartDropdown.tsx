import styles from './CartDropdown.module.scss';
import { Button } from '../Button';
import { CartDropdownProps } from './types';

export const CartDropdown = (props: CartDropdownProps) => {
  if (!props.isOpen) return null;
  return (
    <div className={styles['cart-dropdown-container']}>
      <div className={styles['cart-items']} />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
