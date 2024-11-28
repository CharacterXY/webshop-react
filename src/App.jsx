import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductDetails from './Components/Pages/ProductDetails';
import AppWrapperComponent from './Components/AppWrapper/AppWrapperComponent';
import PageNotFound from './Components/Pages/PageNotFound';
import AppLayout from './Components/Pages/AppLayout';
import BikesPage from './Components/Pages/BikesPage';
import SidebarProducts from './Components/SidebarProducts/SidebarProducts';

import { ModalProvider } from './Components/ModalContext';
import { CartProvider } from './Components/CartContext';
import ShoppingCart from './Components/Pages/Cart';

// Inicijalizacija QueryClient-a
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <CartProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<AppWrapperComponent />} />
                <Route path='*' element={<PageNotFound />} />
                <Route path='bicikli' element={<BikesPage />} />
                <Route path='bicikli/:id' element={<ProductDetails />} />

                <Route path='/oprema' element={<AppLayout />} />
                <Route path='/dijelovi' element={<AppLayout />} />
                <Route path='/blog' element={<AppLayout />} />
                <Route path='/akcija' element={<AppLayout />} />
                <Route path='/kontakt' element={<AppLayout />} />

                <Route path='/cart' element={<ShoppingCart />} />
                <Route
                  path='/filter'
                  element={
                    <SidebarProducts
                    /*  products={products}
                      isLoading={isLoading} */
                    />
                  }
                />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </ModalProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
