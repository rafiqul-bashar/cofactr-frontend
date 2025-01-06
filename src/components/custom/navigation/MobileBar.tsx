import { Link } from "react-router-dom";
import SearchProductsInput from "../public/SearchProductsInput";
import { navLinksPublic } from "../../../lib/constants";
import useGlobalUIStore from "../../../store/global_ui.store";
import Hamburger from "hamburger-react";
import { easeIn, easeOut, motion } from "framer-motion";

const MobileBar = () => {
  const { MENU_OPEN, TOGGLE_MENU } = useGlobalUIStore((state) => state);
  return (
    <motion.div
      initial={{ opacity: 0, x: 340 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: easeOut }}
      id="mobile_menu"
      className={`fixed top-0 right-0 z-40 bg-[#111111] w-[80vw] h-screen transform ${
        MENU_OPEN ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="text-white ml-auto w-fit p-4">
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
          <Link
            className="text-white font-semibold text-xl tracking-wide"
            key={i}
            to={el?.path}
          >
            {el?.title}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileBar;
