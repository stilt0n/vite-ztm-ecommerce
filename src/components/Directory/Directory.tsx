import { DirectoryItem } from '../DirectoryItem';
import { categoriesList } from './categories';
import { DirectoryProps } from './types';
import styles from './Directory.module.scss';

export const Directory = ({ categories = categoriesList }: DirectoryProps) => (
  <div className={styles['directory-container']}>
    {categories.map(({ id, ...itemProps }) => (
      <DirectoryItem key={id} {...itemProps} />
    ))}
  </div>
);
