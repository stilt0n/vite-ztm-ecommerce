import { useNavigate } from 'react-router-dom';
import { CategoryPreviewProps } from './types';
import { ProductCard } from '../ProductCard';
import styles from './CategoryPreview.module.scss';

export const CategoryPreview = (props: CategoryPreviewProps) => {
  const navigate = useNavigate();
  const onGoToCategory = () => navigate(`/shop/${props.title}`);
  return (
    <div className={styles['category-preview-container']}>
      <h2>
        <span
          title={`See more ${props.title}`}
          onClick={onGoToCategory}
          className={styles.title}
        >
          {props.title.toUpperCase()}
        </span>
      </h2>
      <div className={styles.preview}>
        {props.products.slice(0, 4).map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
