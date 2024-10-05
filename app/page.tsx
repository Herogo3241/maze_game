"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 

const MazeAnimation: React.FC = () => {
  const mazePaths = [
    
    "M 10 10 H 90", 
    "M 90 10 V 90", 
    "M 10 90 H 90", 
    "M 10 10 V 90", 
  
    
    "M 30 10 V 70", 
    "M 50 10 V 50", 
    "M 70 10 V 70", 
  
    "M 10 30 H 90", 
    "M 10 50 H 30",
    "M 50 30 H 70", 
  
    "M 10 70 H 90", 
    "M 30 50 H 30", 
    
   
    "M 30 30 V 50", 
    "M 50 50 V 70", 
    "M 70 50 H 90", 
    "M 50 70 H 70", 
  ];

  return (
    <svg
      className="h-40 w-40"
      viewBox="0 0 100 100"
      fill="none"
      stroke="white"
      strokeWidth={4}
    >
      {mazePaths.map((path, index) => (
        <motion.path
          key={index}
          d={path}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5 / mazePaths.length, delay: (index * 5) / mazePaths.length }}
        />
      ))}
    </svg>
  );
};

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter(); // Initialize useRouter

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      router.push("/game"); 
    }, 5000); 
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black flex justify-center items-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            
            <MazeAnimation />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default SplashScreen;
