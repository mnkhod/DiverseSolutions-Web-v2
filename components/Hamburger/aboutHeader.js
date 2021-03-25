import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const changeLanguage = (ln) => {
  return () => {
    i18n.changeLanguage(ln);
  };
};

const AboutHeader = () => {
  let nav = useRef(null);

  const { t } = useTranslation();

  return (
    <HeaderStyled>
      <div className="desktop-header">
        <div className="inner-desktop-header">
          <div className="logo">
            <img src="DiverseLogo.png" />
            <div className="logoText">
              <p>Diverse</p>
              <p>Solutions</p>
            </div>
          </div>

          <ul className="nav-bar">
            <li>
              <Link href="/">
                <a>{t(`head1`)}</a>
              </Link>
            </li>
            <li>
              <a href="#about2">{t(`head2`)}</a>
            </li>
            {/* <li>
              <a href="#хамт-олон">{t(`head3.2`)}</a>
            </li> */}
            <li>
              <a href="#хамт-олон">{t(`head4.2`)}</a>
            </li>
            <li>
              <a href="#оффис">{t(`head5.2`)}</a>
            </li>
            <li>
              <a href="#холбоо-барих">{t(`head7`)}</a>
            </li>
            <li>
              <a href="#">{t(`head8`)}</a>
            </li>
          </ul>

          <div className="lang">
            <button onClick={changeLanguage("mn")}>mn</button>
            <button onClick={changeLanguage("en")}>en</button>
          </div>
        </div>
      </div>
      <div className={"mobile-header"}>
        <div className="inner-mobile-header">
          <div className="mobile-logo">
            <img className="logo" src="DiverseLogo.png" />
            <div className="mobile-logoText">
              <p>Diverse</p>
              <p>Solutions</p>
            </div>
          </div>
          <img
            className="hamburger"
            onClick={() => (nav.current.style.transform = "translateX(0)")}
            src="https://icon-library.com/images/white-menu-icon/white-menu-icon-12.jpg"
          />
        </div>
        <nav ref={nav}>
          <img
            className="close"
            onClick={() => (nav.current.style.transform = "translateX(100%)")}
            src="https://icon-library.com/images/white-menu-icon/white-menu-icon-12.jpg"
          />
          <div className="langMobile">
            <button onClick={changeLanguage("mn")}>mn</button>
            <button onClick={changeLanguage("en")}>en</button>
          </div>
          <Link href="/">
            <a>{t(`head1`)}</a>
          </Link>

          <a href="/about">{t(`head8`)}</a>
        </nav>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  z-index: 10000;

  @font-face {
    font-family: "Vezla";
    src: local("FiraSans"), url("./vezla.regular.ttf") format("truetype");
  }

  .lang {
    position: relative;
    padding: 5px;
    top: 0.2rem;
    button {
      margin: 1rem 5px;
      background: transparent;
      color: #fff;
      font-family: "Poppins", sans-serif;
      font-size: 10px;
      text-transform: uppercase;
      border-radius: 5px;
      padding: 0.5rem;
      border: 1px solid #fff;
      opacity: 0.6;
    }
    button:nth-of-type(1) {
      padding: 0.5rem 0.4rem;
    }
    button:hover {
      opacity: 1;
    }
  }
  .langMobile {
    position: absolute;
    top: 0;
    left: 1rem;
    padding: 5px;
    button {
      margin: 1rem 5px;
      background: transparent;
      color: #fff;
      font-family: "Poppins", sans-serif;
      font-size: 10px;
      text-transform: uppercase;
      border-radius: 5px;
      padding: 0.5rem;
      border: 1px solid #fff;
      opacity: 0.6;
    }
    button:nth-of-type(1) {
      padding: 0.5rem 0.4rem;
    }
    button:hover {
      opacity: 1;
    }
  }
  .desktop-header {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 0;
    height: 5rem;
    display: flex;
    align-items: center;
    /* border-bottom: 1px solid grey; */
    justify-content: center;
    /* background: transparent; */
  }
  .active {
    transition: 0.5s ease-out;
    background: #0c0f16;
    height: 5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid grey;
    justify-content: center;
  }
  .inner-desktop-header {
    width: 95%;
    display: flex;
    height: 100%;
    justify-content: space-between;
  }
  .logo {
    position: relative;
    margin: auto 0px;
    flex-grow: 1;
    text-align: start;
    display: flex;
    height: 100%;
    img {
      cursor: pointer;
      width: 2.5rem;
      object-fit: contain;
      margin-right: 1rem;
    }
    .logoText {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      height: 50px !important;
      p {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-family: Vezla;
        font-weight: bold;
      }
    }
  }
  .hamburger,
  .close {
    cursor: pointer;
    width: 50px;
    object-fit: contain;
  }
  .close {
    position: absolute;
    right: 20px;
    top: 10px;
  }
  .nav-bar {
    display: flex;
    list-style: none;
    li {
      margin: 10px;
      a {
        font-family: "Poppins", sans-serif;
        font-size: 0.75rem;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #fff;
      }
      :nth-child(6) {
        opacity: 0.6;
        a {
          color: #fff;
          padding: 10px;
          border: 1px solid #fff;
          border-radius: 5px;
        }
      }
      :nth-of-type(6):hover {
        opacity: 1;
      }
    }
  }
  .mobile-header {
    display: none;
    width: 100vw;
    position: relative;
    justify-content: center;
    border-bottom: 1px solid grey;
    align-items: center;
    height: 70px;
  }
  .activeMobile {
    display: none;
    background: #0c0f16;
    transition: 0.5s ease-out;
    height: 5rem;
    border-bottom: 1px solid grey;
    justify-content: center;
  }
  .inner-mobile-header {
    width: 90%;
    display: flex;
    height: 100%;
    justify-content: space-between;
  }
  nav {
    display: flex;
    flex-direction: column;
    z-index: 100;
    position: absolute;
    background: #000;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    padding: 20vh 0 0 20px;
    transform: translateX(100%);
    transition: 0.5s ease-out;
    a {
      padding: 1rem 0;
      border-top: 1px solid grey;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 451;
      opacity: 0.7;
    }
  }

  @media (max-width: 964px) {
    z-index: 100;
    .active {
      display: none;
    }
    .desktop-header {
      display: none;
    }
    .mobile-header {
      display: flex;
    }

    .activeMobile {
      display: flex;
    }

    .lang {
      display: none;
    }

    .langMobile {
      display: block;
    }

    .mobile-logo {
      width: 2.5rem;
      position: relative;
      left: 0;
      margin: auto 0px;
      text-align: start;
      display: flex;
      img {
        cursor: pointer;
        width: 2.5rem;
        object-fit: contain;
        margin-right: 1rem;
        background: none !important;
      }
      .mobile-logoText {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        height: 50px !important;
        p {
          margin: 0;
          padding: 0;
          font-size: 2.5vh;
          font-family: Vezla;
          font-weight: bold;
        }
      }
    }
  }
`;

export default AboutHeader;
