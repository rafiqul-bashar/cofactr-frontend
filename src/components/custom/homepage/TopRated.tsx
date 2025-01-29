import { motion } from "framer-motion";

import p1 from "../../../assets/product1.png";
import p2 from "../../../assets/product2.png";
import p3 from "../../../assets/product3.png";
import p4 from "../../../assets/product4.png";

const dummyD = [
  { title: "Bonajour Green Tea Essential Mask 25g", price: 200, image: p4 },
  {
    title: "Heimish RX Hyaluronic Acid Rich Whipped Cream 50ml",
    price: 2100,
    image: p1,
  },
  { title: "Heimish RX AHA BHA Enzyme Scrub 130ml", price: 1500, image: p2 },
  {
    title: "Bonajour Ginger Aqua Relief Foam Cleanser 150ml",
    price: 1130,
    image: p3,
  },
];

export default function TopRated() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
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
        delay: 0.4,
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <section className="container py-16 space-y-4 ">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.4,
          }}
          className="text-gray-600 text-4xl font-bold"
        >
          Top
          <span className="text-shop-primary"> Rated </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-gray-600 text-lg"
        >
          Our collection offers everything you need for a glowing complexion
          offering a luxurious skincare experience like never before.
        </motion.p>
      </div>
      {/* card section */}
      <motion.div
        variants={containerVariants}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 "
      >
        {dummyD?.map((el, i) => (
          <motion.div
            variants={cardVariants}
            key={i}
            className="text-center p-6"
          >
            <img
              src={el.image}
              alt={el.title}
              className="img-shadow2 max-w-[200px] max-h-[210px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2 mt-6 text-lg">
              <h2 className="font-bold tracking-wide text-lightGray truncate">
                {el?.title}
              </h2>
              <p className=" text-lightGray font-bold tracking-wide">
                <span className="text-shop-primary">&#2547;</span> {el.price}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
