import Head from "next/head";
import MainHeader from "../components/Hamburger/mainHeader";
import HomeSlidingSection from "../components/HomeSlidingSection";
import AboutUsSection from "../components/AboutUsSection";
import ServiceSection from "../components/ServiceSection";
//import IntroVideoSection from '../components/IntroVideoSection.js'
import OurWorksSection from "../components/OurWorksSection";
// import CommentSection from "../components/CommentSection";
// import BlogSection from "../components/BlogSection";
// import PaboutCommentSection from "../components/PaboutCommentSection";
// import PaboutOurClientsSection from "../components/PaboutOurClientsSection";
import PaboutConnectUsSection from "../components/PaboutConnectUsSection.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Diverse Solutions</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="../wp-includes/js/jquery/jqueryb8ff.js?ver=1.12.4"
        ></script>
        <script type="text/javascript">
          var background_mode = "waves"; var background_waves_background_color =
          "#000000"; var background_waves_dot_color = "#75dab4"; var
          background_waves_dot_amount_x = 20; var background_waves_dot_amount_y
          = 60; var background_waves_dot_spacing = 120; var
          background_waves_dot_expansion = 5; var background_waves_dot_intensity
          = 10; var background_waves_distance = 15; var
          background_parallax_effect_toggle = "1"; var
          background_parallax_effect_friction_x = 0.86; var
          background_parallax_effect_friction_y = 0.86; var
          background_parallax_effect_invert = "1"; var
          background_particle_effect_toggle = "1"; var
          background_particle_effect_toggle = "1"; var
          background_particle_effect_activation_radius = 200; var
          background_particle_effect_particle_amount = 180; var
          background_particle_effect_particle_speed = 10; var
          background_particle_effect_particle_color = "rgba(255,255,255,0.65)";
          var background_particle_effect_line_color = "rgba(255,255,255,0.65)";
        </script>
      </Head>
      <MainHeader />
      <HomeSlidingSection />
      <AboutUsSection />
      <ServiceSection />
      <OurWorksSection />
      <PaboutConnectUsSection />
      {/* <PaboutCommentSection />
      <PaboutOurClientsSection /> */}
      {/* <BlogSection /> */}
      <script
        type="text/javascript"
        src="../wp-content/themes/gravity_demo/assets/js/plugins0a05.js?ver=20170620"
      ></script>
      <script
        type="text/javascript"
        src="../wp-content/themes/gravity_demo/assets/js/main0a05.js?ver=20170620"
      ></script>
      <script
        type="text/javascript"
        src="../wp-content/themes/gravity_demo/assets/js/three.min3469.js?ver=20170318"
      ></script>
      <script
        type="text/javascript"
        src="../wp-content/themes/gravity_demo/assets/js/hero0a05.js?ver=20170620"
      ></script>
    </>
  );
}
