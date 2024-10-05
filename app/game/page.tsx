"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Game() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "maze_runner/Build/maze_runner.loader.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-gray-900 to-black  flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute w-full h-full"
      >
        <iframe
          src="maze_runner/index.html"
          width="100%"
          height="100%"
          className="absolute top-0 left-0 right-0 bottom-0 border-none"
        ></iframe>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute top-10 text-center"
      >
        <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
          Maze Runner
        </h1>
        <p className="text-xl text-gray-300 mt-4">Find your way out of the maze</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="absolute bottom-10"
      >
      </motion.div>
    </div>
  );
}
