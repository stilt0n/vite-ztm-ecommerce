import { createContext, useState, useContext } from 'react';
import {
  ChildProps,
  InventoryItem,
  InventoryItemWithQuantity,
  noop,
} from '../../utils/typeUtil';
import { CartContextState } from './types';
import { CartDataModel } from './CartDataModel';

const cart = new CartDataModel();

export const CartContext = createContext<CartContextState>({
  isCartOpen: false,
  setIsCartOpen: noop,
  cartItems: [],
  addItemToCart: noop,
  incrementItemInCart: noop,
  decrementItemInCart: noop,
  removeItemFromCart: noop,
  itemCount: 0,
});

export const CartProvider = ({ children }: ChildProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<InventoryItemWithQuantity[]>([]);
  const [itemCount, setItemCount] = useState(0);

  const addItemToCart = (item: InventoryItem) => {
    cart.addItem(item);
    setCartItems(Array.from(cart));
    setItemCount(cart.getItemCount());
  };

  const removeItemFromCart = (id: number) => {
    cart.removeItem(id);
    setCartItems(Array.from(cart));
    setItemCount(cart.getItemCount());
  };

  const decrementItemInCart = (id: number) => {
    cart.decrementItem(id);
    setCartItems(Array.from(cart));
    setItemCount(cart.getItemCount());
  };

  const incrementItemInCart = (id: number) => {
    cart.incrementItem(id);
    setCartItems(Array.from(cart));
    setItemCount(cart.getItemCount());
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    incrementItemInCart,
    decrementItemInCart,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};
