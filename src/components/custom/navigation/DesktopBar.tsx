import { navLinksPublic } from "../../../lib/constants";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";
import { ShoppingCart, User2 } from "lucide-react";
import useCartStore from "../../../store/cart.store";
const AUTHENTICATED = false;

// other primary color #ed7A5d
const DesktopBar = () => {
  const { cartItems } = useCartStore();

  return (
    <div className="w-full hidden md:block top-0 left-0 z-40 bg-shop-primary h-full py-4">
      <div className="container">
        <div className="grid grid-cols-6 text-center">
          <Logo />
          {/* Other Links */}
          <div className="flex items-center bg-white/30 col-span-4">
            {navLinksPublic?.map((el, i) => (
              <NavLink
                key={i}
                className={({ isActive }) =>
                  `navLink flex-1 ${isActive && "activeNav"}`
                }
                to={el?.path}
              >
                {el?.title}
              </NavLink>
            ))}
          </div>
          {/* Icon and Search bar */}
          <div className="flex items-center space-x-4 ml-auto bg-white/30 px-4">
            <Link className="" to={AUTHENTICATED ? "/my-profile" : "/login"}>
              <User2 className="w-8 h-6" />
            </Link>
            <Link to="/cart">
              <div className="relative mr-2">
                <ShoppingCart
                  fill={cartItems?.length && "#f97316"}
                  className="w-7 h-7 "
                />
                <div
                  className={`absolute bottom-4 left-4 bg-gray-800 font-bold rounded-full  text-sm text-white w-5 h-5 flex items-center justify-center ${
                    cartItems?.length && "bg-black text-white "
                  }`}
                >
                  <p>{cartItems.length}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopBar;
