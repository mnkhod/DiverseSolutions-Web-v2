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
    <FooterStyled id="холбоо-барих">
      {/* <span className="coloredbg"></span>
      <span className="coloredbg2"></span> */}
      <div className="left">
        <img src="DiverseLogo.png" alt="" className="logo" />
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
        <div className="email-box-container">
          <p>{t(`contactRightDesc`)}</p>
          <form className="inner-box">
            <input type="email" placeholder={t(`contactRightInput`)} />
            <button onClick={selfie}>{t(`contactRightButton`)}</button>
          </form>
        </div>
        {/*
				<h3 className='half-styled'>
                    <span></span>
                    SOCIAL POSTS
                </h3>
				*/}
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
  }

  @media (max-width: 768px) {
    width: 100vw !important;
    flex-direction: column;
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
    .email-box-container {
      width: 90% !important;
      margin-bottom: 5vh !important;
      input,
      button {
        padding: 2vh !important;
        font-size: 2vh !important;
      }
    }
    input {
      background: rgba(255, 255, 255, 0.1);
      width: 70vh !important;
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
    height: 60vh;
    width: 50vw;
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
    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      margin-bottom: 1vw;
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
    width: 49.4vw;
    height: 60vh;
    background: #0c0f16;
    padding: 100px 70px 90px 100px;
    display: flex;
    flex-direction: column;
    text-align: start;
    h3 {
      margin: 0;
    }
    .email-box-container {
      margin: 15px 0 15px 0;

      z-index: 1;
      p {
        padding-bottom: 20px;
        opacity: 0.5;
      }
      .inner-box {
        display: flex;
        * {
          border: none;
        }
        input {
          padding: 1vw;
          background: #14171e;
          color: white;
          width: 70%;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.01);
          font-family: "Barlow Condensed", sans-serif;
          border: 1px solid #1f2229;
          border-right: none;
          z-index: 2;
        }
        button {
          font-size: 0.8rem;
          width: 35%;
          padding: 5px;
          background: #ffffff05;
          color: #75dab4;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: "Barlow Condensed", sans-serif;
          z-index: 2;
          border: 1px solid #1f2229;
          cursor: pointer;
        }
      }
    }

    h3 {
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
