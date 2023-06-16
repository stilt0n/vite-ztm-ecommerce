import { DirectoryItemProps } from '../DirectoryItem';

export interface CategoryListItem extends DirectoryItemProps {
  id: number;
}

export interface DirectoryProps {
  categories?: CategoryListItem[];
}
