import Container from "@/components/layout/Container";
import { statistics } from "@/data/statistics";

export default function Statistics() {
  return (
    <section className="bg-white py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Company in Numbers
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Trusted by Businesses Nationwide
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our commitment to excellence is reflected through years of
            experience, trusted partnerships, and dedicated service.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0B4EA2]/20 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-[#0B4EA2]">
                  <Icon
                    size={30}
                    className="text-[#0B4EA2] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Value */}
                <h3 className="mt-6 text-5xl font-extrabold text-slate-900">
                  {item.value}
                </h3>

                {/* Label */}
                <p className="mt-3 text-base text-slate-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}