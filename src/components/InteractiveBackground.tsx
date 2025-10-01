// src/components/InteractiveBackground.tsx

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Komponen Blob tetap sama, ia hanya menerima nilai fisika dari luar
const Blob = ({ stiffness, damping, className }: { stiffness: number; damping: number; className: string; }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // useSpring akan menciptakan gerakan yang halus sesuai fisika yang diberikan
  const springX = useSpring(mouseX, { stiffness, damping });
  const springY = useSpring(mouseY, { stiffness, damping });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  // Kalkulasi untuk memusatkan blob di kursor
  const size = parseInt(className.match(/w-\[(\d+)px\]/)?.[1] || '300', 10);
  const halfSize = size / 2;
  const transformedX = useTransform(springX, val => val - halfSize);
  const transformedY = useTransform(springY, val => val - halfSize);

  return (
    <motion.div
      className={`absolute filter blur-2xl will-change-transform ${className}`}
      style={{
        translateX: transformedX,
        translateY: transformedY,
      }}
    />
  );
};


export default function InteractiveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Blob 
        stiffness={90} 
        damping={30}
        className="w-[300px] h-[300px] bg-cyan-400/50 dark:bg-blue-900/50 rounded-full" 
      />
      <Blob 
        stiffness={50} 
        damping={30}
        className="w-[150px] h-[150px] bg-blue-400/50 dark:bg-cyan-800/50 rounded-full" 
      />
    </div>
  );
}