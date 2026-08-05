import Image from "next/image";
import Container from "@/components/layout/Container";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Corporate Travel Management",
  "MICE & Event Services",
  "Hotel & Accommodation",
  "Transportation Solutions",
];

export default function WhoWeAre() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}
          <div className="relative h-[520px] overflow-hidden rounded-3xl">
            <Image
              src="/profil.jpg"
              alt="Who We Are"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>

            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
              Who We Are
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900 leading-tight">
              Trusted Corporate Travel Partner
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              PT Mitra Tours & Travel provides integrated business travel
              solutions, delivering seamless travel experiences through
              professional services, innovative technology, and a nationwide
              operational network.
            </p>

            <div className="mt-10 grid gap-5">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    className="text-[#0B4EA2]"
                    size={22}
                  />

                  <span className="text-lg text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}