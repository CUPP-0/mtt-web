import Container from "@/components/layout/Container";
import {
  Phone,
  Mail,
  Clock3,
  UserCheck,
} from "lucide-react";

const services = [
  "Flight Booking",
  "Hotel Reservation",
  "Transportation",
  "MICE",
  "Travel Management",
  "Visa Assistance",
];

export default function ProposalForm() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
              Request Proposal
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Tell Us About Your Project
            </h2>

            <p className="mt-4 text-slate-600">
              Complete the information below and our corporate sales team will
              prepare a customized proposal based on your requirements.
            </p>

            <form className="mt-10 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="rounded-xl border border-slate-200 px-4 py-4 focus:border-[#0B4EA2] outline-none"
                />

                <input
                  type="text"
                  placeholder="PIC Name"
                  className="rounded-xl border border-slate-200 px-4 py-4 focus:border-[#0B4EA2] outline-none"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-slate-200 px-4 py-4 focus:border-[#0B4EA2] outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="rounded-xl border border-slate-200 px-4 py-4 focus:border-[#0B4EA2] outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Industry"
                className="w-full rounded-xl border border-slate-200 px-4 py-4 focus:border-[#0B4EA2] outline-none"
              />

              {/* Services */}
              <div>
                <label className="mb-4 block font-semibold text-slate-900">
                  Services Needed
                </label>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-[#0B4EA2]"
                    >
                      <input
                        type="checkbox"
                        className="h-5 w-5 accent-[#0B4EA2]"
                      />

                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Destination"
                  className="rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-[#0B4EA2]"
                />

                <input
                  type="date"
                  className="rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-[#0B4EA2]"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="number"
                  placeholder="Estimated Participants"
                  className="rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-[#0B4EA2]"
                />

                <input
                  type="text"
                  placeholder="Estimated Budget"
                  className="rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-[#0B4EA2]"
                />
              </div>

              <textarea
                rows={6}
                placeholder="Describe your project requirements..."
                className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-[#0B4EA2]"
              />

              <input
                type="file"
                className="w-full rounded-xl border border-dashed border-slate-300 p-4"
              />

              <button
                className="rounded-full bg-[#0B4EA2] px-8 py-4 font-semibold text-white transition hover:bg-[#083d7d]"
              >
                Submit Proposal
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="h-fit rounded-3xl bg-[#0B4EA2] p-10 text-white">
            <h3 className="text-3xl font-bold">
              Need Assistance?
            </h3>

            <p className="mt-4 leading-7 text-white/80">
              Our corporate sales team is ready to help you prepare the best
              proposal for your business.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <Phone />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-white/80">
                    +62 21 xxxx xxxx
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-white/80">
                    proposal@mitratour.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock3 />
                <div>
                  <p className="font-semibold">
                    Response Time
                  </p>
                  <p className="text-white/80">
                    Within 24 Hours
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <UserCheck />
                <div>
                  <p className="font-semibold">
                    Dedicated Consultant
                  </p>
                  <p className="text-white/80">
                    Personalized business travel consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}