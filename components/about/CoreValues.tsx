import Container from "@/components/layout/Container";
import {
  ShieldCheck,
  Lightbulb,
  Trophy,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    icon: ShieldCheck,
    description:
      "We uphold honesty, transparency, and accountability in every service we provide.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description:
      "We continuously embrace technology and innovation to improve business travel experiences.",
  },
  {
    title: "Excellence",
    icon: Trophy,
    description:
      "We are committed to delivering high-quality services with professionalism and consistency.",
  },
  {
    title: "Collaboration",
    icon: Users,
    description:
      "We believe strong partnerships and teamwork create better solutions for our clients.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Our Values
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Core Values
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            The principles that guide every decision and every journey we
            deliver.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon className="text-[#0B4EA2]" size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}