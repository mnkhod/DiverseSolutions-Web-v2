import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
// import { CustomCursor } from "../components/CustomCursor/index";
import Footer from "../components/Footer.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <CustomCursor /> */}
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
