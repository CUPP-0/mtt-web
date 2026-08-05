import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

interface Props {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  slug: string;
}

export default function NewsCard({
  title,
  excerpt,
  image,
  category,
  date,
  slug,
}: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-8">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-[#0B4EA2]">
          {category}
        </span>

        <h3 className="mt-5 text-2xl font-bold text-slate-900 line-clamp-2">
          {title}
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
          {excerpt}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
          <Calendar size={16} />
          {date}
        </div>

        <Link
          href={`/news/${slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0B4EA2] transition hover:gap-3"
        >
          Read More
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}