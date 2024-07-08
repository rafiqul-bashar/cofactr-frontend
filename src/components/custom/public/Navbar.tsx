import React from "react";

import Hamburger from "hamburger-react";

import { Search, ShoppingCartIcon, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import userStore from "../../../store/user.store";
export default function Navbar() {
  const [isOpen, setOpen] = React.useState(false);
  const { AUTHENTICATED } = userStore((state) => state);

  return (
    <>
      <div className="flex items-center px-3 py-6 gap-8 md:justify-between md:container">
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src="https://www.svgrepo.com/show/250771/ecommerce.svg"
              alt="logo"
              className="w-12 h-12"
            />
            <h2 className="italic font-bold tracking-tighter text-2xl">
              Cofactr
            </h2>
          </div>
        </Link>
        <div className="flex items-center gap-6 ">
          <button>
            <Search className="w-8 h-8" />
          </button>
          <Link to={AUTHENTICATED ? "/my-profile" : "/login"}>
            <User2 className="w-8 h-8" />
          </Link>
          <Link to="/cart">
            <ShoppingCartIcon className="w-8 h-8" />
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="h-screen bg-red-300 fixed top-20 z-20 w-full md:hidden"></div>
      )}
    </>
  );
}
