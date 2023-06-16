import { useInventoryContext } from '../../contexts/InventoryContext';
import { CategoryPreview } from '../../components/CategoryPreview';

export const Categories = () => {
  const { currentInventory } = useInventoryContext();
  return (
    <>
      {Object.entries(currentInventory).map(([title, items]) => (
        <CategoryPreview key={title} title={title} products={items} />
      ))}
    </>
  );
};
