"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function CaseStudyCard({ title, description, image, slug }: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition"
    >
      <Link href={`/work/${slug}`}>
        <div className="relative w-full h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-3 text-gray-600 text-sm">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
