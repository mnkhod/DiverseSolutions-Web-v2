import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "@emotion/styled";

function IconedCard({ img }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
    Aos.refresh();
  }, []);

  return (
    <IconedCardStyled data-aos="fade-down">
      <img data-aos="rotate-c" src={img} alt={img} />
    </IconedCardStyled>
  );
}

const IconedCardStyled = styled.div`
  [data-aos="rotate-c"] {
    transform: translateY(300px);
    transition-property: transform;
  }

  [data-aos="rotate-c"].aos-animate {
    transform: translateY(0px);
  }

  border: 0.1vw solid rgba(255, 255, 255, 0.1);
  padding: 55px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  margin: 15px;
  img {
    height: 45px;
    object-fit: contain;
    filter: brightness(205%);
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    display: flex;
    width: 20%;
    img {
      height: 2vh !important;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 40vw;
    margin: 1.5vh;
    border-radius: 1vh;
    padding: 0;
    img {
      width: 10vh;
    }
  }
`;
export default IconedCard;
