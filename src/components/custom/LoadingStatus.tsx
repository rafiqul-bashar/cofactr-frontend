import React, { useEffect, useState } from "react";
import BouncingDot from "./loding/BouncingDot";

export default function LoadingStatus() {
  return (
    <div className="flex items-center justify-center py-6">
      <BouncingDot />
    </div>
  );
}

// awesome animation
// import { animate, motion, useMotionValue, useTransform } from "motion/react";
// import { useEffect } from "react";

// export default function HTMLContent() {
//   const count = useMotionValue(0);
//   const rounded = useTransform(() => Math.round(count.get()));

//   useEffect(() => {
//     const controls = animate(count, 100, { duration: 5 });
//     return () => controls.stop();
//   }, []);

//   return <motion.pre style={text}>{rounded}</motion.pre>;
// }

// /**
//  * ==============   Styles   ================
//  */

// const text = {
//   fontSize: 64,
//   color: "#4ff0b7",
// };
