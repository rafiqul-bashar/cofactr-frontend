import { Navigate, Route, Routes } from "react-router-dom";
import userStore from "./store/user.store";
import LayoutMain from "./components/custom/LayoutMain";
import MyProfile from "./components/custom/public/MyProfile";
import {
  HomePage,
  ExploreSingleProductPage,
  ExploreProductsPage,
  LoginPage,
  RegisterPage,
  NotFound,
  CartPage,
  AboutUsPage,
  ContactPage,
} from "./pages";
import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "./api/product.requests";
import { useEffect } from "react";
import useProductStore from "./store/productData.store";
function App() {
  const { AUTHENTICATED } = userStore((state) => state);
  const { setProducts, products, setCategories } = useProductStore(
    (state) => state
  );

  // global data calling

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    data?.length && setProducts(data);
    setCategories([
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ]);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index={true} element={<HomePage />} />
          <Route path="/products" element={<ExploreProductsPage />} />
          <Route path="/product/:id" element={<ExploreSingleProductPage />} />
          <Route path="/products/search" element={<ExploreProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/my-profile"
            element={AUTHENTICATED ? <MyProfile /> : <Navigate to="/" />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LayoutMain />}>
          <Route
            path="login"
            element={AUTHENTICATED ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="register"
            element={AUTHENTICATED ? <Navigate to="/" /> : <RegisterPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
