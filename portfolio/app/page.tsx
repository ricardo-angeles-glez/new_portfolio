"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function Home() {
  const highlights = [
    { label: "Experience", value: "5+ years" },
    { label: "Industries", value: "SaaS, Music, Startups" },
    { label: "Impact", value: "15%+ conversions" },
  ];

  return (
    <div className="space-y-32">
      {/* Hero */}
      <section className="text-center space-y-6">
        <ScrollReveal>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
            Ricardo Ángeles
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            UX/UI Designer blending strategy, motion, and interaction to craft
            meaningful digital experiences.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <Link
            href="/work"
            className="inline-block mt-6 px-8 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition"
          >
            View Case Studies
          </Link>
        </ScrollReveal>
      </section>

      {/* Highlights */}
      <section className="grid md:grid-cols-3 gap-12 text-center">
        {highlights.map((item, i) => (
          <ScrollReveal key={i}>
            <div className="space-y-2">
              <p className="text-3xl font-semibold">{item.value}</p>
              <p className="text-neutral-600">{item.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>
    </div>
  );
}
