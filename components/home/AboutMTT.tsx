import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import Container from "@/components/layout/Container";

const features = [
  "Corporate Travel Expert",
  "Nationwide Service Network",
  "Digital & Integrated Solutions",
  "Professional Customer Support",
];

export default function AboutMTT() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-[32px]">
            <Image
              src="/profil.jpg"
              alt="About MTT"
              width={700}
              height={700}
              className="h-[550px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
              About MTT
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              More Than Travel,
              <br />
              We Deliver Business Mobility.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              PT Mitra Tours & Travel is a trusted corporate travel management
              company delivering integrated business travel solutions,
              accommodation, transportation, and MICE services with a strong
              commitment to quality, efficiency, and customer satisfaction.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <BadgeCheck className="text-[#0B4EA2]" size={22} />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0B4EA2] px-7 py-3 font-semibold text-white transition hover:bg-[#083b7d]"
            >
              About Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}