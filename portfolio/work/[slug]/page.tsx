import CaseStudyLayout from "@/components/CaseStudyLayout";

interface Props {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: Props) {
  return (
    <CaseStudyLayout slug={params.slug}>
      <h1 className="text-4xl font-bold mb-6 capitalize">{params.slug.replace("-", " ")}</h1>
      <p className="text-lg text-gray-700">
        Detailed case study content goes here. You can include images, animations, and step-by-step breakdowns.
      </p>
    </CaseStudyLayout>
  );
}
