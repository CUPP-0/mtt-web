import Container from "@/components/layout/Container";
import { proposalBenefits } from "@/data/proposal";

export default function WhyProposal() {
  return (
    <section className="bg-white py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Why Request a Proposal?
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Designed for Your Business
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Receive a personalized proposal tailored to your company's travel
            requirements, ensuring the right solution with transparent pricing
            and professional support.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {proposalBenefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0B4EA2] hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-[#0B4EA2]">
                  <Icon
                    size={30}
                    className="text-[#0B4EA2] transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}