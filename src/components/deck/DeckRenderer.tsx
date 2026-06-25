// src/components/deck/DeckRenderer.tsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type DeckRendererProps = {
  slides: React.ReactNode[];
};

export function DeckRenderer({ slides }: DeckRendererProps) {
  return (
    <main className="min-h-screen bg-slate-950 px-3 py-6 sm:px-6 md:flex md:items-center md:justify-center">
      <div className="w-full max-w-[1280px]">
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          navigation
          pagination={{ clickable: true }}
          keyboard
          spaceBetween={24}
          slidesPerView={1}
          initialSlide={0}
          watchOverflow
          className="w-full pb-12"
          style={{ width: "100%" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="!h-auto !w-full">
              <div className="w-full px-1" style={{ minHeight: "70vh" }}>
                {slide}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="mt-2 text-center text-xs text-slate-400 sm:hidden">
          Rotate your phone for the best presentation view.
        </p>
      </div>
    </main>
  );
}
