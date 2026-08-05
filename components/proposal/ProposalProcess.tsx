import Container from "@/components/layout/Container";
import { proposalProcess } from "@/data/proposal";

export default function ProposalProcess() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Simple Process
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            How It Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Getting started is easy. Our team will guide you from the initial
            request to the successful execution of your corporate travel
            program.
          </p>
        </div>

        <div className="relative mt-20 grid gap-8 lg:grid-cols-4">
          {proposalProcess.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.step} className="relative">
                {/* Connector */}
                {index !== proposalProcess.length - 1 && (
                  <div className="absolute top-12 left-[65%] hidden h-[2px] w-[70%] bg-slate-300 lg:block" />
                )}

                <div className="relative z-10 rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0B4EA2] text-white text-2xl font-bold">
                    {item.step}
                  </div>

                  <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                    <Icon size={30} className="text-[#0B4EA2]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}