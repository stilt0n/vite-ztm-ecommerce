import { useCartContext } from '../../contexts/CartContext';
import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIcon.styles';

export const CartIcon = () => {
  const { isCartOpen, cartDispatch, itemCount } = useCartContext();
  return (
    <CartIconContainer
      title={isCartOpen ? 'Collapse cart' : 'View cart'}
      onClick={() => cartDispatch({ type: 'TOGGLE_IS_OPEN' })}
    >
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};
