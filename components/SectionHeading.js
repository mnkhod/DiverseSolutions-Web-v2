import styled from "@emotion/styled";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function SectionHeading({ heading, headingTop }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
    Aos.refresh();
  }, []);

  return (
    <SectionHeadingStyled>
      <p className="home-heading-top">{headingTop}</p>
      <span data-aos="zoom-in" className="bg-heading-stroke">
        {heading}
      </span>
      <h2 className="home-heading-two">{heading}</h2>
    </SectionHeadingStyled>
  );
}

const SectionHeadingStyled = styled.div`
  width: 100%;
  position: relative;
  margin: 100px 0;
  .home-heading-top {
    color: #75dab4;
    text-align: center;
    letter-spacing: 14px;
    font-weight: 300;
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    z-index: 2;
  }
  .home-heading-two {
    position: relative;
    top: 50px;
    margin: 0;
    margin-top: 3%;
    /* text-transform: uppercase; */
    font-size: 5rem;
    text-align: center;
    text-shadow: 0 8px rgba(255, 255, 255, 0.05);
    font-weight: 700;
    z-index: 2;
    font-family: "Barlow Condensed", sans-serif;
  }
  .bg-heading-stroke {
    display: block;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
    color: transparent;
    font-size: 10vw;
    font-weight: 700;
    width: 100%;
    top: 50px;
    position: absolute;
    text-align: center;
    opacity: 0.1;
    letter-spacing: 3px;
    z-index: 0;
    font-family: "Barlow Condensed", sans-serif;
  }

  @media (max-width: 767px) {
    width: 100vw;
    .home-heading-top {
      font-size: 10px;
      letter-spacing: 5px;
    }
    .bg-heading-stroke {
      font-size: 8vh !important;
      top: 12vh;
    }
    h2 {
      font-size: 6vh !important;
    }
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 100vw;
    .bg-heading-stroke {
      font-size: 5vw;
      top: 13vh;
    }
    h2 {
      font-size: 9vw !important;
    }
  }
`;
export default SectionHeading;
