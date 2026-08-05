import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#071B34] text-white">
      <Container>
        <div className="py-20">

          <div className="grid gap-14 lg:grid-cols-4">

            {/* Logo */}
            <div>
              <Image
                src="/logo-mitra.png"
                alt="MTT"
                width={180}
                height={60}
                className="w-auto h-12"
              />

              <p className="mt-6 text-white/70 leading-8">
                PT Mitra Tours & Travel provides integrated corporate
                travel solutions for modern businesses across Indonesia.
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-6 text-lg font-semibold">
                Company
              </h4>

              <div className="space-y-4 text-white/70">

                <Link href="/about" className="block hover:text-white">
                  About Us
                </Link>

                <Link href="/products" className="block hover:text-white">
                  Products
                </Link>

                <Link href="/career" className="block hover:text-white">
                  Career
                </Link>

                <Link href="/contact" className="block hover:text-white">
                  Contact
                </Link>

              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-6 text-lg font-semibold">
                Services
              </h4>

              <div className="space-y-4 text-white/70">

                <p>Corporate Travel</p>
                <p>MICE</p>
                <p>Hotel</p>
                <p>Transportation</p>
                <p>Digital Platform</p>

              </div>
            </div>

            {/* Contact */}
            <div>

              <h4 className="mb-6 text-lg font-semibold">
                Contact
              </h4>

              <div className="space-y-5">

                <div className="flex gap-3">

                  <MapPin className="mt-1 text-[#4EA5FF]" size={18} />

                  <p className="text-white/70">
                    Patra Jasa Office Tower<br />
                    Jakarta Selatan
                  </p>

                </div>

                <div className="flex gap-3">

                  <Mail className="text-[#4EA5FF]" size={18} />

                  <p className="text-white/70">
                    info@mitratour.com
                  </p>

                </div>

                <div className="flex gap-3">

                  <Phone className="text-[#4EA5FF]" size={18} />

                  <p className="text-white/70">
                    +62 21 xxxx xxxx
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Divider */}

          <div className="my-14 h-px bg-white/10" />

          {/* Bottom */}

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex gap-4">

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#0B4EA2]"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#0B4EA2]"
              >
                <FaLinkedinIn size={20} />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#0B4EA2]"
              >
                <FaYoutube size={20} />
              </Link>

            </div>

            <div className="text-white/60 text-sm">
              © 2026 PT Mitra Tours & Travel. All Rights Reserved.
            </div>

            <div className="flex gap-6 text-sm text-white/60">

              <Link href="#">
                Privacy Policy
              </Link>

              <Link href="#">
                Terms
              </Link>

              <Link href="#">
                Sitemap
              </Link>

            </div>

          </div>

        </div>
      </Container>
    </footer>
  );
}