import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "@emotion/styled";

function ListedCard({ heading, parag, position }) {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      easing: "ease-in-shine",
    });
    Aos.refresh();
  }, []);

  return (
    <ListedCardStyled data-aos="fade-left">
      <p className="num">{position}</p>
      <h3>{heading}</h3>
      <p>{parag}</p>
    </ListedCardStyled>
  );
}

const ListedCardStyled = styled.div`
  padding: 1vw 0;
  padding-left: 2vw;
  height: 100%;

  position: relative;
  &::before {
    content: "";
  }
  border-bottom: 0.1vw solid rgba(255, 255, 255, 0.1);
  .num {
    position: absolute;
    right: 100%;
    top: 22%;
    width: 2vw;
    height: 2vw;
    border-radius: 50%;
    border: 0.12vw solid #75dab4;
    font-weight: bold !important;
    color: #75dab4;
    display: grid;
    place-items: center;
  }
  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-bottom: 0;
  }
  p {
    font-size: 0.75rem !important;
  }
  @media only screen and (orientation: portrait) {
    width: 90%;
    margin: 0px;
    padding: 0px 10px;
    .num {
      width: 2.5vh;
      height: 2.5vh;
    }
    h3 {
      font-size: 1.5vh;
    }
    p {
      font-size: 15px !important;
    }
  }
`;
export default ListedCard;
