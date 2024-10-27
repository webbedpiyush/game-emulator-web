"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Scrollbar } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function CategorySlider({
  gameCategories,
}: {
  gameCategories: any;
}) {
  return (
    <div>
      <div className="flex justify-between">
        <h2>{gameCategories.title}</h2>
        <a href={`/category/${gameCategories.slug}`}>
          View All <ChevronRightIcon className="w-4 h-4" />
        </a>
      </div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={6}
        navigation
        scrollbar={{ draggable: true }}
      >
        {gameCategories.map((item, i) => (
          <SwiperSlide key={i}>
            <a href={`/category/${item.slug}`} className="group">
              <div>
                <Image
                  src={`/category/${item.image}`}
                  width={220}
                  height={320}
                  alt={item.title}
                  className="w-full h-full"
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
