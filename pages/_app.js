import MainHeader from "../components/Hamburger/mainHeader";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import Head from "next/head";
import Footer from "../components/Footer.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/DiverseLogo.png" />
      </Head>
      <MainHeader />
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
