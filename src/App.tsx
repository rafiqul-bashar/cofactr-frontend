import { Navigate, Route, Routes } from "react-router-dom";
import userStore from "./store/user.store";
import { LayoutMain, MyProfile } from "./components/custom";

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

function App() {
  const { AUTHENTICATED } = userStore((state) => state);
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
