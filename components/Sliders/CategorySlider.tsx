"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Scrollbar } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const breakpoints = {
  320: {
    slidesPerView: 3,
  },
  640: {
    slidesPerView: 4,
  },
  768: {
    slidesPerView: 6,
  },
};

interface gameCategory {
  slug: string;
  image: string;
  title: string;
  description?: string;
}

export default function CategorySlider({
  gameCategories,
}: {
  gameCategories: gameCategory[];
}) {
  console.log(gameCategories);
  return (
    <div className="mb-6">
      <div className="flex justify-between gap-4">
        <h2 className="font-sans mb-4 font-bold">Categories</h2>
        <a
          href={`/category`}
          className="text-sm font-medium hover:underline underline-offset-4 text-accent"
        >
          View All{" "}
          <ChevronRightIcon className="w-4 h-4 text-accent inline-block" />
        </a>
      </div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={6}
        breakpoints={breakpoints}
        navigation
        scrollbar={{ draggable: true }}
        style={
          {
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-incactive-color": "#999999",
            "--swiper-pagination-bullet-incactive-opacity": "1",
            "--swiper-pagination-bullet-size": "0.6em",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-theme-color": "#FFF",
            "--swiper-navigation-size": "24px",
            "--swiper-navigation-sides-offset": "30px",
          } as React.CSSProperties
        }
      >
        {gameCategories.map((item, i) => (
          <SwiperSlide key={i} className="group">
            <a href={`/category/${item.slug}`} className="group">
              <div className="overflow-hidden rounded-lg border border-accentSecondary mb-2">
                <Image
                  src={`/category/${item.image}`}
                  width={220}
                  height={320}
                  alt={item.title}
                  className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
