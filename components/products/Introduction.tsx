import Container from "@/components/layout/Container";
import {
  Plane,
  Building2,
  Hotel,
  Car,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Corporate Travel",
    description: "End-to-end business travel management.",
  },
  {
    icon: Building2,
    title: "MICE & Events",
    description: "Professional meeting and event solutions.",
  },
  {
    icon: Hotel,
    title: "Hotel Reservation",
    description: "Corporate accommodation with special rates.",
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Reliable executive transportation services.",
  },
];

export default function Introduction() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            What We Offer
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Integrated Business Travel Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide comprehensive corporate travel services that simplify
            business mobility, improve operational efficiency, and deliver
            seamless travel experiences for companies across Indonesia.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition duration-300 group-hover:bg-[#0B4EA2]">
                  <Icon
                    size={30}
                    className="text-[#0B4EA2] transition duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}