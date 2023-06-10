import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import styles from './Navigation.module.scss';

export const Navigation = () => (
  <>
    <div className={styles['navigation']}>
      <Link className={styles['logo-container']} to="/">
        <CrwnLogo className={styles['logo']} />
      </Link>
      <div className={styles['nav-links-container']}>
        <Link className={styles['nav-link']} to="/shop">
          SHOP
        </Link>
        <Link className={styles['nav-link']} to="/auth">
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);
