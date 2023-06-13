import { createContext, useContext, useState } from 'react';
import { ChildProps, InventoryItem } from '../utils/typeUtil';
import INVENTORY from '../json-data/shop-data.json';

export interface InventoryContextState {
  currentInventory: InventoryItem[];
}

export const InventoryContext = createContext<InventoryContextState>({
  currentInventory: [],
});

const defaultData = INVENTORY as InventoryItem[];

export const InventoryProvider = ({ children }: ChildProps) => {
  const [currentInventory] = useState(defaultData);
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
