import React from "react";
import styled from "@emotion/styled";
import Typical from "react-typical";

function TypeText() {
  return (
    <TextStyled>
      <div className="textStyled">
        <header className="App-header">
          <h1>
            Бүтээлч сэтгэлгээг өдөөж, амьдралыг баяжуул
            {/* <Typical
              loop={Infinity}
              wrapper="h1"
              duration={100}
              steps={["амьдралыг баяжуул", 2000, "чанарыг бүтээ", 2000]}
            /> */}
          </h1>
          <p>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Ухаалаг вэбсайтууд.",
                2000,
                "Бодит үр дүн.",
                2000,
                "Инноваци биднээс эхэлнэ.",
                3000,
              ]}
            />
          </p>
        </header>
      </div>
    </TextStyled>
  );
}

const TextStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  z-index: 1;
  text-align: center;
  letter-spacing: 2px;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 3rem !important;
    font-weight: 700;
    letter-spacing: 4px;
    width: 80vw;
    height: 30vh;
  }

  p {
    color: #eee;
    font-size: 1rem;
  }
`;

export default TypeText;
