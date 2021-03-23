import styled from "@emotion/styled";
import React from "react";

export const CustomCursor = () => {
  const cursorRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);

  return (
    <CursorStyled>
      <div className="app-cursor" ref={cursorRef} />
    </CursorStyled>
  );
};

const CursorStyled = styled.div`
  .app-cursor {
    z-index: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    position: fixed;
  }
`;
