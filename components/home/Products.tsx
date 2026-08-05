import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Products & Business
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Comprehensive Corporate Travel Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            We provide end-to-end travel management services designed to support
            your company's business journey.
          </p>
        </div>

        <div className="space-y-24">
          {products.map((item, index) => (
            <div
              key={item.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-[420px] overflow-hidden rounded-3xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-4xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-8 space-y-4">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle
                        className="text-[#0B4EA2]"
                        size={20}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0B4EA2] px-6 py-3 font-medium text-white transition hover:bg-[#083b7d]">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}