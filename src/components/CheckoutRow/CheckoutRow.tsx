import { CheckoutRowProps } from './types';
import styles from './CheckoutRow.module.scss';

export const CheckoutRow = ({ onItemChange, item }: CheckoutRowProps) => {
  const onIncrement = () => onItemChange('increment');
  const onDecrement = () => {
    if (item.quantity > 1) onItemChange('decrement');
  };
  const onRemove = () => onItemChange('remove');
  return (
    <div
      className={styles['row-container']}
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <img src={item.imageUrl} alt={item.name} />
      <span>{item.name}</span>
      <div>
        <span onClick={onDecrement}>{'<'}</span>
        <span>{item.quantity}</span>
        <span onClick={onIncrement}>{'>'}</span>
      </div>
      <span>{item.price}</span>
      <span onClick={onRemove}>X</span>
    </div>
  );
};
