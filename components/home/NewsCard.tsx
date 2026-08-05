import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export default function NewsCard({
  title,
  date,
  category,
  image,
  slug,
}: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-7">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0B4EA2]">
            {category}
          </span>

          <span className="text-sm text-slate-500">
            {date}
          </span>
        </div>

        <h3 className="text-2xl font-bold leading-snug text-slate-900">
          {title}
        </h3>

        <Link
          href={`/news/${slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0B4EA2]"
        >
          Read More
          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-2"
          />
        </Link>
      </div>
    </article>
  );
}