import { createContext, useContext, useReducer } from 'react';
import { ChildProps, noop } from '../../utils/typeUtil';
import { CartContextState, CartReducerAction } from './types';
import { CartDataModel, CartReducerState } from './CartDataModel';

const getNextCartState = (cart: CartDataModel) => {
  return {
    cart,
    cartItems: Array.from(cart),
    cartTotal: cart.getTotal(),
    itemCount: cart.getItemCount(),
  };
};

const initialCartState = {
  isCartOpen: false,
  cartItems: [],
  itemCount: 0,
  cartTotal: 0,
  cart: new CartDataModel(),
};

export const CartContext = createContext<CartContextState>({
  ...initialCartState,
  cartDispatch: noop,
});

const cartReducer = (state: CartReducerState, action: CartReducerAction) => {
  const nextCart =
    action.type === 'TOGGLE_IS_OPEN' ? new CartDataModel() : state.cart.copy();
  switch (action.type) {
    case 'ADD_ITEM':
      nextCart.addItem(action.payload);
      return { ...state, ...getNextCartState(nextCart) };
    case 'REMOVE_ITEM':
      nextCart.removeItem(action.payload);
      return { ...state, ...getNextCartState(nextCart) };
    case 'DECREMENT_ITEM':
      nextCart.decrementItem(action.payload);
      return { ...state, ...getNextCartState(nextCart) };
    case 'INCREMENT_ITEM':
      nextCart.incrementItem(action.payload);
      return { ...state, ...getNextCartState(nextCart) };
    case 'TOGGLE_IS_OPEN':
      return { ...state, isCartOpen: !state.isCartOpen };
  }
};

export const CartProvider = ({ children }: ChildProps) => {
  const [{ isCartOpen, cartItems, itemCount, cartTotal }, cartDispatch] =
    useReducer(cartReducer, initialCartState);

  const value = {
    isCartOpen,
    cartItems,
    itemCount,
    cartDispatch,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};
