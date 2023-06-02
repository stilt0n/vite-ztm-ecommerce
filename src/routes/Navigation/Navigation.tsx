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
          Shop
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);
