import { CheckoutRow } from '../../components/CheckoutRow';
import { useCartContext } from '../../contexts/CartContext';
import styles from './Checkout.module.scss';

const HeaderRow = () => (
  <div className={styles['checkout-header']}>
    {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(
      (rowTitle) => (
        <div className={styles['header-block']}>
          <span>{rowTitle}</span>
        </div>
      )
    )}
  </div>
);

const FooterRow = ({ subtotal = 0 }) => (
  <span
    className={styles['total']}
    style={{ textAlign: 'center' }}
  >{`Total: $${subtotal.toFixed(2)}`}</span>
);

export const Checkout = () => {
  const {
    cartItems,
    incrementItemInCart,
    removeItemFromCart,
    decrementItemInCart,
  } = useCartContext();
  const createItemChangeHandler =
    (id: number) => (action: 'increment' | 'decrement' | 'remove') => {
      switch (action) {
        case 'increment':
          incrementItemInCart(id);
          break;
        case 'decrement':
          decrementItemInCart(id);
          break;
        case 'remove':
          removeItemFromCart(id);
      }
    };
  return (
    <div className={styles['checkout-container']}>
      <HeaderRow />
      {cartItems.map((item) => (
        <CheckoutRow
          key={item.id}
          item={item}
          onItemChange={createItemChangeHandler(item.id)}
        />
      ))}
      <FooterRow
        subtotal={cartItems.reduce(
          (sum, { price, quantity }) => sum + price * quantity,
          0
        )}
      />
    </div>
  );
};
