import styles from './ProductCard.module.scss';
import { Button } from '../Button';
import { ProductCardProps } from './types';

export const ProductCard = (props: ProductCardProps) => {
  const { name, price, imageUrl } = props.product;
  return (
    <div className={styles['product-card-container']}>
      <img src={imageUrl} alt={name} />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};
