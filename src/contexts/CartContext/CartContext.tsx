import { createContext, useState, useContext } from 'react';
import { ChildProps, InventoryItem, noop } from '../../utils/typeUtil';
import { CartContextState } from './types';
import { CartDataModel } from './CartDataModel';

const cart = new CartDataModel();

export const CartContext = createContext<CartContextState>({
  isCartOpen: false,
  setIsCartOpen: noop,
  cartItems: [],
  addItemToCart: noop,
});

export const CartProvider = ({ children }: ChildProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const addItemToCart = (item: InventoryItem) => cart.addItemToCart(item);
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems: [...cart],
    addItemToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};
