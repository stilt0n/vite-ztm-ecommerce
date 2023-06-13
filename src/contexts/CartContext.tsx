import {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from 'react';
import { ChildProps, noop } from '../utils/typeUtil';

export interface CartContextState {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContextState>({
  isCartOpen: false,
  setIsCartOpen: noop,
});

export const CartProvider = ({ children }: ChildProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};
