import { Routes, Route } from 'react-router-dom';
import { Categories } from '../Categories';
import { Category } from '../Category';
import styles from './Shop.module.scss';

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
