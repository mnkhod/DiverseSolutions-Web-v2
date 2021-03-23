import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "@emotion/styled";

function Card({ img, heading, parag }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-shine",
    });
    Aos.refresh();
  }, []);

  return (
    <CardStyled data-aos="fade-left" style={{}}>
      <img data-aos="zoom-in" src={img} alt="icon" />
      <h3 data-aos="fade-right">{heading}</h3>
      <p data-aos="fade-up">{parag}</p>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  [data-aos="right-c"] {
    transform: translateX(-500px);
    transition-property: transform;
  }

  [data-aos="right-c"].aos-animate {
    transform: translateX(0px);
  }

  @media (max-width: 768px) {
    width: 95% !important;
    height: 360px !important;
    padding: 0.5rem 0 !important;
    margin: 1.5rem 1rem;
    img {
      width: 3rem !important;
      height: 3rem !important;
    }
    h3 {
      font-size: 20px;
    }
    p {
      line-height: normal !important;
      width: 80% !important;
      font-size: 17px;
    }
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 30vw;
    margin-left: 2.5vw;
    padding: 7vh 2vw !important;

    img {
      width: 3rem !important;
    }

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 18px;
    }
  }

  & {
    transition: 0.5s ease-out;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 2px 2px 2px #000;
    z-index: 1;
  }

  background: #151921;
  width: 31%;
  height: 50%vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4.5rem 4.5rem;
  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: bolder;
    text-align: center;
    margin-top: 9%;
    margin-bottom: 5%;
  }
  img {
    width: 18%;
    object-fit: contain;
  }
  p {
    line-height: 1.8rem;
    opacity: 0.7;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
    margin-top: 0;
    text-align: center;
  }
  &:nth-of-type(2) {
    background: #76dbb5;
    color: black;
  }
`;
export default Card;
