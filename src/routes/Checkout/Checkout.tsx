import { CheckoutRow } from '../../components/CheckoutRow';
import { useCartContext } from '../../contexts/CartContext';
import styles from './Checkout.module.scss';

const HeaderRow = () => (
  <div className={styles['header-row']}>
    {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(
      (rowTitle) => (
        <h3>{rowTitle}</h3>
      )
    )}
  </div>
);

const FooterRow = ({ subtotal = 0 }) => (
  <div className={styles['footer-row']}>
    <span style={{ textAlign: 'center' }}>{`$${subtotal.toFixed(2)}`}</span>
  </div>
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
