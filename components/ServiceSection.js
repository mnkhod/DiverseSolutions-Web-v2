import styled from "@emotion/styled";
import CustomCard from "./CustomCard.js";
import SectionHeading from "./SectionHeading.js";

import { useTranslation } from "react-i18next";

function ServiceSection() {
  const { t, i18n } = useTranslation();

  return (
    <ServiceSectionStyled id="services">
      <div className="inner-container">
        <SectionHeading
          heading={t(`serviceTitle2`)}
          headingTop={t(`serviceTitle1`)}
        />
        <div className="cards-container">
          <div className="imaged-card">
            <div className="inner-imaged-card">
              <span>{t(`serviceCard1Top`)}</span>
              <span> {t(`serviceCard1Bottom`)}</span>
            </div>
          </div>
          <CustomCard
            imgSource={"/web.png"}
            firstHead={t(`serviceCard2Title1`)}
            secondHead={t(`serviceCard2Title2`)}
            text={t(`serviceCard2Desc`)}
            bgColor={"#181b21"}
          />
          <CustomCard
            imgSource={"/app.png"}
            firstHead={t(`serviceCard3Title1`)}
            secondHead={t(`serviceCard3Title2`)}
            text={t(`serviceCard3Desc`)}
            bgColor={"#1a1e25"}
          />
          <CustomCard
            imgSource={"/graphic.png"}
            firstHead={t(`serviceCard4Title1`)}
            secondHead={"-"}
            text={t(`serviceCard4Desc`)}
            bgColor={"#20242c"}
          />
        </div>
      </div>
    </ServiceSectionStyled>
  );
}

const ServiceSectionStyled = styled.div`
  .image-card {
    width: 100%;
  }
  width: 100%;
  .inner-container {
    width: 1200px;
    margin: 0 auto;
  }
  .titles {
    color: red;
  }
  .cards-container {
    margin: 0 auto;
    display: flex;
  }
  .imaged-card {
    width: 25vw;
    position: relative;
    background-image: url("service3.png");
    background-size: cover;
    background-repeat: no-repeat;
    .inner-imaged-card {
      width: 100%;
      height: 100%;
      padding: 25% 10%;
      background: rgba(12, 15, 22, 0.8);
      span {
        display: block;
        font-family: "Barlow Condensed", sans-serif;
        font-weight: 500;
        line-height: 1.5;
        font-size: 1.875rem;
      }
    }
  }

  @media (max-width: 1200px) and (min-width: 1025px) {
    width: 100vw;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    margin-top: 0 !important;
    margin: 0 auto;
    padding: 0 !important;
    .inner-container {
      width: 100vw;
      object-fit: contain;
    }
    .imaged-card {
      width: 100%;
      height: 40vh;
      .inner-imaged-card {
        padding: 10% 5%;
        span {
          font-size: 50px;
        }
      }
    }
    .cards-container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100% !important;
    }
    h2 {
      margin: 5vh auto !important;
    }
    a {
      padding: 1vw !important;
      width: 8vh !important;
    }
  }
`;
export default ServiceSection;
