import { useCartContext } from '../../contexts/CartContext';
import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIcon.styles';

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemCount } = useCartContext();
  return (
    <CartIconContainer
      title={isCartOpen ? 'Collapse cart' : 'View cart'}
      onClick={() => setIsCartOpen((prev) => !prev)}
    >
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};
