import Hamburger from "hamburger-react";

import { Link, useLocation } from "react-router-dom";
import userStore from "../../../store/user.store";
import axios from "axios";
import { BASE_URL } from "../../../lib/constants";
import { useToast } from "../../ui/use-toast";
import useCartStore from "../../../store/cart.store";

import useGlobalUIStore from "../../../store/global_ui.store";

export default function Navbar() {
  const { AUTHENTICATED, LOGOUT_USER, USER } = userStore((state) => state);
  const { MENU_OPEN, TOGGLE_MENU } = useGlobalUIStore((state) => state);
  const { pathname } = useLocation();
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

  const { cartItems } = useCartStore();

  return (
    <header
      className={`${
        pathname === "/" ? "absolute " : "block bg-[#232831]"
      } md:sticky top-0 left-0 w-full md:bg-shop-primary md:h-[11vh] h-[9vh] z-40 grid items-center `}
    >
      <div className="container flex items-center justify-between md:text-[#232831] text-white ">
        {" "}
        <div className="hidden md:flex items-center tracking-wide gap-6">
          <h2 className="font-medium tracking-tight text-xl text-[#232831]">
            Home
          </h2>
          <h2 className="font-medium tracking-tight text-xl text-[#232831]">
            Products
          </h2>
          <h2 className="font-medium tracking-tight text-xl text-[#232831]">
            Track Order
          </h2>
        </div>
        <Link to="/">
          <h2 className="font-bold tracking-tight text-3xl text-shop-primary md:text-[#232831]">
            MOON <span className="text-gray-600">SKIN</span>
          </h2>
        </Link>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center tracking-wide gap-6">
          <h2 className="font-medium tracking-tight text-xl text-[#232831]">
            Cart ( 0. 00)
          </h2>
          <h2 className="font-medium tracking-tight text-xl text-[#232831]">
            Wishlist ( 0 )
          </h2>
          <h2 className="font-medium tracking-tight text-xl text-[#232831]">
            Login
          </h2>
        </div>
        <div className="md:hidden">
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
        </div>
      </div>
      {/* <nav id="desktop_nav" aria-label="desktop" className="md:container">
        <div className="md:hidden flex items-center justify-between ">



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
      </nav> */}
      {/* <DesktopBar /> */}

      {/* Desktop Bar  */}
    </header>
  );
}
