import { Link } from 'react-router-dom';
import { CategoryPreviewProps } from './types';
import { ProductCard } from '../ProductCard';
import styles from './CategoryPreview.module.scss';

export const CategoryPreview = (props: CategoryPreviewProps) => {
  return (
    <div className={styles['category-preview-container']}>
      <h2>
        <Link
          title={`See more ${props.title}`}
          className={styles.title}
          to={`/shop/${props.title}`}
        >
          {props.title.toUpperCase()}
        </Link>
      </h2>
      <div className={styles.preview}>
        {props.products.slice(0, 4).map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
