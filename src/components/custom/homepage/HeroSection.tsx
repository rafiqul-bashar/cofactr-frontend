import IMG_SRC from "../../../assets/bg-slate.png";
import HeroMain from "../../../assets/black.png";

import { motion } from "framer-motion";
import { brandConfig } from "../../../lib/store_details";
export default function HeroSection() {
  const imageStyle = {
    backgroundImage: `url(${IMG_SRC})`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
  };
  return (
    <main style={imageStyle}>
      <section className="min-h-[780px] w-full ">
        <div className="container">
          <nav>{/* navbar */}</nav>
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] ">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 space-y-8 ">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight md:ml-14"
              >
                {brandConfig.brand_name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative p-4"
              >
                <div className="relative z-10  space-y-4">
                  <h1 className="text-2xl">{brandConfig.tagline}</h1>
                  <h1 className=" opacity-55 leading-loose">
                    {brandConfig.hero_banner_text}
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>

            {/* Hero Image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={HeroMain}
                alt="hero_pic"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* background shapes */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute top-24 -right-16 h-[180px] w-[180px] border-[22px] border-shop-primary rounded-full "
              ></motion.div>
              {/* bg big text */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className=" z-[1] absolute -top-4 left-[200px]"
              >
                <div className="text-[124px] font-bold text-[#1a1f29]/40 scale-150 leading-none">
                  {brandConfig.brand_name}
                </div>
              </motion.div>
            </div>
            {/* third div section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 space-y-8 "
            >
              <h1 className="text-2xl font-bold leading-tight md:ml-14 opacity-0">
                {brandConfig.brand_name}
              </h1>
              <div className="relative p-4">
                <div className="relative z-10  space-y-4">
                  <h1 className="text-2xl">Cheesy Burgers Here!!</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati necessitatibus velit repellendus accusamus ullam
                    et blanditiis reiciendis, quia vel doloribus facere ut rerum
                    a aperiam quis commodi molestias maiores quod.
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg--[#1a1f29]/50"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
