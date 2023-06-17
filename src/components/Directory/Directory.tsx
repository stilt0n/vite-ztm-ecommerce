import { DirectoryItem } from '../DirectoryItem';
import { categoriesList } from './categories';
import { DirectoryProps } from './types';
import { DirectoryContainer } from './Directory.styles';

export const Directory = ({ categories = categoriesList }: DirectoryProps) => (
  <DirectoryContainer>
    {categories.map(({ id, ...itemProps }) => (
      <DirectoryItem key={id} {...itemProps} />
    ))}
  </DirectoryContainer>
);
