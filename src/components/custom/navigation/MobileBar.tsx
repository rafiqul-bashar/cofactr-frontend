import { Link } from "react-router-dom";
import SearchProductsInput from "../public/SearchProductsInput";
import { navLinksPublic } from "../../../lib/constants";
import useGlobalUIStore from "../../../store/global_ui.store";
import Hamburger from "hamburger-react";
import Logo from "../Logo";
let AUTHENTICATED = false;

const MobileBar = () => {
  const { MENU_OPEN, TOGGLE_MENU } = useGlobalUIStore((state) => state);
  return (
    <section
      id="mobile_menu"
      className={`fixed top-0 left-0 z-40 bg-zinc-100 w-[80vw] h-screen transform ${
        MENU_OPEN ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex items-center justify-between  py-3 bg-shop-primary px-2">
        <Logo />
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
      <div className="h-fit w-full px-6 py-5 ">
        <SearchProductsInput TOGGLE_MENU={TOGGLE_MENU} mobileMenu={true} />
      </div>

      <div
        onClick={() => TOGGLE_MENU(false)}
        className="flex flex-col items-start gap-5 pl-8"
        aria-label="mobile"
      >
        {navLinksPublic?.map((el, i) => (
          <Link className="navlink" key={i} to={el?.path}>
            {el?.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MobileBar;
