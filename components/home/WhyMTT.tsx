import Container from "@/components/layout/Container";
import WhyCard from "./WhyCard";
import { whyMTT } from "@/data/why-mtt";

export default function WhyMTT() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Why Choose MTT
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Smart Travel Solutions for Modern Business
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            PT Mitra Tours & Travel delivers integrated corporate travel
            management with reliable service, nationwide coverage, and
            innovative digital solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {whyMTT.map((item) => (
            <WhyCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}