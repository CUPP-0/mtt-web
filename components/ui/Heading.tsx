import { cn } from "@/lib/utils";

interface HeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function Heading({
  badge,
  title,
  subtitle,
  center = false,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        center && "mx-auto text-center"
      )}
    >
      {badge && (
        <span className="mb-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold leading-tight lg:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}