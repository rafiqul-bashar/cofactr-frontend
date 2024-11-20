import { Navigate, Route, Routes } from "react-router-dom";
import userStore from "./store/user.store";
import LayoutMain from "./components/custom/LayoutMain";
import HomePage from "./pages/HomePage";
import ExploreSingleProductPage from "./pages/ExploreSingleProductPage";
import ExploreProductsPage from "./pages/ExploreProductsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import MyProfile from "./components/custom/public/MyProfile";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/dashboard/ContactPage";

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
