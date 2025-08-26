"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn("text-center mb-12", className)}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
