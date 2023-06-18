import { CheckoutRow } from '../../components/CheckoutRow';
import {
  CartReducerActionType,
  useCartContext,
} from '../../contexts/CartContext';
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
        <HeaderBlock key={rowTitle}>
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
  const { cartItems, cartTotal, cartDispatch } = useCartContext();
  const createItemChangeHandler =
    (id: number) =>
    (type: Exclude<CartReducerActionType, 'ADD_ITEM' | 'TOGGLE_IS_OPEN'>) => {
      cartDispatch({ type, payload: id });
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
      <FooterRow subtotal={cartTotal} />
    </CheckoutContainer>
  );
};
