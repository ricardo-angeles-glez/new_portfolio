import SectionTitle from "@/components/SectionTitle";

export default function StrategyPage() {
  return (
    <main className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
      <SectionTitle title="Strategy" subtitle="How I approach projects" />

      <div className="mt-10 grid gap-8 md:grid-cols-2 text-gray-700">
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">01 — Research</h3>
          <p>Understanding the client’s goals, audience, and industry.</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">02 — Design</h3>
          <p>Translating concepts into interactive and engaging visuals.</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">03 — Development</h3>
          <p>Bringing ideas to life with clean, scalable code.</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">04 — Launch & Support</h3>
          <p>Deploying the project and ensuring long-term performance.</p>
        </div>
      </div>
    </main>
  );
}
