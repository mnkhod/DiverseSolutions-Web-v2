import styled from "@emotion/styled";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";

function PaboutConnectUsSection() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-shine",
    });
    Aos.refresh();
  }, []);

  const { t, i18n } = useTranslation();

  return (
    <PaboutConnectUsSectionStyled id="lets-talk">
      <span className="bg">
        <img src="pattern.png" />
      </span>
      <div className="connect-us">
        <div className="cs-left">
          <p data-aos="fade-right">{t(`aboutSendCommentTitle1`)}</p>
          <h2 data-aos="fade-up">
            <span></span>
            {t(`aboutSendCommentTitle2`)}
          </h2>
        </div>
        <a
          data-aos="flip-left"
          data-aos-duration="2000"
          href="mailto:enkhamgalan@dsolutions.tech"
          target="_blank"
        >
          <p>{t(`aboutSendCommentButton`)}</p>
        </a>
      </div>
    </PaboutConnectUsSectionStyled>
  );
}

const PaboutConnectUsSectionStyled = styled.div`
  position: relative;
  width: 100vw;
  height: 25rem;
  padding: 0;
  margin: auto;

  .bg {
    width: 100vw;
    height: 50vh;
    position: absolute;
    background-repeat: repeat;
    /* background-color: #11141b; */
    bottom: 0 !important;
    left: -100px;
    z-index: 1;
  }

  .connect-us {
    width: 1200px;
    z-index: 2;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5rem;
    .cs-left {
      width: 70%;
      z-index: 3;
      /* padding-left: 30px; */
      p {
        color: #75dab4;
        font-size: 0.8rem;
        letter-spacing: 4px;
        font-weight: 400;
        line-height: 1.2;
        margin-bottom: 5rem;
      }
      h2 {
        /* text-shadow: 0 6px rgba(255, 255, 255, 0.05); */
        font-family: inherit;
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.2;
        span {
        }
      }
    }
    a {
      width: 25%;
      text-align: center;
      color: #fff;
      text-decoration: none;
      font-family: "Poppins", sans-serif;
      border: 0.15rem solid white;
      padding: 1rem 2rem;
      margin-bottom: 2rem;
      overflow: hidden;
      transition: 0.5s;
      z-index: 1;
      p {
        z-index: 2;
        position: relative;
        font-size: 0.8rem;
        letter-spacing: 0.2rem;
        font-weight: 500;
        margin: 0;
      }
      &::after {
        content: "";
        position: absolute;
        left: -10%;
        top: -160%;
        width: 120%;
        height: 140%;
        background: white;
        transform: rotate(-4deg);
        transition: 0.5s;
      }
      &:hover::after {
        top: -20%;
      }
      &:hover {
        color: #000;
        transition: 0.5s;
      }
    }
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    width: 90% !important;
    margin: auto;
    height: 20rem !important;
    .bg {
      left: 0 !important;
      display: none;
    }
    .connect-us {
      padding-top: 6vh;
      width: 100%;
      justify-content: start;
    }
    .cs-left {
      width: 60%;
      p {
        font-size: 1.5vw !important;
      }
      h2 {
        font-size: 3vw !important;
      }
    }

    a {
      width: 30% !important;
      text-align: center;
      margin-bottom: 15% !important;
    }

    a p {
      width: 100% !important;
      font-size: 1.5vh !important;
    }
  }
  @media (max-width: 768px) {
    background: #0e1016;
    width: 100vw;
    top: 50px;
    height: 30vh !important;
    .bg {
      display: none !important;
    }
    height: 100%;
    .connect-us {
      margin-top: 0px !important;
      padding-top: 5vh;
      flex-direction: column;
      justify-content: flex-end !important;
      a {
        width: 150px;
        text-align: center;
      }
    }
    .cs-left {
      width: 90vw !important;
      position: absolute;
      left: 5% !important;
      top: 7%;
      p {
        margin-bottom: 10% !important;
        font-size: 2vw !important;
      }
      h2 {
        font-size: 4vw !important;
        margin-top: 3vh;
        letter-spacing: 1px;
      }
    }

    a {
      width: 20vh !important;
      border: 0.1rem solid white;
      padding: 1.5vh 0.5vh !important;
      /* margin-top: 1rem;
      margin-bottom: 3rem !important;
      margin-right: 95% !important; */
      position: absolute;
      left: 5%;
      top: 18vh;
      p {
        z-index: 2;
        position: relative;
        font-size: 0.5rem !important;
        letter-spacing: 0.2rem;
        font-weight: 500;
        margin: 0;
      }
    }
  }
`;
export default PaboutConnectUsSection;
