import Hamburger from "hamburger-react";

import { Link, useLocation } from "react-router-dom";
import userStore from "../../../store/user.store";
import axios from "axios";
import { BASE_URL } from "../../../lib/constants";
import { useToast } from "../../ui/use-toast";
import useCartStore from "../../../store/cart.store";
import { motion } from "framer-motion";

import useGlobalUIStore from "../../../store/global_ui.store";
import { Heart, LogOutIcon, ShoppingCart, User2 } from "lucide-react";

const NAVLINKS = [
  { name: "Home", path: "/" },
  { name: "products", path: "/products" },
  { name: "Cart", path: "/cart" },
  { name: "Wishlist", path: "/cart" },
  { name: "Login", path: "/login" },
];

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

  const { cartItems, getCartTotal } = useCartStore();
  const cart = getCartTotal();

  // animation codes

  const linkVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        ease: "easeInOut",
      },
    },
  };
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <header
      className={`${
        pathname === "/" ? "absolute " : "block bg-[#22262F]"
      } md:sticky top-0 left-0 w-full md:bg-[#22262F] text-white md:h-[14vh] h-[9vh] z-40 grid items-center `}
    >
      <motion.div
        variants={containerVariants}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="container flex  justify-between md:justify-center items-center md:text-[#d4d4d4] text-white p-2"
      >
        <motion.div
          variants={linkVariants}
          className="hidden flex-[2] md:flex justify-center items-center tracking-wide gap-6"
        >
          {NAVLINKS.slice(0, 2).map((el, i) => (
            <Link to={el.path} key={i}>
              <motion.h2
                className={
                  pathname == el.path
                    ? `desktop_navlink_active`
                    : `desktop_navlink`
                }
              >
                {el.name}
              </motion.h2>
            </Link>
          ))}

          <a href="/https://redx.com.bd/" target="_blank">
            <motion.h2 className="desktop_navlink">Track Order</motion.h2>
          </a>
        </motion.div>
        {/* logo */}
        <motion.div variants={linkVariants} className="flex-[1]">
          <Link to="/">
            <h2 className="font-bold tracking-tight text-4xl text-shop-primary md:text-[#F5A132] text-center">
              MOON <span className="text-[#d4d4d4]">SKIN</span>
            </h2>
          </Link>
        </motion.div>
        {/* Desktop Links */}
        <motion.div
          variants={linkVariants}
          className="hidden md:flex flex-[2] items-center tracking-wide justify-center gap-6"
        >
          <Link to="/cart">
            <div className="flex group">
              <div className="relative mr-2 group-hover:-translate-y-1 duration-300  transition-all ease-in-out ">
                <ShoppingCart
                  fill={cartItems?.length ? "#f97316" : "#22262F"}
                  className={`mr-2 ${
                    cartItems?.length ? "text-[#F97719]" : " text-[#d4d4d4]"
                  }`}
                />
                <div
                  className={`absolute bottom-4 left-4 rounded-full text-sm  w-5 h-5 flex items-center justify-center ${
                    cartItems?.length && "bg-[#3d3d3d] font-bold"
                  }`}
                >
                  <p>{cartItems?.length}</p>
                </div>
              </div>
              <h2 className="font-medium tracking-tight text-xl text-[#d4d4d4] group-hover:text-[#F97719]">
                Cart ( {cartItems?.length ? cart?.totalPrice : 0.0} )
              </h2>
            </div>
          </Link>{" "}
          {/* rest links */}
          <Link to="/cart">
            <div className="flex group">
              <div className="relative mr-2 group-hover:-translate-y-1 duration-300  transition-all ease-in-out ">
                <Heart
                  fill={cartItems?.length ? "#f97316" : "#22262F"}
                  className={`mr-2  ${
                    cartItems?.length ? "text-[#F97719]" : " text-[#d4d4d4]"
                  }`}
                />
                <div
                  className={`absolute bottom-4 left-4 bg-gray-800 rounded-full  text-sm text-white w-5 h-5 flex items-center justify-center ${
                    cartItems?.length && "bg-[#3d3d3d] font-bold"
                  }`}
                >
                  <p>{cartItems?.length}</p>
                </div>
              </div>
              <h2 className="font-medium tracking-tight text-xl text-[#d4d4d4] group-hover:text-[#F97719]  ">
                Wishlist ( {cartItems?.length ? cart?.totalPrice : 0.0} )
              </h2>
            </div>
          </Link>
          <Link className="" to={AUTHENTICATED ? "/my-profile" : "/login"}>
            <div className="flex group ">
              <User2 className="mr-2 group-hover:-translate-y-1 duration-300  transition-all ease-in-out  group-hover:text-[#F97719]" />
              <h2 className="font-medium tracking-tight text-xl text-[#d4d4d4] group-hover:text-[#F97719] ">
                {AUTHENTICATED ? "My Profile" : "Login"}
              </h2>
            </div>
            {AUTHENTICATED && (
              <button className="hidden md:block" onClick={handleLogOut}>
                <LogOutIcon className="w-8 h-8" />
              </button>
            )}
          </Link>
        </motion.div>
        {/* mobile Hamburger Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.6,
            ease: "easeIn",
          }}
          className="md:hidden"
        >
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
        </motion.div>
      </motion.div>
    </header>
  );
}
