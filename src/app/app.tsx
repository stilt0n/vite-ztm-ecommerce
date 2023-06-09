import { Routes, Route } from 'react-router-dom';
import { Navigation } from '../routes/Navigation';
import { Home } from '../routes/Home';
import { Authentication } from '../routes/Authentication';
import { Shop } from '../routes/Shop';
import { Checkout } from '../routes/Checkout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
