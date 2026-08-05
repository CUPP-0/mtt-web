import Container from "@/components/layout/Container";
import { process } from "@/data/process";
import { ArrowRight } from "lucide-react";

export default function BusinessProcess() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Business Process
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            How We Work
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From consultation to reporting, we ensure every corporate journey
            is handled professionally and efficiently.
          </p>
        </div>

        {/* Process */}
        <div className="mt-20 grid items-stretch gap-8 lg:grid-cols-5">
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="relative">
                <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-[#0B4EA2]">
                    <Icon
                      size={30}
                      className="text-[#0B4EA2] transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>

                {index !== process.length - 1 && (
                  <ArrowRight
                    className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-[#0B4EA2] lg:block"
                    size={24}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}