import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useInventoryContext } from '../../contexts/InventoryContext';
import { CategoryParams } from './types';
import { ProductCard } from 'src/components/ProductCard';
import { CategoryContainer } from './Category.styles';

export const Category = () => {
  const { category } = useParams<Partial<CategoryParams>>();
  const { currentInventory } = useInventoryContext();
  const products = useMemo(
    () => (category ? currentInventory[category] : undefined),
    [category, currentInventory]
  );
  return (
    <CategoryContainer>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </CategoryContainer>
  );
};
