import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/pagination";

const SwiperRender = ({ stories, setSection }) => (
  <Swiper
    key={stories.userId}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <p className="Swiper__close" onClick={setSection}>
      x
    </p>
    {stories.map((story) => (
      <div className="Swiper">
        <SwiperSlide key={story.id}>
          <img
            className="Swiper__storyImage"
            src={story.media.map((media) => media.src)}
            alt=""
          />
          <div className="Swiper__story-info">
            <img className="Swithc__story-info-img" src={story.userImage} />
            <p>{story.likes.featuredLike.username}</p>
          </div>
        </SwiperSlide>
      </div>
    ))}
  </Swiper>
);

export default SwiperRender;
