import Navbar from "./public/Navbar";
import Footer from "./public/Footer";
import { Outlet } from "react-router-dom";

export default function LayoutMain() {
  return (
    <div className="max-w-[100vw]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
