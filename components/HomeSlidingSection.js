import styled from "@emotion/styled";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import Wave from "./Wave";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const homeBigSlides = [
  {
    src:
      "https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Lorem, ipsum dolor",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At magni error qui commodi nemo voluptates et inventore ipsa voluptate facilis atque tempore, quia accusantium illum explicabo quod perspiciatis suscipit! Voluptates!",
  },
  {
    src:
      "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Lorem, ipsum dolor.",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At magni error qui commodi nemo voluptates et inventore ipsa voluptate facilis atque tempore, quia accusantium illum explicabo quod perspiciatis suscipit! Voluptates!",
  },
  {
    src:
      "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Lorem, ipsum dolor.",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At magni error qui commodi nemo voluptates et inventore ipsa voluptate facilis atque tempore, quia accusantium illum explicabo quod perspiciatis suscipit! Voluptates!",
  },
];
function HomeSlidingSection() {
  return (
    <HomeSlidingSectionStyled id="Нүүр">
      {
        /* <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={true}
                // pagination={{ clickable:true }}
                navigation
                >
                {homeBigSlides.map(slide => {  
                    return <SwiperSlide className='slide'>                             
                            <img src={slide.src} alt={slide.src}/>
                            <div className='slide-desc'>
                                <h2>
                                    {slide.title}
                                </h2>
                                <p>
                                    {slide.text}
                                </p>
                            </div>
                           </SwiperSlide>
                        })}
                </Swiper> */
        <Wave />
      }
    </HomeSlidingSectionStyled>
  );
}

const HomeSlidingSectionStyled = styled.div`
  @media only screen and (orientation: portrait) {
    p {
      line-height: normal !important;
    }
    .swiper-button-prev {
      bottom: 10vh !important;
    }
  }
  width: 100vw;
  height: 100vh;
  position: relative;
  .swiper-pagination {
    position: absolute;
    width: 20vw;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    .swiper-pagination-bullet {
      width: 0.5vw;
      height: 0.5vw;
      border-radius: 50%;
      background: white;
      margin: 0.1vw;
      opacity: 0.5;
      transition: 0.3s;
      cursor: pointer;
    }
    .swiper-pagination-bullet-active {
      transition: 0.3s;
      background: #75dab4;
      opacity: 1 !important;
    }
  }
  .slide {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      left: 0;
      top: 0;
      width: 100vw;
      height: 100%;
      object-fit: cover;
    }
    .slide-desc {
      width: 35%;
      position: absolute;
      top: 70%;
      left: 30%;
      background: #11141b;
      transform: translate(-50%, -50%);
      padding: 3vw;
      border-radius: 7vw;
      border-top-right-radius: unset;
    }
    h2 {
      font-size: 4vw;
      letter-spacing: 0.2vw;
      margin: 0;
      color: #75dab4;
    }
    p {
      letter-spacing: 0.05vw;
      line-height: 1.3vw;
    }
  }
  .swiper-wrapper {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100vh;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 4vw;
    height: 4vw;
    position: absolute;
    z-index: 10;
    border: 0.1vw solid rgba(255, 255, 255, 0.5);
    cursor: pointer;
    font-size: 1vw;
    bottom: 5vw;
    right: 4vw;
  }
  .swiper-button-prev {
    bottom: 9.5vw;
    color: rgba(255, 255, 255, 0.8);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    :after {
      content: "⟵";
      position: absolute;
    }
  }
  .swiper-button-next {
    color: rgba(255, 255, 255, 0.8);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    :after {
      content: "⟶";
      position: absolute;
    }
  }
`;
export default HomeSlidingSection;
