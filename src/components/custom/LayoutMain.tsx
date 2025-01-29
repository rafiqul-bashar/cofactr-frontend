import Navbar from "./public/Navbar";
import Footer from "./public/Footer";
import { Outlet } from "react-router-dom";
import useGlobalUIStore from "../../store/global_ui.store";
import MobileBar from "./navigation/MobileBar";
import { useEffect, useLayoutEffect, useState } from "react";
import useProductStore from "../../store/productData.store";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/product.requests";
import LoadingStatus from "./LoadingStatus";

export default function LayoutMain() {
  const { MENU_OPEN, TOGGLE_MENU } = useGlobalUIStore((state) => state);
  const [loading, setLoading] = useState(false);

  // products api call before page loads
  const { setProducts, setCategories } = useProductStore((state) => state);

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  // useLayoutEffect(() => {
  //   if (data?.length) {
  //     setProducts(data);
  //   }
  //   setCategories([
  //     "electronics",
  //     "jewelery",
  //     "men's clothing",
  //     "women's clothing",
  //   ]);
  // }, [data, setProducts, setCategories]);
  // Disable scrolling when the menu is open
  useEffect(() => {
    if (MENU_OPEN) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [MENU_OPEN]);
  //  loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <div className="bg-black w-screen h-screen flex items-center justify-center">
      <LoadingStatus />
    </div>
  ) : (
    <div className="relative">
      <div className="overflow-x-hidden">
        <Navbar />
        {/* all the public pages */}
        <Outlet />
        <Footer />
        {/* Black Overlay */}
        {MENU_OPEN && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-30"
            onClick={() => TOGGLE_MENU(false)}
          />
        )}
      </div>

      {/* MobileSideBar */}
      {MENU_OPEN && <MobileBar />}
    </div>
  );
}
