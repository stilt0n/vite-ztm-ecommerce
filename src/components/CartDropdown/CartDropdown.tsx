import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { CartItem } from '../CartItem';
import { useCartContext } from '../../contexts/CartContext';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from './CartDropdown.styles';

export const CartDropdown = () => {
  const { cartItems, removeItemFromCart } = useCartContext();
  const navigate = useNavigate();
  const navigateToCheckout = () => navigate('/checkout');
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => removeItemFromCart(item.id)}
            />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
