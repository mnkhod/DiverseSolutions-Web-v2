import styled from "@emotion/styled";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function CustomCard({ imgSource, text, bgColor, firstHead, secondHead }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-shine",
    });
    Aos.refresh();
  }, []);

  return (
    <CustomCardStyled style={{ background: bgColor }}>
      <img data-aos="fade-down" src={imgSource} alt="bolt" />
      <span data-aos="fade-right">{firstHead}</span>
      <span data-aos="fade-left">{secondHead}</span>
      <p data-aos="fade-up">{text}</p>
    </CustomCardStyled>
  );
}

const CustomCardStyled = styled.div`
  width: 25vw;
  padding: 4% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  img {
    object-fit: contain;
    width: 15%;
    margin-bottom: 10%;
  }
  span {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.8;
  }
  p {
    width: 80%;
    color: #c8c8c8;
    opacity: 1 !important;
    line-height: 2;
    font-size: 0.95rem;
  }

  @media (max-width: 1024px) {
    width: 100vw;
    /* height: 33vh !important; */
    padding: 5% 3%;
    img {
      width: 6vh;
      margin-bottom: 3vh;
    }
    span {
      font-size: 3vh;
    }
    p {
      width: 100% !important;
      font-size: 2vh;
    }
  }
`;
export default CustomCard;
