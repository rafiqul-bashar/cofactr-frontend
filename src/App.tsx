import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

function App() {
  // return <LoadingStatus />;
  const { AUTHENTICATED } = userStore((state) => state);
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index={true} element={<HomePage />} />
          <Route path="/products" element={<ExploreProductsPage />} />
          <Route path="/products/:id" element={<ExploreSingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
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
