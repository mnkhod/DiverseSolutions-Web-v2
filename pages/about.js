import styled from "@emotion/styled";
import PaboutIntroSection from "../components/PaboutIntroSection.js";
// import PaboutCommentSection from "../components/PaboutCommentSection.js";
import PaboutOurTeamSection from "../components/PaboutOurTeamSection.js";
import PaboutOurPurposeSection from "../components/PaboutOurPurposeSection.js";
// import PaboutOurClientsSection from "../components/PaboutOurClientsSection.js";
import PaboutConnectUsSection from "../components/PaboutConnectUsSection.js";

import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
SwiperCore.use([Navigation, Autoplay, Pagination]);

const commentData = [
  {
    profileImg:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Alex Regelman",
    text:
      "Lorem ipsum dolaperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
    info: "Co-founder, Colabrio",
  },
  {
    profileImg:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Alex Regelman",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
    info: "Co-founder, Colabrio",
  },
  {
    profileImg:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Alex Regelman",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
    info: "Co-founder, Colabrio",
  },
  {
    profileImg:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Alex Regelman",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
    info: "Co-founder, Colabrio",
  },
];

function About() {
  return (
    <AboutStyled>
      <PaboutIntroSection />
      {/* <PaboutCommentSection /> */}
      <PaboutOurTeamSection />
      <PaboutOurPurposeSection />
      {/* <PaboutOurClientsSection /> */}
      <PaboutConnectUsSection />
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  /* width: 100%; */
  margin: 0;
`;
export default About;
