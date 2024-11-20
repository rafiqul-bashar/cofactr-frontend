import Navbar from "./public/Navbar";
import Footer from "./public/Footer";
import { Outlet } from "react-router-dom";
import useGlobalUIStore from "../../store/global_ui.store";
import MobileBar from "./navigation/MobileBar";
import { useEffect } from "react";

export default function LayoutMain() {
  const { MENU_OPEN, TOGGLE_MENU } = useGlobalUIStore((state) => state);

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (MENU_OPEN) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [MENU_OPEN]);

  return (
    <div className="relative">
      <div className="max-w-screen-4xl w-full mx-auto min-h-screen">
        <Navbar />
        <div className="">
          <Outlet />
        </div>
        <Footer />
        {/* Black Overlay */}
        {MENU_OPEN && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-30"
            onClick={() => TOGGLE_MENU(false)}
          />
        )}
      </div>

      <MobileBar />
    </div>
  );
}
