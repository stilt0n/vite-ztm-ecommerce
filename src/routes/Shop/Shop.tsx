import { useInventoryContext } from 'src/contexts/InventoryContext';
import { ProductCard } from '../../components/ProductCard';
import styles from './Shop.module.scss';

export const Shop = () => {
  const { currentInventory } = useInventoryContext();
  return (
    <div className={styles['products-container']}>
      {currentInventory.map(({ id, ...product }) => (
        <ProductCard key={id} product={product} />
      ))}
    </div>
  );
};
