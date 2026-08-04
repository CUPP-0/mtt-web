import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function WhyCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#0B4EA2] hover:shadow-2xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-[#0B4EA2]">
        <Icon
          size={30}
          className="text-[#0B4EA2] transition group-hover:text-white"
        />
      </div>

      <h3 className="text-2xl font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-500">
        {description}
      </p>

      <Link
        href="/products"
        className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0B4EA2]"
      >
        Learn More
        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-2"
        />
      </Link>
    </div>
  );
}