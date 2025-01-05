import Hamburger from "hamburger-react";
import { LogOutIcon, ShoppingCart, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import userStore from "../../../store/user.store";
import axios from "axios";
import { BASE_URL } from "../../../lib/constants";
import { useToast } from "../../ui/use-toast";
import useCartStore from "../../../store/cart.store";
import Logo from "../Logo";
import DesktopBar from "../navigation/DesktopBar";
import { motion } from "framer-motion";
import useGlobalUIStore from "../../../store/global_ui.store";

export default function Navbar() {
  const { AUTHENTICATED, LOGOUT_USER, USER } = userStore((state) => state);
  const { MENU_OPEN, TOGGLE_MENU } = useGlobalUIStore((state) => state);
  const { toast } = useToast();
  const handleLogOut = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users/logout`, {
        headers: {
          Authorization: `bearer ${USER?.token}`,
        },
      });
      if (data?.success) {
        toast({
          variant: "success",
          title: data.message,
        });
        LOGOUT_USER();
      } else {
        toast({
          variant: "destructive",
          title: "something is wrong...",
        });
      }
    } catch (error) {
      if (error?.message) {
        toast({
          variant: "destructive",
          title: error?.message,
          description: "Cannot reach to server!!",
        });
      } else console.error(error);
    }
  };

  // return <Sample />;
  const { cartItems } = useCartStore();

  return (
    <header className="bg-zinc-50 w-full sticky top-0 py-3 px-4 md:px-0 md:py-0 ">
      <nav id="desktop_nav" aria-label="desktop" className="md:container">
        {/*  mobile first | md hidden */}
        <div className="md:hidden flex items-center justify-between ">
          <Hamburger
            size={28}
            toggled={MENU_OPEN}
            onToggle={(toggled) => {
              if (toggled) {
                TOGGLE_MENU(true);
              } else {
                TOGGLE_MENU(false);
              }
            }}
          />

          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center space-x-4">
            <Link className="" to={AUTHENTICATED ? "/my-profile" : "/login"}>
              <User2 className="w-8 h-8" />
            </Link>
            <Link to="/cart">
              <div className="relative mr-2">
                <ShoppingCart
                  fill={cartItems?.length && "#f97316"}
                  className="w-7 h-7 "
                />
                <div
                  className={`absolute bottom-4 left-4 bg-gray-800 rounded-full  text-sm text-white w-5 h-5 flex items-center justify-center ${
                    cartItems?.length && "bg-black text-shop-primary font-bold"
                  }`}
                >
                  <p>{cartItems.length}</p>
                </div>
              </div>
            </Link>
            {AUTHENTICATED && (
              <button className="hidden md:block" onClick={handleLogOut}>
                <LogOutIcon className="w-8 h-8" />
              </button>
            )}
          </div>
        </div>
      </nav>
      <DesktopBar />

      {/* Desktop Bar  */}
    </header>
  );
}
