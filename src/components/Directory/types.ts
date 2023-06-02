import { CategoryItemProps } from "../CategoryItem";

export interface CategoryListItem extends CategoryItemProps {
  id: number;
}

export interface DirectoryProps {
  categories?: CategoryListItem[];
}