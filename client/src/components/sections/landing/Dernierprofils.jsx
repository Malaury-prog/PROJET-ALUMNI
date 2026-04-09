import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import CarteApprenant from "../../cards/CarteApprenant";
import mockApprenants from "../../../data/mockApprenants.json";
import { genererApprenants } from "../../../data/mockApprenants";

export default function DerniersProfiles() {
  const tousLesApprenants = [...mockApprenants, ...genererApprenants(6)];

  return (
    <section className="w-full flex items-center flex-col py-8v max-w-7xl mx-auto px-3w">
      <h2 className="text-h2 md:text-h2-desktop text-text-main mb-4v">
        Découvrez nos Profils
      </h2>
      <Swiper
        modules={[Navigation, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        initialSlide={5}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        className="w-full"
      >
        {tousLesApprenants.map((apprenant) => (
          <SwiperSlide key={apprenant.id} style={{ width: "280px" }}>
            <CarteApprenant {...apprenant} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
