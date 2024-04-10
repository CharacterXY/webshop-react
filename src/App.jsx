import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Components/Products/Product";
import ProductDetails from "./Components/Pages/ProductDetails";
import AppWrapperComponent from "./Components/AppWrapper/AppWrapperComponent";
import PageNotFound from "./Components/Pages/PageNotFound";
import AppLayout from "./Components/Pages/AppLayout";
import BikesPage from "./Components/Pages/BikesPage";
import { ModalProvider } from "./Components/ModalContext";

function App() {
  const BASE_URL = "http://localhost:9000";

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/products`);
        const data = await res.json();

        setProducts(data);
      } catch {
        alert("There was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppWrapperComponent />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="bicikli"
              element={<BikesPage products={products} isLoading={isLoading} />}
            />
            <Route
              path="bicikli/:id"
              element={<ProductDetails products={products} />}
            />

            <Route path="/oprema" element={<AppLayout />} />
            <Route path="/dijelovi" element={<AppLayout />} />
            <Route path="/blog" element={<AppLayout />} />
            <Route path="/akcija" element={<AppLayout />} />
            <Route path="/kontakt" element={<AppLayout />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </>
  );
}

export default App;
