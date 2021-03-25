import styled from "@emotion/styled";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import { TweetMax, Power3 } from "gsap";
import ListedCard from "./ListedCard.js";

import { useTranslation } from "react-i18next";

function PaboutOurPurposeSection() {
  const { t } = useTranslation();

  const listData = [
    {
      heading: t(`aboutOfficeNum1Title`),
      parag: t(`aboutOfficeNum1Desc`),
      position: 1,
    },
    {
      heading: t(`aboutOfficeNum2Title`),
      parag: t(`aboutOfficeNum2Desc`),
      position: 2,
    },
    {
      heading: t(`aboutOfficeNum3Title`),
      parag: t(`aboutOfficeNum3Desc`),
      position: 3,
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-shine",
    });
    Aos.refresh();
  }, []);

  return (
    <PaboutOurPurposeSectionStyled id="ourVision">
      <div className="bg"></div>
      <div className="our-purpose">
        <div className="our-purpose-left">
          <img src="/Office.jpeg" alt="office" data-aos="fade-right" />
        </div>
        <div className="our-purpose-right">
          <h2 data-aos="fade-up" className="titleBurrowing1">
            {t(`aboutOfficeTitle`)}
          </h2>
          <p data-aos="fade-left" className="titleBurrowing2">
            {t(`aboutOfficeDesc`)}
          </p>
          <ul className="list-container">
            {listData.map(({ heading, parag, position }) => (
              <ListedCard heading={heading} parag={parag} position={position} />
            ))}
          </ul>
        </div>
      </div>
    </PaboutOurPurposeSectionStyled>
  );
}

const PaboutOurPurposeSectionStyled = styled.div`
  [data-aos="rotate-c"] {
    transform: rotate(-90deg);
    transition-property: transform;
  }

  [data-aos="rotate-c"].aos-animate {
    transform: rotate(0deg);
  }
  height: 100vh;
  margin: auto;
  width: 100%;
  position: relative;
  .bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #11141b;
    background-image: linear-gradient(
      to right,
      #1a1e25 40vw,
      #11141b 40vw 100vw
    );
  }
  .our-purpose {
    position: relative;
    z-index: 1;
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    .our-purpose-left {
      position: absolute;
      right: 53%;
      top: 10%;
      z-index: 10;
      width: 30rem;
      height: 35rem;
      object-fit: contain;
      opacity: 0.5;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    .our-purpose-right {
      z-index: 10;
      width: 30rem;
      height: 78%;
      margin-left: 53%;
      margin-top: 6%;
      li {
        &::marker {
          background: red;
        }
      }
      h2 {
        text-shadow: 0 4px rgba(255, 255, 255, 0.05);
        font-family: "Barlow Condensed", sans-serif;
        font-weight: bold;
        font-size: 40px !important;
        color: #fff;
        margin: 0;
      }
      p {
        font-size: 15px;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        color: #c8c8c8;
      }
    }
  }
  @media screen and (max-width: 1024px) and (min-width: 769px) {
    width: 100vw;
    background: #1a1e25;
    .our-purpose {
      width: 95%;
      margin: auto;
    }
    .our-purpose-left {
      width: 50% !important;
      height: 65% !important;
      object-fit: contain;
      margin-top: 5%;
      img {
        opacity: 1;
      }
    }
    .our-purpose-right {
    }
  }
  @media (max-width: 768px) {
    height: 100vh !important;
    padding-top: 0 !important;
    .our-purpose-left {
      width: 45% !important;
      height: 100% !important;
      position: absolute;
      top: 0px !important;
      left: 0px !important;
      background: #11141b;
      img {
        height: 100vh;
        width: 100vw !important;
        margin: auto !important;
        opacity: 0.3;
      }
    }
    /* .titleBurrowing1 {
      color: #000 !important;
    }
    .titleBurrowing2 {
      color: #000 !important;
    } */
    .our-purpose-right {
      position: relative;
      margin: 50px auto !important;
      padding: 80px 0 0 30px;
      width: 100vw !important;
      height: 100vh !important;
      top: -80px;
      left: -10px;
      h2 {
        font-size: 10px !important;
      }
      h3 {
        font-size: 20px;
      }
    }
    .list-container {
      width: 100vw;
      padding-left: 5%;
    }
  }
`;
export default PaboutOurPurposeSection;
