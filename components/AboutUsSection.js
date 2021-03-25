import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "@emotion/styled";
import LittleCard from "./LittleCard.js";

import { useTranslation } from "react-i18next";

function AboutUsSection() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-shine",
    });
    Aos.refresh();
  }, []);

  const { t, i18n } = useTranslation();
  return (
    <AboutUsSectionStyled id="aboutUs">
      <div className="left">
        <div className="image-wrapper-left">
          <img src="aboutUsLaptop.jpeg" alt="laptop" data-aos="fade-left" />
        </div>
        <div className="image-wrapper-right">
          <img src="aboutUsEegii.png" alt="laptop" data-aos="fade-up" />
          <img
            className="Odko"
            src="aboutUsOdko.png"
            alt="laptop"
            data-aos="fade-down"
          />
        </div>
      </div>
      <div className="right">
        <div className="h2-container">
          <div className="spans">
            <span data-aos="fade-up"></span>
            <span data-aos="fade-up"></span>
            <span data-aos="fade-up"></span>
          </div>
          <h2 data-aos="fade-up">{t(`aboutUs`)}</h2>
        </div>
        <h3 data-aos="fade-down">{t(`aboutUsSub`)}</h3>
        <p data-aos="fade-left" className="about-text">
          {t(`aboutUsDesc`)}
        </p>
        <div className="long-card">
          <LittleCard img="web.png" parag={t(`aboutUsCard1`)} />
          <LittleCard img="app3.png" parag={t(`aboutUsCard2`)} />
          <LittleCard img="graphic.png" parag={t(`aboutUsCard3`)} />
        </div>
      </div>
      <div className="toTop">
        <a href="#Нүүр">↑</a>
      </div>
    </AboutUsSectionStyled>
  );
}

const AboutUsSectionStyled = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;

  .toTop {
    width: 3rem;
    object-fit: contain;
    color: #fff;
    height: 3rem;
    position: fixed;
    bottom: 5%;
    right: 5%;
    z-index: 1000000;
    border: 1px solid #fff;
    border-radius: 50%;
    text-align: center;
    background: #11141b;
    a {
      font-size: 2rem;
    }
  }

  .right {
    margin: 5vh 0 0 0 !important;
    width: 50%;
    .image-wrapper {
      img {
        height: 70% !important;
        border-radius: 2vh !important;
      }
    }
    .long-card {
      border-radius: 2vh !important;
      left: auto !important;
      width: 90% !important;
      top: 50% !important;
      padding: 3vh 0 !important;
    }
  }

  .left {
    width: 50%;
    display: flex;
    position: relative;
    img {
      object-fit: cover;
      border-radius: 10px;
    }
    .image-wrapper-left {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 35%;
        width: 85%;
      }
    }

    .image-wrapper-right {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-evenly;
      img:nth-of-type(1) {
        height: 50%;
        width: 90%;
      }
      img:nth-of-type(2) {
        height: 35%;
        width: 65%;
        margin-top: 15%;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    .about-text {
      width: 95%;
      color: #c8c8c8;
      font-size: 1rem;
      font-weight: 300;
      line-height: 2;
      text-align: justify;
      margin: 30px 0;
    }
    .long-card {
      width: 100% !important;
      display: flex;
      justify-content: space-between;
    }
    .h2-container {
      position: relative;
      display: flex;
      align-items: center;
      h2 {
        font-family: "Barlow Condensed", sans-serif;
        font-size: 1rem;
        margin-bottom: 0;
        font-weight: 300;
        padding-left: 5px;
        letter-spacing: 4px;
      }
      .spans {
        position: relative;
        width: 15px;
        height: 100%;
        span {
          position: absolute;
          border-radius: 50%;
          display: inline-block;
          width: 4px;
          height: 4px;
          background: #67c1a1;
          left: 0rem;
          bottom: 2px;
          &:nth-of-type(2) {
            left: 6px;
          }
          &:nth-of-type(3) {
            left: auto;
            right: 5px;
            bottom: 8px;
          }
        }
      }
    }
    h3 {
      margin: 1rem 0 0.5rem 0;
      font-size: 2.2rem;
      width: 90%;
      font-weight: 600;
      line-height: 1.5;
    }
  }

  @media (max-width: 1365px) and (min-width: 769px) {
    width: 90vw;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 85% !important;
    padding: 50px 0;
    h2 {
      text-align: center;
      font-size: 1rem !important;
    }
    .spans {
      display: none;
    }
    .about-text {
      text-align: justify;
    }
    .left,
    .right {
      width: 100% !important;
    }
    a {
      padding: 1vh !important;
      width: 8vh !important;
    }
    .left {
      flex-direction: column;
      .image-wrapper-left,
      .image-wrapper-right {
        width: 100% !important;
        justify-content: center;
        align-items: center;
      }
      .image-wrapper-left {
      }
      img {
        width: 90% !important;
        height: 150px !important;
        margin: 10px 0 !important;
      }
    }
    .long-card {
      flex-direction: column;
      margin: 0 auto;
    }

    .right p {
      width: 100% !important;
    }
  }

  /* @media only screen and (orientation: landscape) and (max-width: 1365px) {
    width: 90vw;
  }

  @media only screen and (orientation: portrait) {
    flex-direction: column;
    width: 95% !important;
    padding: 50px 0;
    h2 {
      text-align: center;
      font-size: 1rem !important;
    }
    .spans {
      display: none;
    }
    .about-text {
      text-align: justify;
    }
    .left,
    .right {
      width: 100% !important;
    }
    a {
      padding: 1vh !important;
      width: 8vh !important;
    }
    .left {
      flex-direction: column;
      .image-wrapper-left,
      .image-wrapper-right {
        width: 100% !important;
        justify-content: center;
        align-items: center;
      }
      .image-wrapper-left {
      }
      img {
        width: 90% !important;
        height: 150px !important;
        margin: 10px 0 !important;
      }
    }
    .long-card {
      flex-direction: column;
      margin: 0 auto;
    }
  } */
`;
export default AboutUsSection;
