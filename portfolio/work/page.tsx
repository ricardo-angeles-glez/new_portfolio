import SectionTitle from "@/components/SectionTitle";
import CaseStudyCard from "@/components/CaseStudyCard";

const works = [
  {
    slug: "project-1",
    title: "Immersive Web Experience",
    description: "An interactive website blending design, sound and animations.",
    image: "/images/work1.jpg",
  },
  {
    slug: "project-2",
    title: "Creative Portfolio",
    description: "A minimalistic yet powerful personal portfolio for a designer.",
    image: "/images/work2.jpg",
  },
];

export default function WorkPage() {
  return (
    <main className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
      <SectionTitle title="Work" subtitle="Selected projects" />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {works.map((work) => (
          <CaseStudyCard key={work.slug} {...work} />
        ))}
      </div>
    </main>
  );
}
