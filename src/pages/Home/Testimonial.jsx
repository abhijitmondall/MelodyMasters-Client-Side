import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import personGirl from "./../../assets/img/person-girl.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="client-testimonial">
      <div className="container my-[9rem]">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={personGirl} alt="" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              optio? Placeat magnam aspernatur nam adipisci dolor at ratione
              asperiores, neque quia deleniti fugit atque, magni, aliquam
              voluptate iure nisi ut sed autem culpa libero. Maxime vel
              consequatur aut ut quod sunt saepe laudantium. Earum beatae
              repudiandae omnis sit voluptatem tempore?
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={personGirl} alt="" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              optio? Placeat magnam aspernatur nam adipisci dolor at ratione
              asperiores, neque quia deleniti fugit atque, magni, aliquam
              voluptate iure nisi ut sed autem culpa libero. Maxime vel
              consequatur aut ut quod sunt saepe laudantium. Earum beatae
              repudiandae omnis sit voluptatem tempore?
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={personGirl} alt="" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              optio? Placeat magnam aspernatur nam adipisci dolor at ratione
              asperiores, neque quia deleniti fugit atque, magni, aliquam
              voluptate iure nisi ut sed autem culpa libero. Maxime vel
              consequatur aut ut quod sunt saepe laudantium. Earum beatae
              repudiandae omnis sit voluptatem tempore?
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
