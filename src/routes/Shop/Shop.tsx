import { useInventoryContext } from 'src/contexts/InventoryContext';
import { ProductCard } from '../../components/ProductCard';
import styles from './Shop.module.scss';
import { Fragment } from 'react';

export const Shop = () => {
  const { currentInventory } = useInventoryContext();
  return (
    <>
      {Object.entries(currentInventory).map(([title, items]) => (
        <Fragment key={title}>
          <h2>{title.toUpperCase()}</h2>
          <div className={styles['products-container']}>
            {items.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};
