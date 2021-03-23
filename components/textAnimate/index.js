import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import styled from "@emotion/styled";

import { useTranslation } from "react-i18next";

const TextAni = () => {
  const { t, i18n } = useTranslation();
  const [animeTitleText, setAnimationTitleText] = useState();
  const [animeTitleText2, setAnimationTitleText2] = useState();

  useEffect(() => {
    setAnimationTitleText(t(`title3.1`));
    setAnimationTitleText2(t(`title3.2`));
  }, [t]);

  return (
    <TextStyled>
      <div className="textStyled">
        <h1>{t(`title1`)}</h1>
        <h6>
          {t(`title2`)}
          <Typewriter
            options={{
              strings: [animeTitleText, animeTitleText2],
              autoStart: true,
              loop: true,
              pauseFor: 1000,
              deleteSpeed: 20,
              delay: 20,
            }}
          />
        </h6>
      </div>
    </TextStyled>
  );
};

const TextStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  display: inline;
  z-index: 20;
  text-align: center;
  margin: auto;
  /* font-family: "Barlow Condensed", sans-serif; */
  /* font-family: "Poppins", sans-serif; */
  /* font-family: "Montserrat", sans-serif; */
  font-family: "Source Sans Pro", sans-serif;
  overflow-y: hidden;

  h1 {
    width: 70vw;
    font-size: 3rem;
    font-weight: 500;
    color: #fff;
    letter-spacing: 5px;
    margin-bottom: 5rem;
  }

  h6 {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: #eee;
    line-height: 1.7;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    h1 {
      font-size: 5vh;
    }
    h6 {
      font-size: 2.5vh;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 4vh;
    }
    p {
      font-size: 2vh;
    }
  }
`;

export default TextAni;
