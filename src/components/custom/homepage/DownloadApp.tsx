import { motion } from "framer-motion";
import app_store from "../../../assets/website/app_store.png";
import play_store from "../../../assets/website/play_store.png";
import CoffeBanner from "../../../assets/coffee-cover.jpg";

export default function DownloadApp() {
  const bannerStyle = {
    backgroundImage: `url(${CoffeBanner})`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    height: "100%",
    width: "100%",
  };
  return (
    <div className="container my-14 ">
      <div
        style={bannerStyle}
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center  rounded-xl"
      >
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl text-center sm:text-4xl font-bold text-gray-800 "
          >
            Download The App
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
            className="text-center sm:px-24 text-gray-600 font-medium sm:text-lg"
          >
            Try our app for more smoother and better shopping experience.
          </motion.p>
          <div className="flex justify-center items-center gap-4">
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              src={play_store}
              alt="app_icon"
              className="cursor-pointer max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            />
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
              }}
              src={app_store}
              alt="app_icon-2"
              className="md:h-20 h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
