import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { CartIcon } from '../../components/CartIcon';
import { CartDropdown } from '../../components/CartDropdown';
import { useUserContext } from '../../contexts/UserContext';
import { useCartContext } from '../../contexts/CartContext';
import { signOutUser } from '../../utils/firebase';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  const { currentUser } = useUserContext();
  const { isCartOpen } = useCartContext();
  return (
    <>
      <div className={styles['navigation']}>
        <Link className={styles['logo-container']} to="/">
          <CrwnLogo className={styles['logo']} />
        </Link>
        <div className={styles['nav-links-container']}>
          <Link className={styles['nav-link']} to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className={styles['nav-link']} onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className={styles['nav-link']} to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
