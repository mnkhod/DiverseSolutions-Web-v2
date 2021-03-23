import { Global, css } from "@emotion/core";

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@1,700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Source+Sans+Pro&display=swap");
        @media only screen and (orientation: portrait) {
          body {
            font-size: 2vh !important;
            line-height: normal !important;
            h2 {
              font-size: 5vh !important;
            }
            a {
              color: #fff;
            }
            .slide-desc {
              width: 60% !important;
            }
            .swiper-button-prev,
            .swiper-button-next {
              width: 7vh !important;
              height: 7vh !important;
              font-size: 2vh !important;
            }
          }
        }
        * {
          box-sizing: border-box;
        }
        html,
        body {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          background: #0c0f16;
          color: white;
          font-family: "Poppins", sans-serif;
          /* cursor: none; */
          cursor: url("data:image/svg+xml,%3Csvg height='6' width='6' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' fill='%23eee' r='4'/%3E%3C/svg%3E")
              3 3,
            auto;
        }
        html {
          scroll-behavior: smooth;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        .slide-desc {
          width: 60% !important;
        }
        .home-anchor {
          font-family: "Barlow Condensed", sans-serif;
          letter-spacing: 0.2rem;
          font-size: 0.9rem;
          font-weight: 100;
          padding: 0.7rem 0.5rem;
          z-index: 2;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            background: #181b22;
            width: 50px;
            height: 100%;
            z-index: -1;
          }
        }
      `}
    />
  </>
);

export default GlobalStyles;
