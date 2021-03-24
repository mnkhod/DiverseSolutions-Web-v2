import styled from "@emotion/styled";
import TextAni from "../components/textAnimate/index";
import React from "react";

import { useTranslation } from "react-i18next";

function Wave() {
  const { t, i18n } = useTranslation();

  return (
    <WaveStyled>
       <iframe src="https://dsolutions.tech/wave.html"></iframe>
      <TextAni />
      <div className="effect">
        <a className="hoverEffect" href="#бидний-тухай">
          <p>{t(`titleButton`)}</p>
        </a>
      </div>

      {/* <TypeText /> */}
    </WaveStyled>
  );
}

const WaveStyled = styled.div`
  height: 100vh;
  width: 100vw;
  iframe {
    border: none;
    width: 100vw;
    height: 100vh;
    position: absolute;
  }

  .effect {
    position: absolute;
    bottom: 10rem;
    top: 33rem;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
  }

  a {
    margin: auto;
    color: #fff;
    text-decoration: none;
    position: relative;
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

  @media (max-width: 1024px) and (min-width: 769px) {
    .effect {
      position: relative;
      top: 70vh;
      width: 100vw;
      a {
        text-align: center;
      }
    }
  }

  @media (max-width: 768px) {
    .effect {
      position: relative;
      top: 70vh;
      width: 100vw;
      a {
        width: 150px;
        text-align: center;
        padding: 1rem;
        p {
          text-align: center;
          font-size: 1.5vh;
        }
      }
    }
  }
`;

export default Wave;
