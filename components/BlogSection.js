import styled from "@emotion/styled";
import Blog from "./Blog";
import SectionHeading from "./SectionHeading.js";

function BlogSection() {
  const lastBlogs = [
    {
      date: ["06", "AUG 2019"],
      poster: "Andres Alfaro",
      usedTech: "nextjs",
      bgImg: "https://miro.medium.com/max/10944/0*noEsnJ8kRsectnQg",
      title: "The Start-Up Ultimate Guide to Make your WordPress Journal",
    },
    {
      date: ["15", "NOV 2019"],
      poster: "Andres Alfaro",
      usedTech: "nextjs",
      bgImg: "https://i.ytimg.com/vi/hJiEoOvvIlk/maxresdefault.jpg",
      title:
        "The Start-Up Ultimate -Up Ultimate Guide to Make your WordPress Journ",
    },
    {
      date: ["03", "SEP 2019"],
      poster: "Andres Alfaro",
      usedTech: "nextjs",
      bgImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNOF-V23beuuSnDYMRN0oIOaQcF8LSaWjimQ&usqp=CAU",
      title: "The Start-Up Ultimate Guide to Make your WordPress Journal",
    },
  ];
  return (
    <BlogSectionStyled id="мэдээлэл">
      <SectionHeading heading={"Мэдээлэл"} headingTop={""} />
      <div className="blogs-container">
        {lastBlogs.map((blog) => (
          <Blog
            dateNum={blog.date[0]}
            date={blog.date[1]}
            poster={blog.poster}
            tech={blog.usedTech}
            img={blog.bgImg}
            title={blog.title}
          />
        ))}
      </div>
    </BlogSectionStyled>
  );
}

const BlogSectionStyled = styled.div`
  @media only screen and (orientation: portrait) {
    width: 90% !important;
    align-items: center;
    .blogs-container {
      flex-direction: column;
    }
    .head {
      margin: 5vh 0 0 0 !important;
    }
  }
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .blogs-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }
`;
export default BlogSection;
