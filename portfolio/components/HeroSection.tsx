"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedImage from "./AnimatedImage";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24">
      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-neutral-900 dark:text-white">
          Ricardo Ángeles <br /> 
          <span className="text-primary">Music Producer & Creative</span>
        </h1>
        <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
          Crafting emotional soundscapes in Organic House & Afro House. 
          Supported by James Grant, Wassu, Marsh, and more.
        </p>
        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <Link
            href="/work"
            className="px-6 py-3 bg-primary text-white rounded-xl font-semibold shadow-md hover:bg-primary/80 transition"
          >
            Explore My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-neutral-400 dark:border-neutral-600 rounded-xl font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
          >
            Let’s Connect
          </Link>
        </div>
      </motion.div>

      {/* Imagen */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end mb-10 md:mb-0"
      >
        <AnimatedImage
          src="/images/hero-image.jpg"
          alt="Ricardo Ángeles"
          width={500}
          height={500}
          className="rounded-full overflow-hidden shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
