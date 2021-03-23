import styled from "@emotion/styled";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Littlecard({ img, parag }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-shine",
    });
    Aos.refresh();
  }, []);

  return (
    <LittlecardStyled data-aos="flip-right">
      <img src={img} alt={img} />
      <p>{parag}</p>
      <span></span>
      <span></span>
      <span></span>
    </LittlecardStyled>
  );
}

const LittlecardStyled = styled.div`
  & {
    transition: 0.5s ease-out;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: 2px 2px 2px #000;
    z-index: 1;
  }
  flex-shrink: 0;
  width: 32%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #11141b;
  border-radius: 5px;
  position: relative;
  img {
    width: 19%;
    margin-top: 1rem;
    object-fit: contain;
  }
  p {
    margin-top: 2rem;
    letter-spacing: 2px;
    line-height: 1.4;
    text-align: center;
    align-self: center;
    word-spacing: 100px;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  span {
    border-radius: 50%;
    position: absolute;
    width: 4px;
    height: 4px;
    background: #272930;
    right: 0.5rem;
    bottom: 0.5rem;
    &:nth-of-type(2) {
      right: 0.9rem;
    }
    &:nth-of-type(3) {
      bottom: 0.9rem;
    }
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    margin: 10px 0;
    img {
      width: 4vw;
      height: 4vw;
    }
    p {
      font-size: 1vw;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 40px 0;
    margin: 10px 0;
    img {
      width: 5vh;
      height: 5vh;
    }
    p {
      font-size: 2vh;
    }
  }
`;
export default Littlecard;
