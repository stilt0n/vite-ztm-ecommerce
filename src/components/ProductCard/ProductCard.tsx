import { ProductCardProps } from './types';
import { Button } from '../Button';
import { useCartContext } from '../../contexts/CartContext';
import styles from './ProductCard.module.scss';

export const ProductCard = (props: ProductCardProps) => {
  const { name, price, imageUrl } = props.product;
  const { addItemToCart } = useCartContext();
  const addProductToCart = () => addItemToCart(props.product);
  return (
    <div className={styles['product-card-container']}>
      <img src={imageUrl} alt={name} />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};
