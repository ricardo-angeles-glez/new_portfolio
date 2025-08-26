"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  width = 600,
  height = 400,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className={className}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-2xl shadow-lg object-cover"
      />
    </motion.div>
  );
};

export default AnimatedImage;
