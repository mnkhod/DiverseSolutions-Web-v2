import styled from "@emotion/styled";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
SwiperCore.use([Navigation, Autoplay, Pagination]);

function PaboutCommentSection() {
  const commentData = [
    {
      profileImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "Alex Regelman",
      text:
        "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit  class aptent taciti sociosqu ad litora.",
      info: "Co-founder, Colabrio",
    },
    {
      profileImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "Alex Regelman",
      text:
        "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit  class aptent taciti sociosqu ad litora.",
      info: "Co-founder, Colabrio",
    },
    {
      profileImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "Alex Regelman",
      text:
        "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit  class aptent taciti sociosqu ad litora.",
      info: "Co-founder, Colabrio",
    },
    {
      profileImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "Alex Regelman",
      text:
        "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit  class aptent taciti sociosqu ad litora.",
      info: "Co-founder, Colabrio",
    },
  ];

  const statistics = [
    {
      img: "/bolt.png",
      parag: "CREATIVE DESIGN",
    },
    {
      img: "/bolt.png",
      parag: "PIXEL PERFECT",
    },
    {
      img: "/bolt.png",
      parag: "HEIGHT PERFORMANCE",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    Aos.refresh();
  }, []);

  return (
    <PaboutCommentSectionStyled id="харилцагч">
      <div className="inner-container">
        <div className="comment-left">
          <div className="play-button">
            <img data-aos="zoom-in-right" src="play-btn.png" alt="playbtn" />
          </div>
          <h2 data-aos="fade-up">
            So that's us. There's no other way to put it.
          </h2>
        </div>
        <div className="comment-right">
          <div className="inner-right">
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="card-title"
            >
              OUR HAPPY CLIENTS
            </p>
            <h3 data-aos="fade-left" className="card-header">
              What Client's Say?
            </h3>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={true}
              pagination={{ clickable: true }}
              speed={1000}
            >
              {commentData.map((slide) => (
                <SwiperSlide className="slide">
                  <p className="text">{slide.text}</p>
                  <hr />
                  <div className="swiper-bottom">
                    <img src={slide.profileImg} alt={slide.profileImg} />
                    <div className="swiper-bottom-right">
                      <h3>{slide.name}</h3>
                      <p className="info">{slide.info}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="toTop">
        <a href="#Нүүр">↑</a>
      </div>
    </PaboutCommentSectionStyled>
  );
}

const PaboutCommentSectionStyled = styled.div`
  .toTop {
    width: 3rem;
    object-fit: contain;
    color: #fff;
    height: 3rem;
    position: fixed;
    bottom: 5%;
    left: 5%;
    z-index: 1000000;
    border: 1px solid #fff;
    border-radius: 50%;
    text-align: center;
    background: #000;
    a {
      font-size: 2rem;
    }
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    flex-direction: column;
    height: auto;
    hr {
      opacity: 0.2 !important;
      height: 0.2vh !important;
    }
    .bg-image {
    }
    .comment-left,
    .comment-right {
      width: 100%;
    }
    .play-button {
      margin-left: 5vw;
      width: 10vh !important;
      height: 10vh !important;
    }
    .inner-container {
      flex-direction: column;
      width: 100%;
    }
    .comment-left {
      h2 {
        margin-bottom: 1vh;
        width: 80%;
        margin: 20px 0 20px 20px;
        font-size: 1.5em !important;
      }
      .statistics {
        margin: 3vh 0;
      }
    }
    .text {
      font-size: 30px !important;
    }
    .comment-right {
      width: 100% !important;
      .inner-right {
        padding: 5vh 4vh !important;
        width: 100%;
        height: 70vh;
        h3 {
          margin-bottom: 4vh;
        }
        p {
          line-height: 1.7em;
        }
        img {
          width: 10vh !important;
          height: 10vh !important;
        }
        .swiper-pagination-bullet {
          margin: 0 0.5vh !important;
          height: 1vh !important;
          width: 1vh !important;
        }
      }
    }
  }

  display: relative;
  padding: 2rem 0;
  position: relative;
  width: 100vw;
  height: 55rem;

  .comments {
    display: flex;
    width: 100%;
    padding: 4% 7%;
    text-align: start;
  }

  position: relative;
  display: flex;
  justify-content: center;
  .inner-container {
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
    width: 1200px;
  }
  .bg-image {
    top: 0;
    position: absolute;
    height: 550px;
    width: 100vw;
    object-fit: cover;
    opacity: 0.3;
  }
  .comment-left {
    z-index: 10;
    width: 50%;
    display: flex;
    flex-direction: column;
    h2 {
      text-shadow: 0 5px rgba(255, 255, 255, 0.05);
      color: #fff;
      font-family: "Poppins", Sans-serif;
      font-size: 45px;
      font-weight: 700;
    }
    .play-button {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: relative;
      z-index: 3;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: 3;
      }
      :before {
        content: "";
        position: absolute;
        width: 130%;
        height: 130%;
        left: -15%;
        top: -15%;
        z-index: -2;
        border-radius: 50%;
        background-color: #494b4f;
        opacity: 0.3;
      }
      :after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: -1;
        border-radius: 50%;
        background: #83debc;
      }
    }
    .statistics {
      display: flex;
      justify-content: center;
      .inner-statistics {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3 {
          margin: 0;
        }
      }
    }
  }
  .comment-right {
    z-index: 10;
    width: 40%;
    height: 80%;
    display: flex;
    .inner-right {
      padding: 70px 40px;
      width: 100%;
      background: #75dab4;
      color: black;
      font-family: "Poppins", sans-serif;
      .card-title {
        color: #0c0f16;
        font-size: 12px;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 4px;
      }
      .card-header {
        color: #0c0f16;
        font-size: 30px;
        font-weight: 600;
        line-height: 1.4rem;
      }
      .swiper-container {
        width: 100%;
        overflow: hidden;
        position: relative;
        padding-bottom: 2vw;
        .swiper-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          .swiper-slide {
            flex-shrink: 0;
            flex-grow: 0;
            flex-basis: 100%;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .text {
              color: #333;
              font-size: 17px;
              margin: 0;
              margin-bottom: 0px;
              padding-bottom: 30px;
              font-weight: 300;
              line-height: 2;
            }
            hr {
              opacity: 0.1;
              width: 100%;
              height: 0.07vw;
              border: none;
              background: grey;
              margin-bottom: 2vw;
            }
            .swiper-bottom {
              display: flex;
              justify-content: left;
              align-items: center;
              img {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                object-fit: cover;
              }
              h3 {
                font-weight: 500;
                color: #0c0f16;
                font-size: 1rem;
                letter-spacing: 2px;
                text-transform: uppercase;
                font-family: "Barlow Condensed", sans-serif;
              }
              .swiper-bottom-right {
                display: flex;
                margin-left: 20px;
                flex-direction: column;
                justify-content: center;
                h3 {
                  margin-bottom: 10px;
                }
                p {
                  margin-top: 0;
                  color: #0c0f16;
                  font-size: 13px;
                  font-weight: 300;
                  text-transform: uppercase;
                }
              }
            }
          }
        }
        .swiper-pagination {
          position: absolute;
          z-index: 100;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: 0;
          right: 0;
          .swiper-pagination-bullet {
            width: 0.5vw;
            height: 0.5vw;
            border: 0.1vw solid black;
            border-radius: 50%;
            margin: 0 0.2vw;
            opacity: 0.5;
            transition: 0.3s;
            cursor: pointer;
          }
          .swiper-pagination-bullet-active {
            transition: 0.3s;
            background: white;
            opacity: 1 !important;
          }
        }
      }
    }
  }
  @media only screen and (orientation: portrait) {
    flex-direction: column;
    height: auto;
    hr {
      opacity: 0.2 !important;
      height: 0.2vh !important;
    }
    .bg-image {
    }
    .comment-left,
    .comment-right {
      width: 100%;
    }
    .play-button {
      margin-left: 5vw;
      width: 10vh !important;
      height: 10vh !important;
    }
    .inner-container {
      flex-direction: column;
      width: 100%;
    }
    .comment-left {
      h2 {
        margin-bottom: 1vh;
        width: 80%;
        margin: 20px 0 20px 20px;
        font-size: 1.5em !important;
      }
      .statistics {
        margin: 3vh 0;
      }
    }
    .comment-right {
      height: auto;
      .inner-right {
        padding: 5vh 4vh;
        width: 100%;
        height: 70vh;
        h3 {
          margin-bottom: 4vh;
        }
        p {
          line-height: 1.7em;
        }
        img {
          width: 10vh !important;
          height: 10vh !important;
        }
        .swiper-pagination-bullet {
          margin: 0 0.5vh !important;
          height: 1vh !important;
          width: 1vh !important;
        }
      }
    }
  }
`;
export default PaboutCommentSection;
