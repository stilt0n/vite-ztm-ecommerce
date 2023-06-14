import { CheckoutRowProps } from './types';
import styles from './CheckoutRow.module.scss';

export const CheckoutRow = ({ onItemChange, item }: CheckoutRowProps) => {
  const onIncrement = () => onItemChange('increment');
  const onDecrement = () => {
    if (item.quantity > 1) onItemChange('decrement');
  };
  const onRemove = () => onItemChange('remove');
  return (
    <div className={styles['checkout-item-container']}>
      <div className={styles['image-container']}>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <span className={styles.name}>{item.name}</span>
      <span className={styles.quantity}>
        <div className={styles.arrow} onClick={onDecrement}>
          &#10094;
        </div>
        <span className={styles.value}>{item.quantity}</span>
        <div className={styles.arrow} onClick={onIncrement}>
          &#10095;
        </div>
      </span>
      <span className={styles.price}>{item.price}</span>
      <div className={styles['remove-button']} onClick={onRemove}>
        &#10005;
      </div>
    </div>
  );
};
