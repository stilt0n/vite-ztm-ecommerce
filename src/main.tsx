import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { InventoryProvider } from './contexts/InventoryContext';
import App from './app/app';
import { CartProvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <InventoryProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </InventoryProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
