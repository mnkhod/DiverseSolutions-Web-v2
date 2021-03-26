import styled from "@emotion/styled";
import React from "react";
import Swal from "sweetalert2";

import { useTranslation } from "react-i18next";

function Footer() {
  function selfie() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Таныг амжилттай бүртгэлээ",
      showConfirmButton: true,
      // timer: 2000,
    });
  }

  const { t, i18n } = useTranslation();

  return (
    <FooterStyled id="contact">
      {/* <span className="coloredbg"></span>
      <span className="coloredbg2"></span> */}
      <div className="left">
        <div className="logo">
          <img src="DiverseLogo.png" alt="logo" />
          <div className="logoText">
            <p>Diverse</p>
            <p>Solutions</p>
          </div>
        </div>
        <div className="company-location">
          <p>
            <span>{t(`contactLeftMail`)}</span>
            <a target="_blank" href="mailto:info@dsolutions.tech">
              {t(`contactLeftMailDesc`)}
            </a>
          </p>
          <p>
            <span>{t(`contactLeftAdd`)}</span>
            {t(`contactLeftAddDesc`)}
          </p>
          <p>
            <span>{t(`contactLeftPhone`)}</span>
            <a href="tel:+97691951199">{t(`contactLeftPhoneDesc`)}</a>
          </p>
        </div>
        <h3 className="half-styled">
          <span>{t(`contactLeftFollowSpan`)}</span>
          {t(`contactLeftFollow`)}
        </h3>
        <div className="social-accounts">
          <a
            target="_blank"
            href="https://www.facebook.com/aidiversesolutions/"
          >
            <img src="facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="instagram.png" alt="instagram" />
          </a>
          <a href="#">
            <img src="linkedin.png" alt="twitter" />
          </a>
        </div>
      </div>
      <div className="right">
        <h3 className="half-styled">
          <span>{t(`contactRightTitleSpan`)}</span>
          {t(`contactRightTitle`)}
        </h3>
        {/* <div className="email-box-container">
          <p>{t(`contactRightDesc`)}</p>
          <form className="inner-box">
            <input type="email" placeholder={t(`contactRightInput`)} />
            <button onClick={selfie}>{t(`contactRightButton`)}</button>
          </form>
        </div> */}
        <div className="getInfo">
          <p>{t(`contactRightDesc`)}</p>
          <a
            data-aos="flip-left"
            data-aos-duration="2000"
            href="mailto:enkhamgalan@dsolutions.tech"
            target="_blank"
          >
            <span>{t(`aboutSendCommentButton`)}</span>
          </a>
        </div>
      </div>
      <span className="bottomColor"></span>
      <div className="bottom">
        <p>{t(`contactBottomDesc`)}</p>
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 100vw !important;
    box-sizing: border-box;
    height: 80vh;
    padding: 0;
    margin: 0;

    .left {
      width: 50vw !important;
      height: 70vh !important;
      padding: 100px 20px 90px 85px;
      background: #151921;
      img {
        width: 5vh !important;
      }
      .company-location {
        font-size: 1.5vh;
        opacity: 0.8;
      }
    }

    .right {
      position: sticky;
      width: 50vw !important;
      height: 70vh !important;
      padding: 150px 70px 90px 70px !important;
      background: #0e1016;
      right: 0 !important;
      .inner-box {
        height: 4vh;
      }
      p {
        font-size: 1.5vh;
      }
    }

    .our-work {
      display: flex;
      flex-direction: column;
      margin-top: 5vh;
      .our-work-img {
        margin-top: 2vh;
        justify-content: space-between;
        padding: 0 20px;
        img {
          width: 3rem;
          object-fit: contain;
          margin: 0 2vh;
          border-radius: 50%;
        }
      }
    }

    .bottom {
      position: absolute !important;
      bottom: 0 !important;
      height: 10vh !important;
      width: 100% !important;
      p {
        left: 20vw;
        position: absolute;
      }
    }

    .bottomColor,
    .coloredbg2,
    .coloredbg {
      display: none;
    }
    .right h3 {
      margin-bottom: 100px !important;
    }
    .getInfo {
      height: 30vh !important;
      width: 100%;
      position: relative;
      /* margin: 0 !important; */
      /* padding: 0 !important; */
      p {
        position: absolute;
        top: 0;
      }
      a {
        position: absolute;
        bottom: 0 !important;
        left: 0;
        height: 5vh !important;
        width: 100% !important;
        text-align: center;
        margin-right: 50%;
        margin-bottom: 0 !important;
        span {
          z-index: 4;
          font-size: 2vw !important;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 100vw !important;
    flex-direction: column;
    .getInfo {
      padding: 0 !important;
      width: 80%;
      a {
        padding: 2vh 2vh !important;
        height: 6vh !important;
        width: 35vh !important;
        top: 50%;
        span {
          z-index: 4;
          display: block;
          font-size: 1.5vh !important;
        }
      }
    }
    .bottomColor,
    .coloredbg2 {
      display: none;
    }
    p,
    h3 {
      font-size: 2.2vh !important;
    }
    .coloredbg,
    .left,
    .right,
    .bottom {
      position: relative;
      left: -18px;
      width: 100vw !important;
      height: auto !important;
      justify-content: center !important;
      align-items: center !important;
    }
    .left,
    .right {
      left: 0;
      right: 0;
      width: 100%;
      align-items: start !important;
      margin: 3vh 0;
    }
    .left {
      padding: 30px 20px !important;
      background: #151920;
      p {
        opacity: 1;
        letter-spacing: 2px;
      }
    }
    .right {
      padding: 20px 10px 50px 30px !important;
      p {
        opacity: 0.6;
      }
      .inner-box button {
        font-size: 1.7vh !important;
      }
    }
    img {
      width: 6vh !important;
      height: 6vh !important;
    }
    .social-accounts {
      width: 60%;
      margin: auto;
      justify-content: space-around !important;
      a {
        width: 6vh !important;
        height: 6vh !important ;
        img {
          width: 2vh !important;
          height: 2vh !important;
        }
      }
    }
    .half-styled {
      width: 5vh !important;
      letter-spacing: 3px !important;
      font-size: 13px !important;
      span {
      }
    }

    .right {
      height: 35vh !important;
      padding-top: 0 !important;
    }

    .bottom {
      width: 100%;
      left: 0;
      right: 0;
      opacity: 0.6;
      height: 7% !important;
      p {
        font-size: 1.2vh !important;
        padding: 0 3vh;
      }
    }
  }
  font-family: "Barlow Condensed", sans-serif;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 5vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  .coloredbg {
    z-index: 1;
    position: absolute;
    background: #151921;
    width: 100vw;
    top: 0;
    right: 50%;
    height: 100%;
  }
  .coloredbg2 {
    z-index: 1;
    position: absolute;
    background: #11141b;
    width: 50vw;
    top: 0;
    left: 50%;
    height: 100%;
  }
  .left {
    flex-basis: 50%;
    height: 60vh;
    padding: 100px 15px 90px 85px;
    background: #151921;
    h3 {
      margin: 30px 0;
    }
    width: 50%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .logo {
      position: relative;
      margin: auto 0px;
      margin-bottom: 1.5vw;
      text-align: start;
      display: flex;
      img {
        cursor: pointer;
        width: 2.5rem;
        object-fit: contain;
        margin-right: 1rem;
      }
      .logoText {
        margin: auto 0;
        flex-direction: column;
        p {
          margin: 0;
          padding: 0;
          font-size: 1rem;
          font-family: Vezla;
          font-weight: bold;
        }
      }
    }
    .company-location {
      p {
        letter-spacing: 1px;
        font-weight: 100;
      }
      span {
        font-weight: bold;
        margin-right: 1vw;
        letter-spacing: 2px;
      }
    }
    .social-accounts {
      display: flex;
      justify-content: left;
      a {
        width: 50px;
        height: 50px;
        position: relative;
        margin: 0 1vw;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: #181c24;
          border-radius: 50%;
        }
      }
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        width: 15px;
        height: 15px;
        object-fit: contain;
      }
    }
  }
  .right {
    flex-basis: 50%;
    height: 60vh;
    background: #0c0f16;
    padding: 100px 70px 90px 100px;
    display: flex;
    flex-direction: column;
    text-align: start;
    h3 {
      margin: 0;
    }
    .getInfo {
      flex-direction: column;
      height: 100%;
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      padding-top: 5rem;

      p {
        position: absolute;
        top: 10%;
        padding-bottom: 20px;
        opacity: 0.5;
        width: 100%;
        text-align: start;
      }
      a {
        width: 40vh;
        position: absolute;
        left: 0;
        top: 50%;
        text-align: center;
        color: #fff;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        border: 0.15rem solid white;
        padding: 1rem 2rem;
        margin-bottom: 2rem;
        overflow: hidden;
        transition: 0.5s;
        z-index: 1;
        span {
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
          color: #000 !important;
          transition: 0.5s;
        }
      }
    }
  }
  .half-styled {
    position: relative;
    letter-spacing: 0.2vw;
    font-size: 0.8rem;
    display: inline-block;
    white-space: nowrap;
    width: 10px;
    flex-grow: 0;
    padding: 0.5vw;
    background: #1f2229;
    z-index: 2;
    font-weight: 300;
    span {
      padding: 7px 0px 7px 7px;
      margin-top: 0px;
      padding-right: 0px;
      background: #1f2229;
    }
  }

  /* .bottomColor {
    z-index: 1;
    position: absolute;
    background: #13161d;
    width: 1000vw;
    bottom: 0;
    left: -5000px;
    height: 5vw;
  } */

  .our-work {
    display: flex;
    flex-direction: column;
    margin-top: 5vh;

    .our-work-img {
      width: 100%;
      margin-top: 2vh;
      padding: 0 20px;
      z-index: 1;
      align-items: center;
      margin-left: 20%;
      img {
        width: 4rem;
        object-fit: contain;
        margin: 0 2vh;
        border-radius: 50%;
      }
    }
  }

  .bottom {
    position: absolute;
    bottom: 0;
    color: #999;
    width: 100%;
    height: 5vw;
    display: grid;
    place-items: center;
    font-size: 0.813rem;
    z-index: 2;
    letter-spacing: 2px;
    background: #13161d;
  }
`;
export default Footer;
