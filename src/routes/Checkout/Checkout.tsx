import { CheckoutRow } from '../../components/CheckoutRow';
import { useCartContext } from '../../contexts/CartContext';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './Checkout.styles';

const HeaderRow = () => (
  <CheckoutHeader>
    {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(
      (rowTitle) => (
        <HeaderBlock>
          <span>{rowTitle}</span>
        </HeaderBlock>
      )
    )}
  </CheckoutHeader>
);

const FooterRow = ({ subtotal = 0 }) => (
  <Total>{`Total: $${subtotal.toFixed(2)}`}</Total>
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
    <CheckoutContainer>
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
    </CheckoutContainer>
  );
};
