import { motion } from "framer-motion";

export const StarBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large soft gradient blob moving slowly */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "20%", "-20%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
        }}
      />

      {/* Second blob for depth */}
      <motion.div
        className="absolute w-[40vw] h-[40vw] bg-purple-500/20 rounded-full blur-2xl"
        animate={{
          x: ["30%", "-30%", "30%"],
          y: ["-30%", "30%", "-30%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
// export default Starbackground;
