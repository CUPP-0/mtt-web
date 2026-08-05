import Container from "@/components/layout/Container";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Company Journey
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Our Journey
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Milestones that shaped MTT into a trusted corporate travel partner.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-blue-100" />

          <div className="space-y-14">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-8">
                {/* Dot */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B4EA2] text-white font-bold shadow-lg">
                  ✓
                </div>

                {/* Content */}
                <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl">
                  <span className="text-sm font-semibold text-[#0B4EA2]">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}