import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SpeedLine = ({ delay, top, height, opacity, duration }) => (
   <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{
         duration: duration || 0.8,
         repeat: Infinity,
         ease: "linear",
         delay: delay,
      }}
      style={{ top, height, opacity }}
      className="absolute right-0 w-1/2 bg-linear-to-l from-transparent via-[#FF0000] to-transparent rounded-full"
   />
);

const HeroAnimation = () => {
   const [deliveryStage, setDeliveryStage] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setDeliveryStage((prev) => (prev === 0 ? 1 : 0));
      }, 4000);
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="w-full h-full overflow-hidden relative flex items-center justify-center">
         <motion.div 
            animate={{ opacity: deliveryStage === 0 ? 1 : 0.1 }}
            className="absolute inset-0 w-full h-full"
         >
            {[...Array(15)].map((_, i) => (
               <SpeedLine
                  key={i}
                  top={`${Math.random() * 100}%`}
                  height={Math.random() * 2 + 1}
                  opacity={Math.random() * 0.3 + 0.1}
                  delay={Math.random() * 2}
                  duration={Math.random() * 2 + 2}
               />
            ))}
         </motion.div>
      </div>
   );
};

export default HeroAnimation;
