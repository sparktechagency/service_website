"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { baseUrl } from "@/redux/features/api/apiSlice";

interface Banner {
  _id: string;
  image: string;
}

const CookieBannerSlider = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch(`${baseUrl}/dashboard/all-banner`);
        const data = await res.json();
        setBanners(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch banners", error);
      }
    };
    fetchBanners();
  }, []);

  if (!banners.length || !showBanner) return null;

  return (
    <div className="left-0 w-full z-50 flex justify-center animate-slide-up mb-10">
      <div className="relative w-[97%] max-w-5xl rounded-xl shadow-xl bg-white border border-gray-200 overflow-hidden">
        <button
          onClick={() => setShowBanner(false)}
          className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-black z-50 pe-2"
        >
          &times;
        </button>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          className="rounded-xl"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner._id}>
              <img
                src={`${baseUrl}/${banner.image}`}
                alt="Cookie banner"
                className="w-full h-[200px] sm:h-[140px] md:h-[300px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CookieBannerSlider;
