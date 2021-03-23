import styled from "@emotion/styled";
import Card from "./Card.js";

import { useTranslation } from "react-i18next";

function PaboutIntroSection() {
  const { t, i18n } = useTranslation();

  let cards = [
    {
      img: "/web.png",
      heading: t(`aboutAboutUsCard1Title`),
      parag: t(`aboutAboutUsCard1Desc`),
    },
    {
      img: "/mobile-phone.png",
      heading: t(`aboutAboutUsCard2Title`),
      parag: t(`aboutAboutUsCard2Desc`),
    },
    {
      img: "/graphic.png",
      heading: t(`aboutAboutUsCard3Title`),
      parag: t(`aboutAboutUsCard3Desc`),
    },
  ];

  return (
    <PaboutIntroSectionStyled className="AboutSection1" id="бидний-тухай">
      <div className="about-cover-container">
        {/* <h1>About us</h1> */}
        <img src="about7.jpeg" alt="bg" />
      </div>
      <div className="intro-container" id="about2">
        <h2 className="textanimation1">{t(`aboutAboutUsTitle2`)}</h2>
        <p className="textAnimation2">{t(`aboutAboutUsDesc`)}</p>
      </div>
      <div className="cards-container">
        {cards.map(({ img, heading, parag, colored, position }) => (
          <Card
            img={img}
            heading={heading}
            parag={parag}
            colored={colored}
            position={position}
          />
        ))}
      </div>
    </PaboutIntroSectionStyled>
  );
}

const PaboutIntroSectionStyled = styled.div`
  @media (max-width: 1024px) and (min-width: 769px) {
    position: relative;
    .intro-container {
      display: flex;
      width: 90vw;
      margin-bottom: 0 !important;
      h2 {
        height: 250px !important;
        font-size: 30px !important;
      }
      p {
        height: 300px;
        width: 60%;
        font-size: 1rem;
        line-height: 2 !important;
        margin-left: 6vw;
      }
    }
    .about-cover-container {
      h1 {
        width: 80%;
        left: 10px;
        font-size: 70px !important;
      }
      img {
        width: 100vw;
        height: 75vh;
        object-fit: cover;
        position: absolute;
        opacity: 0.6;
        position: absolute;
        left: 0px;
      }
    }

    .cards-container {
      justify-content: flex-start !important;
      width: 90%;
    }
  }

  width: 1200px;
  /* position: relative; */
  margin: 0 auto;
  .cards-container {
    height: 50%;
    width: 100%;
    display: flex;
    margin-bottom: 8rem;
    justify-content: space-between;
  }
  .about-cover-container {
    width: 100%;
    height: 75vh;
    img {
      width: 100vw;
      height: 75vh;
      object-fit: cover;
      position: absolute;
      opacity: 0.6;
      position: absolute;
      left: 0px;
      /* background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover; */
    }
    h1 {
      position: absolute;
      z-index: 10;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
      font-size: 5em;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
    }
  }
  .intro-container {
    height: 50%;
    margin: 5rem 1rem;
    display: flex;
    align-items: center;
    h2 {
      margin-top: 0px;
      width: 35%;
      height: 120px;
      font-family: "Poppins" sans-serif;
      font-size: 30px;
    }
    p {
      width: 90%;
      color: #c8c8c8;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 300;
      text-align: justify;
      opacity: 0.8;
      line-height: 2rem;
    }
  }
  @media (max-width: 768px) {
    width: 100%;

    h1 {
      width: 90%;
      text-align: center;
      font-size: 8vh !important;
    }

    .intro-container {
      display: block;
      height: auto;
      flex-direction: column;
      align-items: start;
      width: 100%;
      h2 {
        width: 100%;
        font-size: 4vh !important;
        margin-bottom: 0;
      }
      p {
        width: 90%;
        font-size: 2.5vh !important;
      }
    }
    .cards-container {
      flex-direction: column;
      width: 96%;
    }
  }
`;
export default PaboutIntroSection;
