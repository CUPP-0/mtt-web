import Container from "@/components/layout/Container";

export default function ContactForm() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
              Send Message
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Let's Talk
            </h2>

            <p className="mt-4 text-slate-600">
              Fill out the form below and our team will get back to you as soon
              as possible.
            </p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#0B4EA2]"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#0B4EA2]"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#0B4EA2]"
                />
              </div>

              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#0B4EA2]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#0B4EA2]"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#0B4EA2]"
              />

              <button
                type="submit"
                className="rounded-full bg-[#0B4EA2] px-8 py-4 font-semibold text-white transition hover:bg-[#083d7d]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Maps */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm min-h-[780px]">
            
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.230099040204!2d106.82074442631398!3d-6.233369411045455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e14e8cabbd%3A0xe02b42e595685bbd!2sPatra%20Jasa%20Office%20Tower%2C%20Jl.%20Gatot%20Subroto%2C%20RT.6%2FRW.3%2C%20Kuningan%2C%20Kuningan%20Tim.%2C%20Kecamatan%20Setiabudi%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012950!5e0!3m2!1sid!2sid!4v1785896486646!5m2!1sid!2sid"
    className="absolute inset-0 h-full w-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

  {/* Info Card */}
  <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur">
    <h3 className="text-2xl font-bold text-slate-900">
      Head Office
    </h3>

    <p className="mt-3 leading-7 text-slate-600">
      Graha Pertamina, Jakarta, Indonesia
    </p>

    <p className="mt-3 text-slate-600">
      Monday – Friday
      <br />
      08.00 – 17.00 WIB
    </p>
  </div>
</div>
        </div>
      </Container>
    </section>
  );
}