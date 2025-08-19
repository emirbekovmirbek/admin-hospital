// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'components/storeProvider/StoreProvider.tsx';
import { Bounce, ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <StoreProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </StoreProvider>
  </BrowserRouter>,
  // </StrictMode>,
);
