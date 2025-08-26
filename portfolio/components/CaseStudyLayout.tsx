"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CaseStudyLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function CaseStudyLayout({ title, subtitle, children }: CaseStudyLayoutProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-gray-600">{subtitle}</p>}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="prose max-w-none"
      >
        {children}
      </motion.div>
    </div>
  );
}
