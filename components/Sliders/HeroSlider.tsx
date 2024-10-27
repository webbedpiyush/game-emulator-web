"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSlider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="h-[340px] md:h-[480px] bg-main rounded-lg border border-accentSecondary mb-6"
        style={{
          "--swiper-pagination-color": "#ffba08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "0.6em",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-theme-color": "#fff",
          "--swiper-navigation-size": "24px",
          "--swiper-navigation-sides-offset": "30px",
        }}
      >
        <SwiperSlide className="bg-[url('/slide/slide-1.png')] bg-no-repeat bg-right p-20 items-center" style={{
          display:"flex"
        }}>
          <div className="max-w-3xl">
            <div className="text-accent text-sm mb-2 uppercase">
              free arcade games
            </div>
            <h1 className="text-4xl lg:text-6xl mb-4 font-sans font-bold">
              PLAY RETRO GAMES FOR FREE
            </h1>
            <p className="max-w-[418px] mb-6">
              Relive the Classics! Dive into our Collection of retro games and
              enjoy them for free. Start playing for Now!
            </p>
            <a href="/" className="text-sm bg-accent-gradient px-6 py-3 rounded-xl border border-yellow-400 uppercase hover:opacity-70">Play Unfair Mario</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('/slide/slide-1.png')] bg-no-repeat bg-right p-20 items-center" style={{
          display:"flex"
        }}>
          <div className="max-w-3xl">
            <div className="text-accent text-sm mb-2 uppercase">
              free arcade games
            </div>
            <h1 className="text-4xl lg:text-6xl mb-4 font-sans font-bold">
             #2
            </h1>
            <p className="max-w-[418px] mb-6">
              play something
            </p>
            <a href="/" className="text-sm bg-accent-gradient px-6 py-3 rounded-xl border border-yellow-400 uppercase hover:opacity-70">Play Unfair Mario</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
