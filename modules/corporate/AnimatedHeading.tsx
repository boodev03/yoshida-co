import { motion } from "framer-motion";

const AnimatedHeading = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap flex items-center relative">
      <motion.div
        className="inline-block"
        initial={{ x: "90vw" }} // Start slightly visible from the right
        animate={{ x: "-100%" }} // Move off-screen to the left
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 100, // Slow speed as provided
            ease: "linear", // Smooth, constant speed
          },
        }}
      >
        <h2
          className="text-[84px] mlg:text-[164px] font-bold font-noto-sans leading-none tracking-tight text-transparent"
          style={{
            WebkitTextStroke: "2px #3b82f6", // blue-500
            color: "transparent",
            letterSpacing: "0.02em",
          }}
        >
          FROM DECOMMISSIONING TO SPACE
        </h2>
      </motion.div>

      <p className="absolute bottom-0 left-0 text-xl mlg:text-[32px] text-web-main font-bold">
        廃炉から宇宙まで
      </p>
    </div>
  );
};

export default AnimatedHeading;
