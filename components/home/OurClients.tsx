"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import { clients } from "@/data/clients";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function OurClients() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Our Clients
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Trusted by Leading Companies
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            We are proud to support corporate travel for leading companies
            across various industries in Indonesia.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={50}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.name}>
              <div className="flex h-32 items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={80}
                  className="h-14 w-auto grayscale opacity-70 transition-all duration-300 hover:scale-105 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}