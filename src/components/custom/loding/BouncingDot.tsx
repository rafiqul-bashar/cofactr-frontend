import { AnimatePresence, motion } from "framer-motion";

const BouncingDot = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        ease: "linear",
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  const l = [1, 1, 4, 5, 5];
  return (
    <AnimatePresence>
      <motion.div
        // variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex gap-4"
      >
        {Array.from({ length: 5 }).map((el, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 1, 0.6, 0.2] }}
            transition={{
              delay: 0.4 * (i + 1),
              duration: 2.2,

              repeat: Infinity,
              ease: "linear",
            }}
            className="w-8 h-3 bg-orange-500"
            key={i}
          ></motion.div>
        ))}{" "}
      </motion.div>
    </AnimatePresence>
  );
};

export default BouncingDot;
