'use client';
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0, className = "", direction = "up", fullWidth = false }) {
  
  // Konfigurasi arah muncul
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1], // Kurva Bezier untuk "Mahal/Elegan" feel
        delay: delay 
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }} // Animasi jalan saat elemen masuk 50px ke layar
      variants={variants}
      className={className}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      {children}
    </motion.div>
  );
}