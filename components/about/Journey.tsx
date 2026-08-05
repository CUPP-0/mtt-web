"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import { timeline } from "@/data/timeline";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Journey() {
  return (
    <section className="py-28 bg-slate-950">
      <Container>

        <div className="mb-14 text-center">

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            Our Journey
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Growing Together
          </h2>

          <p className="mt-6 text-lg text-white/70">
            Every milestone reflects our commitment to delivering
            exceptional corporate travel solutions.
          </p>

        </div>

        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          loop
          speed={1200}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="rounded-[40px]"
        >
          {timeline.map((item) => (
            <SwiperSlide key={item.year}>
              <div className="relative h-[650px] overflow-hidden rounded-[40px]">

                {/* Background */}

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover scale-100 animate-[kenburns_8s_ease-in-out_infinite]"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-[#0B4EA2]/35" />

                {/* Gradient */}

                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

                {/* Content */}

                <div className="absolute bottom-20 left-20 max-w-2xl text-white">

                  <span className="text-7xl font-black">
                    {item.year}
                  </span>

                  <h3 className="mt-6 text-4xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-xl leading-9 text-white/80">
                    {item.description}
                  </p>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </section>
  );
}