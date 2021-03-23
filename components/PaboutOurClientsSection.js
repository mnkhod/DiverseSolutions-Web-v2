import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "@emotion/styled";
import IconedCard from "./IconedCard.js";

function PaboutOurClientsSection() {
  const iconedLists = [
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-shine",
    });
    Aos.refresh();
  }, []);

  return (
    <PaboutOurClientsSectionStyled id="харилцагчид">
      <div className="our-clients">
        <div className="our-clients-left">
          <p data-aos="fade-up">CLIENTS</p>
          <h2 data-aos="fade-down">БИДНИЙ ХАРИЛЦАГЧИД.</h2>
        </div>
        <div className="our-clients-right">
          {iconedLists.map(({ img }) => (
            <IconedCard img={img} />
          ))}
        </div>
      </div>
    </PaboutOurClientsSectionStyled>
  );
}

const PaboutOurClientsSectionStyled = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  .our-clients {
    width: 1200px;
    position: relative;
    height: 70%;
    display: flex;
    justify-content: right;
    .our-clients-left {
      width: 35%;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
      font-family: "Barlow Condensed", sans-serif;
      p {
        color: #75dab4;
        margin-bottom: 100px !important;
        font-weight: 300;
        font-size: 17px;
        text-transform: uppercase;
        letter-spacing: 14px;
      }
      h2 {
        text-shadow: 0 5px rgba(255, 255, 255, 0.05);
        margin-top: 0;
        font-size: 25px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 4px;
      }
    }
    .our-clients-right {
      width: 65%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    .our-clients-left {
      width: 28%;
      padding-left: 20px;
      h2 {
        font-size: 2.8vh !important;
      }
      p {
        font-size: 2vh !important;
      }
    }

    .our-clients-right {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    .bg {
      width: 110vw;
      height: 100%;
    }
    h2 {
      margin-top: 3vh !important;
      margin-bottom: 2vh;
      word-spacing: 100vw;
      font-size: 2rem !important;
    }
    .our-clients {
      flex-direction: column;
    }
    .our-clients-left,
    .our-clients-right {
      width: 100% !important;
    }
    .our-clients-left {
      margin-left: 5%;
    }
  }
`;
export default PaboutOurClientsSection;
