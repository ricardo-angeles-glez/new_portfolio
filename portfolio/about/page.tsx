import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <main className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
      <SectionTitle title="About Me" subtitle="Who I am & what I do" />

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-gray-700">
        <p>
          I’m Ricardo Ángeles, a creative developer and music producer passionate about building immersive digital experiences.
        </p>
        <p>
          My work blends design, technology, and sound to create interactive websites, audiovisual projects, and experiences that connect emotionally with audiences.
        </p>
      </div>
    </main>
  );
}
