import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { CheckCircle2 } from "lucide-react";

interface Props {
  title: string;
  description: string;
  image: string;
  features: string[];
  icon: React.ElementType;
  reverse?: boolean;
}

export default function ServiceSection({
  title,
  description,
  image,
  features,
  icon: Icon,
  reverse = false,
}: Props) {
  return (
    <section className="py-24">
      <Container>
        <div
          className={`grid items-center gap-16 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <div className="relative h-[550px] overflow-hidden rounded-[32px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <Icon size={30} className="text-[#0B4EA2]" />
            </div>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              {title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-[#0B4EA2]"
                    size={20}
                  />

                  <span className="text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-[#0B4EA2] px-8 py-4 font-semibold text-white transition hover:bg-[#083d7d]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}