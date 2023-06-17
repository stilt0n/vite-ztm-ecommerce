import { Routes, Route } from 'react-router-dom';
import { Categories } from '../Categories';
import { Category } from '../Category';

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
