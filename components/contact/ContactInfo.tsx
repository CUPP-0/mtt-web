import Container from "@/components/layout/Container";
import { contactInfo } from "@/data/contact";

export default function ContactInfo() {
  return (
    <section className="bg-white py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Get in Touch
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            We'd Love to Hear from You
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you have a question, need a quotation, or want to discuss
            your corporate travel requirements, our team is ready to assist.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#0B4EA2] hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-[#0B4EA2]">
                  <Icon
                    size={30}
                    className="text-[#0B4EA2] transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}