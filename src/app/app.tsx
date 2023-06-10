import { Routes, Route } from 'react-router-dom';
import { Navigation } from '../routes/Navigation';
import { Home } from '../routes/Home';
import { Authentication } from '../routes/Authentication';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>Shop Page</h1>} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
