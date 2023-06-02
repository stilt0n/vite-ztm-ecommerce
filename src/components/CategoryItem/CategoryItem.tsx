import { CategoryItemProps } from './types';
import styles from './CategoryItem.module.scss';

export const CategoryItem = (props: CategoryItemProps) => (
  <div className={styles['category-container']}>
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
  </div>
);
