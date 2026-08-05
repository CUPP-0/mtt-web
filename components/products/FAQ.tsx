"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-white py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Got Questions?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to the most common questions about our corporate travel
            services.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() => setActive(open ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-slate-50"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180 text-[#0B4EA2]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}