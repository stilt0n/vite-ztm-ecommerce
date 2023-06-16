import { createContext, useContext, useEffect, useState } from 'react';
import { ChildProps, InventoryCategoryMap } from '../utils/typeUtil';
import { loadCategoriesAndDocuments } from '../utils/firebase';

export interface InventoryContextState {
  currentInventory: InventoryCategoryMap;
}

export const InventoryContext = createContext<InventoryContextState>({
  currentInventory: {},
});

export const InventoryProvider = ({ children }: ChildProps) => {
  const [currentInventory, setCurrentInventory] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await loadCategoriesAndDocuments();
      setCurrentInventory(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <InventoryContext.Provider value={{ currentInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventoryContext = () => {
  const inventoryContext = useContext(InventoryContext);
  return inventoryContext;
};
