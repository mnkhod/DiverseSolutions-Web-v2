import styled from "@emotion/styled";

function Blog({ dateNum, date, poster, tech, img, title }) {
  return (
    <BlogStyled>
      <img src={img} alt={img} />
      <div className="inner-blog">
        <div className="date">
          <p className="datenum">{dateNum}</p>
          <p>{date}</p>
        </div>
        <div className="poster">
          <h3>BY / {poster}</h3>
          <p>{tech}</p>
        </div>
        <p className="title">{title}</p>
        <a href="#бидний-тухай">ДЭЛГЭРЭНГҮЙ</a>
      </div>
    </BlogStyled>
  );
}

const BlogStyled = styled.div`
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 100% !important;
    margin: 5vh 0 !important;
    height: 50vh !important;
    img {
      opacity: 0.1 !important;
    }
    .inner-blog {
      padding: 60px 20px !important;
    }
    p,
    a,
    h3 {
      font-size: 3vh !important;
    }
    a {
      width: 8vw !important;
      padding: 1vw !important;
    }
    .poster {
      justify-content: space-around !important;
    }
  }

  @media (max-width: 768px) {
    width: 100% !important;
    margin: 5vh 0 !important;
    height: 50vh !important;
    img {
      opacity: 0.1 !important;
    }
    .inner-blog {
      padding: 60px 20px !important;
    }
    p,
    a,
    h3 {
      font-size: 2.5vh !important;
    }
    a {
      width: 8vw !important;
      padding: 1vw !important;
      font-size: 1.5vh !important;
    }
    .poster {
      justify-content: start !important;
      h3 {
        padding-right: 50px;
      }
    }
  }
  font-family: "Barlow Condensed", sans-serif;
  &:nth-of-type(1),
  &:nth-of-type(3) {
    background: #13161d;
    img {
      opacity: 0;
    }
  }
  width: 31.5%;
  position: relative;
  &:hover img {
    opacity: 0.3;
    transition: 1s;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.05;
    transition: 1s;
    z-index: 1;
  }
  .inner-blog {
    width: 100%;
    height: 100%;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    z-index: 1;
    .date {
      margin: 0;
      .datenum {
        font-weight: 400;
        font-size: 2rem;
        margin: 0;
        line-height: 0;
      }
    }
    .poster {
      display: flex;
      align-items: center;
      justify-content: left;
      font-weight: 200;
      h3 {
        font-weight: 500;
        font-size: 1rem;
        text-transform: uppercase;
      }
      p {
        color: #75dab4;
        margin: 0 10px;
      }
    }
    .title {
      height: 40%;
      font-family: "Poppins", sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 2;
    }
    a {
      font-size: 0.7rem;
      font-weight: 300;
      margin-top: 10px;
      letter-spacing: 2px;
      display: inline-block;
      white-space: nowrap;
      flex-grow: 0;
      padding: 10px;
      z-index: 2;
      position: relative;
      color: #eee;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: #1f2229;
        width: 50px;
        z-index: -1;
      }
    }
  }
`;
export default Blog;
