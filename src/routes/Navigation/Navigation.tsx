import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { CartIcon } from '../../components/CartIcon';
import { CartDropdown } from '../../components/CartDropdown';
import { useUserContext } from '../../contexts/UserContext';
import { useCartContext } from '../../contexts/CartContext';
import { signOutUser } from '../../utils/firebase';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  NavSpan,
  LogoContainer,
} from './Navigation.styles';

export const Navigation = () => {
  const { currentUser } = useUserContext();
  const { isCartOpen } = useCartContext();
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/" title="Back to home page">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavSpan as="span" onClick={signOutUser}>
              SIGN OUT
            </NavSpan>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
