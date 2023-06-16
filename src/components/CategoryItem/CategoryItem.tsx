import { CategoryItemProps } from './types';
import styles from './CategoryItem.module.scss';
import { Link } from 'react-router-dom';

export const CategoryItem = (props: CategoryItemProps) => (
  <Link
    className={styles['category-container']}
    to={`/shop/${props.title.toLowerCase()}`}
  >
    <div
      className={styles['background-image']}
      style={{
        backgroundImage: `url(${props.imgUrl})`,
      }}
    />
    <div className={styles['category-body-container']}>
      <h2>{props.title}</h2>
      <p>Shop Now</p>
    </div>
  </Link>
);
